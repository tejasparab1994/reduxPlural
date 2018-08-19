import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/courses');
  }


  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type = "submit"
        value = "Add course"
        className= "btn btn-primary"
        onClick = {this.redirectToAddCoursePage} />
        <CourseList courses = {courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    // state.courses based on the choice we made in rootReducer
    // if we would have called courses something else like
    // courseReducer then we would access state through, state.courseReducer instead
    courses: state.courses
  };
}

// dispatch injected by the conenct function itself
// what actions available in the component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
