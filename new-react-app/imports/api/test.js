import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const TestCollections = new Mongo.Collection('test');

if (Meteor.isServer) {
    Meteor.publish('test', () => {
        return TestCollections.find();
    });
}