import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const UserInfoCollections = new Mongo.Collection('userInfo');

if (Meteor.isServer) {
    Meteor.publish('userInfo', () => {
        return UserInfoCollections.find();
    });
}