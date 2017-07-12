import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const initialState = {
  text: 'Random',
  images: [],
  length: 0,
  display: false
}

export const reducer = (state = initialState, action ) => {
  if(action.type === "SEARCH") {
    return Object.assign({}, state, { text: action.text, images: action.images, length: action.length, display: action.display })
  } else if(action.type === "SEARCH_WORD") {
    return Object.assign({}, state, { text: action.text, display: action.display })
  }
  return state;
}


// ACTIONS
export const inputChange = text => dispatch => {
  return dispatch ({ type: 'SEARCH_WORD', text, display: false })
}

export const searchImages = text => dispatch => {
  return axios.get(`http://localhost:8000/search/${text}`)
  .then(response => {
    const display = response.data.images.length > 0 ? true : false
    dispatch ({ type: 'SEARCH', text, display, images: response.data.images, length: response.data.images.length})
  })
}

export const downloadImages = (text) => dispatch => {
  return axios.get(`http://localhost:8000/download/?name=${text}`)
  .then(response => {
    dispatch ({ type: 'SEARCH', text: 'Downloading' })
  })
}


export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}