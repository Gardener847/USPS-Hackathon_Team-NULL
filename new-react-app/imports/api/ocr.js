import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const ocr = new Mongo.Collection('ocr');

if (Meteor.isServer) {
    Meteor.publish('ocr', () => {
        return ocr.find();
    });
}