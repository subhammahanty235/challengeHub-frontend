import { configureStore } from '@reduxjs/toolkit';

import {authReducer} from './reducers/authReducer'
import {userReducer} from './reducers/userReducer'
import {challengeReducer} from './reducers/challengeReducer'

const store = configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer,
        challenge: challengeReducer
    },
   
    devTools:import.meta.env.VITE_REACT_APP_ENVIRIONMENT !== 'production'
})

export default store