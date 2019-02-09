import pytesseract as tess
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
import sys
import pymongo
import os


def show_image(img):
    show_image('No Title', img)

def show_image(name, img):
    cv.imshow(name, img)
    cv.waitKey(0)
    
def get_address(addr):
    import re

    #looking for 1-5 numbers, space, lets say 20 chars for street name and suite, apt, etc, endl or comma
    #This is the first iteration of regex to isolate the address in a general form
    add = re.search('\n[-0-9]{1,6} {1,3}(.*)\n{1,4}[A-Z ]{1,20}, {1,3}[A-Z]{2} [0-9]{5}', addr.upper())[0]
    city = re.search('\n[A-Z ]{1,20},', add)[0].strip().replace(',','')
    #Replace end line char with space, convert double spaces to single space
    add = add.replace('\n', ' ')
    add = add.replace('  ', ' ')
    print(add)
    #Extract state and zip from address string
    state_zip = re.search(' [A-Z]{2} [0-9]{5}', add)[0].strip()

    #Isolate 
    apt_suite_city = re.search(' [A-Z.]{1,10} [0-9]{1,5} [A-Z ]{1,20},', add)
    apt_suite = []
    
    if(apt_suite_city == None):
        #If there is no appartment or suite number, we need to change how we identify city
        apt_suite_city = re.search(' [A-Z ]{1,20}, {1,2}[A-Z]{2} ', add)[0].strip()
    else:
        #if there is a apt or suite number, we use that info to locate city
        apt_suite_city = apt_suite_city[0].strip()
        apt_suite = apt_suite = re.search('[A-Z]{1,10} [0-9]{1,5}', apt_suite_city)[0].strip()
        
    #Extract state, zipcode, and address from the isolated strings
    state = re.search('[A-Z]{2}', state_zip)[0].strip()
    zipcode = re.search('[0-9]{5}', state_zip)[0].strip()
    addr = re.search('[0-9]{1,5} ', add)[0].strip()
    street = re.search('[A-Z ]{1,20} (ROAD|LANE|RD|STREET|LN|ST|AVE|PKWY|PARKWAY|CIRCLE|CIR|AVENUE|AVE|HIGHWAY|HWY|SWAURE|SQ|COURT|CT)', add)[0].strip()
    
    print(addr)
    print(street)
    print(apt_suite)
    print(city)
    print(state)
    print(zipcode)

    return addr, street, apt_suite, state, city, zipcode


def image_to_text(path):
    #TEST IMAGE
    img = cv.imread(path)

    #CONVERT IMAGE TO GRAYSCALE
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)

    #Denoise Grayscale Image
    gray = cv.fastNlMeansDenoising(gray, None, 10, 7, 21)
    
    show_image('Denoised',gray)
    
    #APPLY A BINARY THRESHOLD
    thr = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY, 13, 2)
    
    show_image('Thresh',thr)

    #CONVERT TEXT DATA TO STRING
    text = tess.image_to_string(thr, lang='eng')
    return get_address(text)

def address_to_json(filename, addr, street, apt_suite, state, city, zipcode):
    data = {"user": {
                "address": {
                    "street": street,
                    "apt":apt_suite,
                    "city": city,
                    "state": state,
                    "zip5": zipcode,
                    "zip4": ""
                },
                "name": {
                    "first": "",
                    "last": ""
                }
            },
            "mail": {
                "type": "",
                "ads": [{
                        "name": filename,
                        "logo": "",
                        "ad": ""
                        }
                ],
            }
        }
    return data

def update_ad(json, brandname, logourl, adurl):
    json["mail"]["type"] = "ad"
    json["mail"]["ads"][0]["name"] = brandname
    json["mail"]["ads"][0]["logo"] = logourl
    json["mail"]["ads"][0]["ad"] = adurl

    return json

def update_regular(json):
    json["mail"]["type"] = "regular"

    return json

#---------------------------------------------------------

print(cv.__version__)

jsonContentList = []

path = "newBGAd.png"
addr, street, apt_suite, state, city, zipcode = image_to_text(path)
burgerKing = address_to_json("burgerking", addr, street, apt_suite, state, city, zipcode)
burgerKing = update_ad(burgerKing, "burgerking", 
"https://pbs.twimg.com/profile_images/1093526161362223104/ibuCSwiI_400x400.jpg", 
"https://github.com/shahkevaln/USPS-Hackathon_Team-NULL/blob/master/ocr/newBGAd.png")
jsonContentList.append(burgerKing)

path = "newMDAd.png"
addr, street, apt_suite, state, city, zipcode = image_to_text(path)
mcDonald = address_to_json("mcdonalds", addr, street, apt_suite, state, city, zipcode)
mcDonald = update_ad(mcDonald, "mcdonalds",
"https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png",
"https://github.com/shahkevaln/USPS-Hackathon_Team-NULL/blob/master/ocr/newMDAd.png")
jsonContentList.append(mcDonald)

path = "sample-snail-mail-invoice.jpg"
addr, street, apt_suite, state, city, zipcode = image_to_text(path)
regularMail = address_to_json("regular", addr, street, apt_suite, state, city, zipcode)
regularMail = update_regular(regularMail)
jsonContentList.append(regularMail)

print(jsonContentList)

# create a mongo client for python
mongoClient = pymongo.MongoClient('mongodb://127.0.0.1:3001/meteor', serverSelectionTimeoutMS=10000)
mongoDB = mongoClient['meteor']
# first look if the db has collection named "ocr"
collectionList = mongoDB.list_collection_names()
ocrName = 'ocr'
if ocrName not in collectionList:
    # if not, make a new collection called "ocr"
    mongoDB.create_collection(ocrName)

# now store json data into our mongodb collection
mongoDB[ocrName].insert_many(jsonContentList)