import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Meteor } from 'meteor/meteor';

import {CategoryCollections} from '../api/category';
import {UserInfoCollections} from '../api/userFile';

// import Section from './Section';
import SaveAction from './SaveActions';
import TrashMail from './TrashMail';
import WantedMail from './WantedMails';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trash: [],
      preference: [],
      fromTrashToMayLike: [],
      likeToTrash: []
    };

    this.restore = this.restore.bind(this);
    this.restoreTrash = this.restoreTrash.bind(this);
    this.preference = this.preference.bind(this);
    this.addPreferences = this.addPreferences.bind(this);
    this.trash = this.trash.bind(this);
    this.placeToTrash = this.placeToTrash.bind(this);
  }
  restore(brand, logo) {
    let arr = this.state.trash;
    if (!arr.includes(arr.brand)) {
      let obj = {
        brand: brand,
        logo: logo
      };
      console.log("brand: ", obj.brand);
      console.log("logo: ", obj.logo);
      arr.push(obj);
      this.setState = ({
        trash: arr
      });
    }
    else if (arr.includes(arr.brand)) {
      let index = arr.indexOf(arr.brand);
      arr.splice(index, 1);
      this.setState = ({
        trash: arr
      });
    }
  }
  restoreTrash(event) {
    event.preventDefault();
    let arr = this.state.trash;
    console.log("inside restore trash: ", arr);
    let transfer = [];
    for (let i in arr) {
      let str = arr[i].brand;
      console.log("item's brand is ", str);
      transfer.push(<WantedMail key={arr[i].brand} logo={arr[i].logo} brand={arr[i].brand} trigger={() => this.preference(str)}/>);
      document.getElementById(arr[i].brand).style.display = "none";
    }
    arr = [];
    this.setState = ({
      trash: arr
      // fromTrashToMayLike: transfer
    });

    // update redux state
    this.props.updateLikes('UPDATE_SUGGESTIONS', transfer);
  }
  preference(arg) {
    console.log("inside preference ", arg);
    let arr = this.state.preference;
    if (!arr.includes(arg) || !arr.includes(arg.brand)) {
      arr.push(arg);
      this.setState = ({
        preference: arr
      });
    }
    else if (arr.includes(arg) || arr.includes(arg.brand)) {
      let index = arr.indexOf(arg);
      arr.splice(index, 1);
      this.setState = ({
        preference: arr
      });
    }
  }
  addPreferences(event) {
    event.preventDefault();
    console.log("inside add preferences");
    let arr = this.state.preference;
    for (let i in arr) {
      document.getElementById(arr[i]).style.display = "none";

      // ADD TO PREFERENCES IN DB
      Meteor.call('insertPreference', arr[i],
        (error) => {
          if (error) {
            console.log(erro);
          }
          else {
            console.log("preference added: ", arr[i]);
          }
        }
      );
    }
    arr = [];
    this.setState = ({
      preference: arr
    });
  }
  trash(brand, logo) {
    let arr = this.state.likeToTrash;
    let found = false;
    for (let i in arr) {
      if (arr[i].brand == brand) {
        arr.splice(i, 1);
        this.setState = ({
          likeToTrash: arr
        });
        found = true;
      }
    }
    if (!found) {
      let obj = {
        brand: brand,
        logo: logo
      };
      arr.push(obj);
      this.setState = ({
        likeToTrash: arr
      });
    }
  }
  placeToTrash(event) {
    event.preventDefault();
    console.log("inside place to trash");

    let arr = this.state.likeToTrash;
    let transfer = [];
    for (let i in arr) {
      let str = arr[i];
      console.log("item's brand is ", str);
      transfer.push(<TrashMail key={arr[i].brand} logo={arr[i].logo} brand={arr[i].brand} trigger={() => this.preference(str)}/>);
      document.getElementById(arr[i].brand).style.display = "none";
    }
    arr = [];
    this.setState = ({
      likeToTrash: arr
    });

    this.props.updateLikes('UPDATE_TRASH', transfer);
  }
  render() {
    console.log("render...");
    let rend = null;
    let rend1 = null;
    if (this.props.addedItems) {
      rend = this.props.addedItems;
    }
    if (this.props.addedTrash) {
      rend1 = this.props.addedTrash;
    }
    return (
      <div>
        <button className="btn-noStyle btn_trash" type="button" data-toggle="modal" data-target="#trashes">
          <i className="fa fa-trash icon-dislike"></i>
        </button>
        <div className="modal fade" id="trashes" tabIndex="-1" role="dialog" aria-labelledby="trashes" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content content_size">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body content_center">
                <form onSubmit={this.restoreTrash}>
                  <TrashMail logo="./logos/appleB.jpg" brand="Applebee's" 
                  addRestore={() => this.restore("Applebee's", "./logos/appleB.jpg")}/>
                  <TrashMail logo="./logos/jackNDBox.png" brand="Jack In The Box" 
                  addRestore={() => this.restore("Jack In The Box", "./logos/jackNDBox.png")}/>
                  {
                    rend1 ? 
                    this.props.addedTrash.map(inst => {
                      return inst;
                    })
                    :
                    null
                  }
                  <SaveAction action="Restore"/>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <Section header="My Mails"
        logo1="./logos/McD.png" ad1="./ads/McD.jpeg" brand1="McDonald's"
        logo2="./logos/BK.jpg" ad2="./ads/BK.jpg" brand2="Burger King"
        />
        <SaveAction action="Delete"/> */}

        <form onSubmit={this.placeToTrash}>
          <div>
            <h1 className="header_my-mails">
              My Mails
            </h1>
            <hr></hr>
            <WantedMail logo="./logos/McD.png" 
            brand="McDonald's"
            trigger={() => this.trash("McDonald's", "./logos/McD.png")}/>
            <WantedMail logo="./logos/BK.jpg" 
            brand="Burger King"
            trigger={() => this.trash("Burger King", "./logos/BK.jpg")}
            />
          </div>
          <SaveAction action="Delete"/>
        </form>

        <form onSubmit={this.addPreferences}>
          <div>
            <h1 className="header_my-mails">
              Items You May Like
            </h1>
            <hr></hr>
            <WantedMail logo="./logos/CarlsJr.jpg" 
            brand="Carl's Jr"
            trigger={() => this.preference("Carl's Jr")}/>
            <WantedMail logo="./logos/Wendys.jpg" 
            brand="Wendy's"
            trigger={() => this.preference("Wendy's")}
            />
            {
              rend ? 
              this.props.addedItems.map(inst => {
                return inst;
              })
              :
              null
            }
          </div>
          <SaveAction action="Add Preferences"/>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
    addedItems: state.addedItems,
    addedTrash: state.addedTrash
	};
};

const updateLikes = (type, transfer) => ({
	type: type,
	addedItems: transfer
});

export default connect(mapStateToProps, {updateLikes})(Hello);