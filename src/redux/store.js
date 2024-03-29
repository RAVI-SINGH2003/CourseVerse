import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer.js';
import { profileReducer } from './reducers/profileReducer.js';
import { courseReducer } from './reducers/courseReducer.js';
import { subscriptionReducer } from './reducers/subscriptionReducer.js';
import { adminReducer } from './reducers/adminReducer.js';
import { otherReducer } from './reducers/otherReducer.js';
import { questionReducer } from './reducers/questionReducer.js';
// export const server = 'http://localhost:5000/api/v1';
export const server = 'https://courseversebackend.onrender.com/api/v1';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
    question: questionReducer,
  },
});

export default store;
