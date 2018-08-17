import React, {ProtoTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course =  this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  onClickSave(event) {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2> Add Course </h2>
        <input type = "text" onChange = {this.onTitleChange}
        value = {this.state.course.title} />

        <input type = "submit" value= "Save"
        onClick = {this.onClickSave} />

      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    // state.courses based on the choice we made in rootReducer
    // if we would have called courses something else like
    // courseReducer then we would access state through, state.courseReducer instead
    courses: state.courses
  };
}


retexport default connect(mapStateToProps)(CoursePage);
