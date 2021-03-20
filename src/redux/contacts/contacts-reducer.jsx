import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionsContacts from './contacts-actions';

const items = createReducer([], {
  [actionsContacts.fetchContactsSuccess]: (_, { payload }) => payload,
  [actionsContacts.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [actionsContacts.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actionsContacts.changeFilter]: (_, { payload }) => payload,
  [actionsContacts.resetFilter]: () => '',
});

const loading = createReducer(false, {
  [actionsContacts.fetchContactsRequest]: () => true,
  [actionsContacts.fetchContactsSuccess]: () => false,
  [actionsContacts.fetchContactsError]: () => false,
  [actionsContacts.addContactRequest]: () => true,
  [actionsContacts.addContactSuccess]: () => false,
  [actionsContacts.addContactError]: () => false,
  [actionsContacts.deleteContactRequest]: () => true,
  [actionsContacts.deleteContactSuccess]: () => false,
  [actionsContacts.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [actionsContacts.fetchContactsError]: (_, { payload }) => payload,
  [actionsContacts.addContactError]: (_, { payload }) => payload,
  [actionsContacts.deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});