import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, // whether the user has logged in or not.
    userData: null // the user data when they have logged in.
}

// reducers are the object containing reducer functions that handle state changes.

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // A reducer function that sets status to true and updates userData with the data provided in the action's payload.
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        // A reducer function that sets status to false and resets userData to null.
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

// authSlice.actions contains the action creators generated by createSlice for each reducer function. Here, login and logout are exported for use in dispatching actions.
export const {login, logout} = authSlice.actions;

// authSlice.reducer is the reducer function generated by createSlice, which is exported as the default export. This reducer will be used to handle state changes in the Redux store.
export default authSlice.reducer;

// Why Use Redux for Login and Logout?State Management:
//  Redux provides a centralized store for managing the state of your application. By using Redux for authentication, you can easily manage and access the authentication state (status and userData) across different components of your application.

//Predictable State Updates:
// Redux ensures that state updates are predictable and follow a strict pattern. The login and logout actions clearly define how the state should change in response to user authentication events.

//Ease of Debugging:With Redux DevTools , you can easily track the state changes and actions dispatched in your application. This makes it easier to debug issues related to authentication.

//Scalability:As your application grows, managing authentication state with Redux makes it easier to handle complex state interactions and side effects (e.g., fetching user data from an API) in a scalable way.

//In summary, using Redux for managing login and logout actions helps to maintain a predictable, centralized, and scalable state management solution for authentication in your application.
