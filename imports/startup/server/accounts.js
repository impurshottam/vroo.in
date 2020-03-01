/**
 * Accounts Setup
 */

import { Accounts } from 'meteor/accounts-base';
import Counters from '../../api/counters/counters.js';

Accounts.onCreateUser((options, user) => {
  // init counter at 0
  Counters.insert({
    _id: user._id,
    count: Number(0),
  });
  user.profile={
    givenName: options.profile.givenName,
    surname: options.profile.surname,
    // gender: 'M'
  }
  return user;
});

// Accounts.validateNewUser((user) => {
//   if (!user.profile){
//     throw new Meteor.Error(403, 'Something went wrong.');
//   }else if(!user.profile.givenName || !user.profile.givenName.length){ 
//     throw new Meteor.Error(403, 'First Name may not be empty.');
//   }else if(!user.profile.surname || !user.profile.surname.length){ 
//     throw new Meteor.Error(403, 'Last Name may not be empty.');
//   }else if(!user.email || !user.email.length){ 
//     throw new Meteor.Error(403, 'Email may not be empty.');
//   }else if(!user.password || !user.password.length){ 
//     throw new Meteor.Error(403, 'Password may not be empty.');
//   }
//   return true;
// });