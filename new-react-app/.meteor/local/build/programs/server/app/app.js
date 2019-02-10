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
    } //test case
    // if (TestCollections.find().fetch().length == 0) {
    // 	TestCollections.insert(JSON.parse(Assets.getText("mail1.json")));
    // }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc2VydmVyL2NvbGxlY3Rpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jYXRlZ29yeS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdGVzdC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdXNlckZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIk1ldGVvciIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiQ2F0ZWdvcnlDb2xsZWN0aW9ucyIsIlVzZXJJbmZvQ29sbGVjdGlvbnMiLCJUZXN0Q29sbGVjdGlvbnMiLCJleHBvcnREZWZhdWx0IiwiQ29sbGVjdGlvbnMiLCJpc1NlcnZlciIsImZpbmQiLCJmZXRjaCIsImxlbmd0aCIsImluc2VydCIsIkpTT04iLCJwYXJzZSIsIkFzc2V0cyIsImdldFRleHQiLCJleHBvcnQiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJwdWJsaXNoIiwiZGVmYXVsdCIsInN0YXJ0dXAiLCJtZXRob2RzIiwicHJlZiIsInVwZGF0ZSIsIiRwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsbUJBQUo7QUFBd0JILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0UscUJBQW1CLENBQUNELENBQUQsRUFBRztBQUFDQyx1QkFBbUIsR0FBQ0QsQ0FBcEI7QUFBc0I7O0FBQTlDLENBQTFCLEVBQTBFLENBQTFFO0FBQTZFLElBQUlFLG1CQUFKO0FBQXdCSixNQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTBCO0FBQUNHLHFC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WjtBQUFjOztBQUExQixDQUFoRCxFQUE0RSxDQUE1RTtBQUErRSxJQUFJRSxtQkFBSjtBQUF3QkosTUFBTSxDQUFDQyxJQUFQLENBQVkseUJBQVosRUFBc0M7QUFBQ0cscUJBQW1CLENBQUNGLENBQUQsRUFBRztBQUFDRSx1QkFBbUIsR0FBQ0YsQ0FBcEI7QUFBc0I7O0FBQTlDLENBQXRDLEVBQXNGLENBQXRGO0FBS25QSCxNQUFNLENBQUN1QixPQUFQLENBQWUsTUFBTTtBQUVuQmYsYUFBVztBQUVYUixRQUFNLENBQUN3QixPQUFQLENBQWU7QUFDYix1QkFBbUJDLElBQW5CLEVBQXlCO0FBQ3ZCcEIseUJBQW1CLENBQUNxQixNQUFwQixDQUNFO0FBQUMsZ0JBQVE7QUFDUCxtQkFBUyxXQURGO0FBRVAsa0JBQVE7QUFGRDtBQUFULE9BREYsRUFNRTtBQUFDQyxhQUFLLEVBQUU7QUFBQyx5QkFBZUY7QUFBaEI7QUFBUixPQU5GO0FBUUQ7O0FBVlksR0FBZjtBQVlELENBaEJELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWV0ZW9yfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuXHJcbmltcG9ydCB7Q2F0ZWdvcnlDb2xsZWN0aW9uc30gZnJvbSAnLi4vY2F0ZWdvcnknO1xyXG5pbXBvcnQge1VzZXJJbmZvQ29sbGVjdGlvbnN9IGZyb20gJy4uL3VzZXJGaWxlJztcclxuaW1wb3J0IHtUZXN0Q29sbGVjdGlvbnN9IGZyb20gJy4uL3Rlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgaWYgKENhdGVnb3J5Q29sbGVjdGlvbnMuZmluZCgpLmZldGNoKCkubGVuZ3RoID09IDApIHtcclxuXHRcdFx0Q2F0ZWdvcnlDb2xsZWN0aW9ucy5pbnNlcnQoSlNPTi5wYXJzZShBc3NldHMuZ2V0VGV4dChcImNhdGVnb3J5Lmpzb25cIikpKTtcclxuICAgIH1cclxuICAgIGlmIChVc2VySW5mb0NvbGxlY3Rpb25zLmZpbmQoKS5mZXRjaCgpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFVzZXJJbmZvQ29sbGVjdGlvbnMuaW5zZXJ0KEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ1c2VyLmpzb25cIikpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rlc3QgY2FzZVxyXG4gICAgLy8gaWYgKFRlc3RDb2xsZWN0aW9ucy5maW5kKCkuZmV0Y2goKS5sZW5ndGggPT0gMCkge1xyXG5cdFx0Ly8gXHRUZXN0Q29sbGVjdGlvbnMuaW5zZXJ0KEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJtYWlsMS5qc29uXCIpKSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb25nb30gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IHtNZXRlb3J9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5Q29sbGVjdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY2F0ZWdvcnknKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIE1ldGVvci5wdWJsaXNoKCdjYXRlZ29yeScsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gQ2F0ZWdvcnlDb2xsZWN0aW9ucy5maW5kKCk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7TW9uZ299IGZyb20gJ21ldGVvci9tb25nbyc7XHJcbmltcG9ydCB7TWV0ZW9yfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBUZXN0Q29sbGVjdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndGVzdCcpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3Rlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFRlc3RDb2xsZWN0aW9ucy5maW5kKCk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7TW9uZ299IGZyb20gJ21ldGVvci9tb25nbyc7XHJcbmltcG9ydCB7TWV0ZW9yfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb0NvbGxlY3Rpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3VzZXJJbmZvJyk7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICBNZXRlb3IucHVibGlzaCgndXNlckluZm8nLCAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFVzZXJJbmZvQ29sbGVjdGlvbnMuZmluZCgpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7TW9uZ299IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuLi9pbXBvcnRzL2FwaS9zZXJ2ZXIvY29sbGVjdGlvbnMnO2ltcG9ydCB7VXNlckluZm9Db2xsZWN0aW9uc30gZnJvbSAnLi4vaW1wb3J0cy9hcGkvdXNlckZpbGUnO1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cbiAgQ29sbGVjdGlvbnMoKTtcbiAgXG4gIE1ldGVvci5tZXRob2RzKHtcbiAgICAnaW5zZXJ0UHJlZmVyZW5jZScocHJlZikge1xuICAgICAgVXNlckluZm9Db2xsZWN0aW9ucy51cGRhdGUoXG4gICAgICAgIHtcIm5hbWVcIjoge1xuICAgICAgICAgIFwiZmlyc3RcIjogXCJTZXVuZyBXb25cIixcbiAgICAgICAgICBcImxhc3RcIjogXCJMZWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyRwdXNoOiB7XCJwcmVmZXJlbmNlc1wiOiBwcmVmfX1cbiAgICAgIClcbiAgICB9XG4gIH0pXG59KTtcbiJdfQ==
