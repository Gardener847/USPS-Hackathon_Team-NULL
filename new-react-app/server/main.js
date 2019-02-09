import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import Collections from '../imports/api/server/collections';import {UserInfoCollections} from '../imports/api/userFile';

Meteor.startup(() => {

  Collections();
  
  Meteor.methods({
    'insertPreference'(pref) {
      UserInfoCollections.update(
        {"name": {
          "first": "Seung Won",
          "last": "Lee"
          }
        },
        {$push: {"preferences": pref}}
      )
    }
  })
});
