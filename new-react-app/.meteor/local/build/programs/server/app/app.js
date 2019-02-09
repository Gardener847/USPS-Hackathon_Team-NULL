var require = meteorInstall({"imports":{"api":{"server":{"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// imports/api/server/collections.js                                           //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let CategoryCollections;
module.link("../category", {
  CategoryCollections(v) {
    CategoryCollections = v;
  }

}, 1);
let UserInfoCollections;
module.link("../userFile", {
  UserInfoCollections(v) {
    UserInfoCollections = v;
  }

}, 2);
module.exportDefault(Collections = () => {
  if (Meteor.isServer) {
    if (CategoryCollections.find().fetch().length == 0) {
      CategoryCollections.insert(JSON.parse(Assets.getText("category.json")));
    }

    if (UserInfoCollections.find().fetch().length == 0) {
      UserInfoCollections.insert(JSON.parse(Assets.getText("user.json")));
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////

}},"category.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// imports/api/category.js                                                     //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
module.export({
  CategoryCollections: () => CategoryCollections
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
const CategoryCollections = new Mongo.Collection('category');

if (Meteor.isServer) {
  Meteor.publish('category', () => {
    return CategoryCollections.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////

},"userFile.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// imports/api/userFile.js                                                     //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
module.export({
  UserInfoCollections: () => UserInfoCollections
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
const UserInfoCollections = new Mongo.Collection('userInfo');

if (Meteor.isServer) {
  Meteor.publish('userInfo', () => {
    return UserInfoCollections.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// server/main.js                                                              //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let Collections;
module.link("../imports/api/server/collections", {
  default(v) {
    Collections = v;
  }

}, 2);
let UserInfoCollections;
module.link("../imports/api/userFile", {
  UserInfoCollections(v) {
    UserInfoCollections = v;
  }

}, 3);
Meteor.startup(() => {
  Collections();
  Meteor.methods({
    'insertPreference'(pref) {
      UserInfoCollections.update({
        "name": {
          "first": "Seung Won",
          "last": "Lee"
        }
      }, {
        $push: {
          "preferences": pref
        }
      });
    }

  });
});
/////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc2VydmVyL2NvbGxlY3Rpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jYXRlZ29yeS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdXNlckZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIk1ldGVvciIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiQ2F0ZWdvcnlDb2xsZWN0aW9ucyIsIlVzZXJJbmZvQ29sbGVjdGlvbnMiLCJleHBvcnREZWZhdWx0IiwiQ29sbGVjdGlvbnMiLCJpc1NlcnZlciIsImZpbmQiLCJmZXRjaCIsImxlbmd0aCIsImluc2VydCIsIkpTT04iLCJwYXJzZSIsIkFzc2V0cyIsImdldFRleHQiLCJleHBvcnQiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJwdWJsaXNoIiwiZGVmYXVsdCIsInN0YXJ0dXAiLCJtZXRob2RzIiwicHJlZiIsInVwZGF0ZSIsIiRwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsbUJBQUo7QUFBd0JILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0UscUJBQW1CLENBQUNELENBQUQsRUFBRztBQUFDQyx1QkFBbUIsR0FBQ0QsQ0FBcEI7QUFBc0I7O0FBQTlDLENBQTFCLEVBQTBFLENBQTFFO0FBQTZFLElBQUlFLG1CQUFKO0FBQXdCSixNQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTBCO0FBQUNHLHFCQUFtQixDQUFDRixDQUFELEVBQUc7QUFBQ0UsdUJBQW1CLEdBQUNGLENBQXBCO0FBQXNCOztBQUE5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LENBQTNCLEVBQStDLENBQS9DO0FBQWtELElBQUlJLFdBQUo7QUFBZ0JOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1DQUFaLEVBQWdEO0FBQUNtQixTQUFPLENBQUNsQixDQUFELEVBQUc7QUFBQ0ksZUFBVyxHQUFDSixDQUFaO0FBQWM7O0FBQTFCLENBQWhELEVBQTRFLENBQTVFO0FBQStFLElBQUlFLG1CQUFKO0FBQXdCSixNQUFNLENBQUNDLElBQVAsQ0FBWSx5QkFBWixFQUFzQztBQUFDRyxxQkFBbUIsQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLHVCQUFtQixHQUFDRixDQUFwQjtBQUFzQjs7QUFBOUMsQ0FBdEMsRUFBc0YsQ0FBdEY7QUFLblBILE1BQU0sQ0FBQ3NCLE9BQVAsQ0FBZSxNQUFNO0FBRW5CZixhQUFXO0FBRVhQLFFBQU0sQ0FBQ3VCLE9BQVAsQ0FBZTtBQUNiLHVCQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkJuQix5QkFBbUIsQ0FBQ29CLE1BQXBCLENBQ0U7QUFBQyxnQkFBUTtBQUNQLG1CQUFTLFdBREY7QUFFUCxrQkFBUTtBQUZEO0FBQVQsT0FERixFQU1FO0FBQUNDLGFBQUssRUFBRTtBQUFDLHlCQUFlRjtBQUFoQjtBQUFSLE9BTkY7QUFRRDs7QUFWWSxHQUFmO0FBWUQsQ0FoQkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXRlb3J9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5cclxuaW1wb3J0IHtDYXRlZ29yeUNvbGxlY3Rpb25zfSBmcm9tICcuLi9jYXRlZ29yeSc7XHJcbmltcG9ydCB7VXNlckluZm9Db2xsZWN0aW9uc30gZnJvbSAnLi4vdXNlckZpbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgaWYgKENhdGVnb3J5Q29sbGVjdGlvbnMuZmluZCgpLmZldGNoKCkubGVuZ3RoID09IDApIHtcclxuXHRcdFx0Q2F0ZWdvcnlDb2xsZWN0aW9ucy5pbnNlcnQoSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcImNhdGVnb3J5Lmpzb25cIikpKTtcclxuICAgIH1cclxuICAgIGlmIChVc2VySW5mb0NvbGxlY3Rpb25zLmZpbmQoKS5mZXRjaCgpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFVzZXJJbmZvQ29sbGVjdGlvbnMuaW5zZXJ0KEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ1c2VyLmpzb25cIikpKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge01vbmdvfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xyXG5pbXBvcnQge01ldGVvcn0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xsZWN0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdjYXRlZ29yeScpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2NhdGVnb3J5JywgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBDYXRlZ29yeUNvbGxlY3Rpb25zLmZpbmQoKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IHtNZXRlb3J9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvQ29sbGVjdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlckluZm8nKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIE1ldGVvci5wdWJsaXNoKCd1c2VySW5mbycsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gVXNlckluZm9Db2xsZWN0aW9ucy5maW5kKCk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4uL2ltcG9ydHMvYXBpL3NlcnZlci9jb2xsZWN0aW9ucyc7aW1wb3J0IHtVc2VySW5mb0NvbGxlY3Rpb25zfSBmcm9tICcuLi9pbXBvcnRzL2FwaS91c2VyRmlsZSc7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblxuICBDb2xsZWN0aW9ucygpO1xuICBcbiAgTWV0ZW9yLm1ldGhvZHMoe1xuICAgICdpbnNlcnRQcmVmZXJlbmNlJyhwcmVmKSB7XG4gICAgICBVc2VySW5mb0NvbGxlY3Rpb25zLnVwZGF0ZShcbiAgICAgICAge1wibmFtZVwiOiB7XG4gICAgICAgICAgXCJmaXJzdFwiOiBcIlNldW5nIFdvblwiLFxuICAgICAgICAgIFwibGFzdFwiOiBcIkxlZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7JHB1c2g6IHtcInByZWZlcmVuY2VzXCI6IHByZWZ9fVxuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pO1xuIl19
