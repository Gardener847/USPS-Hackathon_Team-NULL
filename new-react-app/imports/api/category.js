import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const CategoryCollections = new Mongo.Collection('category');

if (Meteor.isServer) {
    Meteor.publish('category', () => {
        return CategoryCollections.find();
    });
}