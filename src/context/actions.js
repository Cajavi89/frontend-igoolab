import {
  GET_ALL_USERS,
  // GET_ALL_POSTS,
  // GET_RANDOM_USER_PICTURE,
  // GET_ALL_USERS,
  // SET_LOADING
} from './constants'

import { getAllUsers } from '../services'

export const getAllUsersHandler = async (dispatch) =>{
  try {
    const response = await getAllUsers();
    const data = await response.json();
    dispatch({type:GET_ALL_USERS , payload:data})
  } catch (error) {
    console.log(error)
  }
}
