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
let TestCollections;
module.link("../test", {
  TestCollections(v) {
    TestCollections = v;
  }

}, 3);
module.exportDefault(Collections = () => {
  if (Meteor.isServer) {
    if (CategoryCollections.find().fetch().length == 0) {
      CategoryCollections.insert(JSON.parse(Assets.getText("category.json")));
    }

    if (UserInfoCollections.find().fetch().length == 0) {
      UserInfoCollections.insert(JSON.parse(Assets.getText("user.json")));
    } // test case


    if (TestCollections.find().fetch().length == 0) {
      TestCollections.insert(JSON.parse(Assets.getText("mail1.json")));
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

},"test.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// imports/api/test.js                                                         //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
module.export({
  TestCollections: () => TestCollections
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
const TestCollections = new Mongo.Collection('test');

if (Meteor.isServer) {
  Meteor.publish('test', () => {
    return TestCollections.find();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc2VydmVyL2NvbGxlY3Rpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jYXRlZ29yeS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdGVzdC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdXNlckZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIk1ldGVvciIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiQ2F0ZWdvcnlDb2xsZWN0aW9ucyIsIlVzZXJJbmZvQ29sbGVjdGlvbnMiLCJUZXN0Q29sbGVjdGlvbnMiLCJleHBvcnREZWZhdWx0IiwiQ29sbGVjdGlvbnMiLCJpc1NlcnZlciIsImZpbmQiLCJmZXRjaCIsImxlbmd0aCIsImluc2VydCIsIkpTT04iLCJwYXJzZSIsIkFzc2V0cyIsImdldFRleHQiLCJleHBvcnQiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJwdWJsaXNoIiwiZGVmYXVsdCIsInN0YXJ0dXAiLCJtZXRob2RzIiwicHJlZiIsInVwZGF0ZSIsIiRwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsbUJBQUo7QUFBd0JILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0UscUJBQW1CLENBQUNELENBQUQsRUFBRztBQUFDQyx1QkFBbUIsR0FBQ0QsQ0FBcEI7QUFBc0I7O0FBQTlDLENBQTFCLEVBQTBFLENBQTFFO0FBQTZFLElBQUlFLG1CQUFKO0FBQXdCSixNQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTBCO0FBQUNHLHFC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LFNBQUssR0FBQ2hCLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUssV0FBSjtBQUFnQlAsTUFBTSxDQUFDQyxJQUFQLENBQVksbUNBQVosRUFBZ0Q7QUFBQ29CLFNBQU8sQ0FBQ25CLENBQUQsRUFBRztBQUFDSyxlQUFXLEdBQUNMLENBQVo7QUFBYzs7QUFBMUIsQ0FBaEQsRUFBNEUsQ0FBNUU7QUFBK0UsSUFBSUUsbUJBQUo7QUFBd0JKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEVBQXNDO0FBQUNHLHFCQUFtQixDQUFDRixDQUFELEVBQUc7QUFBQ0UsdUJBQW1CLEdBQUNGLENBQXBCO0FBQXNCOztBQUE5QyxDQUF0QyxFQUFzRixDQUF0RjtBQUtuUEgsTUFBTSxDQUFDdUIsT0FBUCxDQUFlLE1BQU07QUFFbkJmLGFBQVc7QUFFWFIsUUFBTSxDQUFDd0IsT0FBUCxDQUFlO0FBQ2IsdUJBQW1CQyxJQUFuQixFQUF5QjtBQUN2QnBCLHlCQUFtQixDQUFDcUIsTUFBcEIsQ0FDRTtBQUFDLGdCQUFRO0FBQ1AsbUJBQVMsV0FERjtBQUVQLGtCQUFRO0FBRkQ7QUFBVCxPQURGLEVBTUU7QUFBQ0MsYUFBSyxFQUFFO0FBQUMseUJBQWVGO0FBQWhCO0FBQVIsT0FORjtBQVFEOztBQVZZLEdBQWY7QUFZRCxDQWhCRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01ldGVvcn0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcblxyXG5pbXBvcnQge0NhdGVnb3J5Q29sbGVjdGlvbnN9IGZyb20gJy4uL2NhdGVnb3J5JztcclxuaW1wb3J0IHtVc2VySW5mb0NvbGxlY3Rpb25zfSBmcm9tICcuLi91c2VyRmlsZSc7XHJcbmltcG9ydCB7VGVzdENvbGxlY3Rpb25zfSBmcm9tICcuLi90ZXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25zID0gKCkgPT4ge1xyXG4gIGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIGlmIChDYXRlZ29yeUNvbGxlY3Rpb25zLmZpbmQoKS5mZXRjaCgpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdENhdGVnb3J5Q29sbGVjdGlvbnMuaW5zZXJ0KEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJjYXRlZ29yeS5qc29uXCIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXNlckluZm9Db2xsZWN0aW9ucy5maW5kKCkuZmV0Y2goKS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRVc2VySW5mb0NvbGxlY3Rpb25zLmluc2VydChKU09OLnBhcnNlKEFzc2V0cy5nZXRUZXh0KFwidXNlci5qc29uXCIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGVzdCBjYXNlXHJcbiAgICBpZiAoVGVzdENvbGxlY3Rpb25zLmZpbmQoKS5mZXRjaCgpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFRlc3RDb2xsZWN0aW9ucy5pbnNlcnQoSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcIm1haWwxLmpzb25cIikpKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge01vbmdvfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xyXG5pbXBvcnQge01ldGVvcn0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xsZWN0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdjYXRlZ29yeScpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2NhdGVnb3J5JywgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBDYXRlZ29yeUNvbGxlY3Rpb25zLmZpbmQoKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IHtNZXRlb3J9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlc3RDb2xsZWN0aW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd0ZXN0Jyk7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICBNZXRlb3IucHVibGlzaCgndGVzdCcsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gVGVzdENvbGxlY3Rpb25zLmZpbmQoKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IHtNZXRlb3J9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvQ29sbGVjdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlckluZm8nKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIE1ldGVvci5wdWJsaXNoKCd1c2VySW5mbycsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gVXNlckluZm9Db2xsZWN0aW9ucy5maW5kKCk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4uL2ltcG9ydHMvYXBpL3NlcnZlci9jb2xsZWN0aW9ucyc7aW1wb3J0IHtVc2VySW5mb0NvbGxlY3Rpb25zfSBmcm9tICcuLi9pbXBvcnRzL2FwaS91c2VyRmlsZSc7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblxuICBDb2xsZWN0aW9ucygpO1xuICBcbiAgTWV0ZW9yLm1ldGhvZHMoe1xuICAgICdpbnNlcnRQcmVmZXJlbmNlJyhwcmVmKSB7XG4gICAgICBVc2VySW5mb0NvbGxlY3Rpb25zLnVwZGF0ZShcbiAgICAgICAge1wibmFtZVwiOiB7XG4gICAgICAgICAgXCJmaXJzdFwiOiBcIlNldW5nIFdvblwiLFxuICAgICAgICAgIFwibGFzdFwiOiBcIkxlZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7JHB1c2g6IHtcInByZWZlcmVuY2VzXCI6IHByZWZ9fVxuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pO1xuIl19
