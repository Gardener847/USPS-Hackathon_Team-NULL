import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Routings from '../routes/routings';
// import App from '/imports/ui/App';

const initialState = {
  // items going to be added to the "items you may like"
  addedItems: [],
  addedTrash: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type == 'UPDATE_SUGGESTIONS') {
    return {
      ...state,
      addedItems: action.addedItems
    }
  }
  if (action.type == 'UPDATE_TRASH') {
    console.log("trash update", action.addedItems);
    return {
      ...state,
      addedTrash: action.addedItems
    }
  }
  return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

Meteor.startup(() => {
  render(<Provider store={store}><Routings /></Provider>, document.getElementById('react-target'));
});