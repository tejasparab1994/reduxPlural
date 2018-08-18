import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// a thunk always returns a function that ACCEPTS a dispatch as its parameter
export function loadAuthors() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error => {
      throw(error);
    });
  };
}
