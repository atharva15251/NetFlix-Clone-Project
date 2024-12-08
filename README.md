# Netflix clone

- Create React App
- Configured Tailwind
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form validation
- useRef hook
- Firebase setup
- Deploying app to production
- Create sign up user account
- Created Sign In user  API
- Created Redux store with userSlice


 



# Features

- Login/ Sign up 
    - Sign in / Sign up form
    - redirect to Browser page 
- Browse (After authentication)
    - Header
    - Main movie
        - Trailer in background
        - Title & Description
        - Movie suggestions
            - Movies list * N
- NetflixGPT
    - Search bar
    - movie suggestions 



# To handle forms easily in react , make use of Formik library


# TO make netflix logo overlap on the background , use absolute class in tailwind
# bg-gradient-to-b from-black : Makes shadow like colour to the element to-b means at bottom of the element , to-t means at top of the element
# Z-index : In CSS, "z-index" is a property that controls the stacking order of overlapping elements on a webpage, meaning it determines which element appears on top of another when they overlap; an element with a higher z-index value will be displayed in front of elements with lower z-index values.
# To center the element : my-24 mx-auto right-0 left-0
# To make background transparent : bg-opacity-80


# Commands to deploy app to firebase
1. firebase login
2. firebase init
3. firebase deploy


# TO create redux store use :
1. configureStore() for creating the store.
    const appStore = configureStore({
        reducer: userReducer,
    })

    export default appStore;

2. createSlice() To create Slices in the store.

    import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: null,
    reducers: {
        addUser: (state, action) =>{
            return action.payload;
        },
        removeUser: (state,action) =>{
            return null;
        },
    },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;


3. provide this store the root level of the project (app.js):

<Provider store={appStore}> <Body/> </Provider>

