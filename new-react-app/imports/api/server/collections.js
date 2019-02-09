import {Meteor} from 'meteor/meteor';

import {CategoryCollections} from '../category';
import {UserInfoCollections} from '../userFile';

export default Collections = () => {
  if (Meteor.isServer) {
    if (CategoryCollections.find().fetch().length == 0) {
			CategoryCollections.insert(JSON.parse(Assets.getText("category.json")));
    }
    if (UserInfoCollections.find().fetch().length == 0) {
			UserInfoCollections.insert(JSON.parse(Assets.getText("user.json")));
    }
  }
}