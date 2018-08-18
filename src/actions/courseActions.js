import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(course) {
  return { type: types.LOAD_COURSE_SUCCESS, course };
}

// a thunk always returns a function that excepts a dispatch
export function loadCourses() {
  return function dispatch() {
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(error => {
      throw(error);
    });
  };
}
