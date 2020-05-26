import React, { useEffect, useState } from 'react';
import { withRouter, Link, useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import StudentCourseCard from './StudentCourseCard';

import { getStudentsInFamily } from '../getStudentsinFamily';
import { getMessagesForUser } from '../getMessagesForUser';

function UserDashboard(props) {
  const [userData, setUserData] = useState({
    userID: null,
    name: '',
    students: [],
    messages: [],
  });
  // const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
  const history = useHistory();
  let { path, url } = useRouteMatch();

  // Get userID from JWT
  let token = localStorage.getItem('token');
  let tokenData = JSON.parse(atob(token.split('.')[1]));

  let userID = tokenData.subject;
  let name = tokenData.name;

  // retrieve list of students associated with this account (serach by user ID)
  useEffect(() => {
    getStudentsInFamily(userID)
      .then(result => {
        setUserData({ students: result });
      })
      .catch(error => {
        console.log('Error in retrieving students:', error);
      });
  }, [props.studentTableReducer.needToUpdateStudentList]);

  // update userData once students have been updated
  useEffect(() => {
    // determine which messages to display to user upon login
    let messages = getMessagesForUser(userData.students);

    // store all info into state variable
    setUserData({ ...userData, messages });
  }, [userData.students]);

  // if userData hasn't loaded yet, return a loading message/icon
  if (
    Object.keys(userData).length === 0 ||
    !userData.students ||
    !userData.messages
  ) {
    return <h2>Loading...</h2>;
  } else if (!userID) {
    return <h2>Invalid user ID</h2>;
  }

  return (
    <div className="userDashboard content">
      <h1>Welcome, {name}.</h1>

      <MessageBox messages={userData.messages} />
      <Link to={`${url}/student-register`}>Register a Student</Link>

      {userData.students.map((student, id) => (
        <StudentCourseCard student={student} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(UserDashboard));
