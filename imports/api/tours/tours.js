import {
    Mongo
} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
export const Tours = new Mongo.Collection("tours");
// const Schema = new SimpleSchema({

// });
// Tour.attachSchema(Schema);