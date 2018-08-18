import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  courseRow(course, index) {
    return <div key={index}> {course.title} </div>;
  }

  render() {

    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2> Add Course </h2>


      </div>
    );
  }
}

CoursePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
