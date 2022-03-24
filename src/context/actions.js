import {
  GET_ALL_USERS,
  GET_RANDOM_USER_PICTURE,
  SET_LOADING,
  // GET_ALL_POSTS,
  // SET_LOADING
} from './constants'

import {
  getAllUsers,
  getUserPicture } from '../services'

export const getAllUsersHandler = async (dispatch) =>{
  dispatch({type: SET_LOADING, payload: true})
  try {
    const response = await getAllUsers();
    const data = await response.json();
    dispatch({type:GET_ALL_USERS , payload:data})
  } catch (error) {
    console.log(error)
  } finally{
    dispatch({type: SET_LOADING, payload: false})
  }
}

export const getUserPicturesHandler= async (dispatch)=>{
  try {
    const results = await getUserPicture();
    const data = await results.json();
    dispatch({type:GET_RANDOM_USER_PICTURE, payload: data})
  } catch (error) {
    console.log(error)
  }
}
