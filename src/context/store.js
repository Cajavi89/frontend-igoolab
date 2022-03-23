import React, { createContext, useReducer, useContext} from 'react'

import {
  GET_ALL_USERS,
  // GET_ALL_POSTS,
  // GET_RANDOM_USER_PICTURE,
  // GET_ALL_USERS,
  SET_LOADING
} from './constants'

const appStateContext = createContext();
const appDispatchContext = createContext();

const initialState = {
  isLoading: false,
  users:[],
  currentUser:{},
  posts:[],
  userPicture:null
}

function AppReducer(state, action){
  switch(action.type){
    case SET_LOADING:{
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case GET_ALL_USERS:{
      return{
        ...state,
        users:action.payload
      }
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);

  }
}

const AppProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return(
    <appStateContext.Provider value={state}>
      <appDispatchContext.Provider value={dispatch}>
        {children}
      </appDispatchContext.Provider>
    </appStateContext.Provider>
  )
};

const useAppState= () =>{
  const context = useContext(appStateContext);
  if(context=== undefined){
    throw new Error('useAppState must be used within a AppProvider');
  };
  return context
};

const useAppDispatch=()=>{
  const context = useContext(appDispatchContext);
  if(context === undefined){
    throw new Error('useAppDispatch must be used within a AppProvider');
  };
  return context;
}

export {
  AppProvider,
  useAppState,
  useAppDispatch
}
