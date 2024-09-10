// Here we are now setting up the store.

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

// configureStore is a function provided by Redux Toolkit  that simplifies the process of setting up a Redux store with good default settings.
const store = configureStore({
    reducer: {
        // auth: authSlice: This line adds the authSlice reducer to the store under the key auth. This means that the state managed by authSlice will be accessible under state.auth in the Redux store.
        auth : authSlice,

        //TODO: add more slices here for posts
    }
});


export default store;

// 1. The store is a single source of truth for the state of your application. Instead of having state scattered across various components, the store centralizes it, making it easier to manage and debug.
// 2. State and Reducers:The store holds the state tree of your application. The state is updated by dispatching actions, which are processed by reducers. Reducers are pure functions that take the current state and an action as arguments and return a new state.
// 3. Dispatching Actions:Actions are payloads of information that send data from your application to your Redux store. They are the only source of information for the store. You send them to the store using store.dispatch(action).
// 4. Subscribing to Changes:Components can subscribe to the store to get notified when the state changes. This allows the components to re-render with the new state.

// Store: A centralized place to manage the state of your application.
//Reducers: Functions that specify how the state changes in response to actions.
//Actions: Payloads of information that describe changes to the state.
//Dispatch: A method to send actions to the store.    Subscribe: A method to listen for state changes.