import React from 'react';
import { Link } from 'react-router-dom';
import { EditButton } from '../../../adminDashboard/components/mainStyle/styledComponent';
import { getDateStringENGBFormat, timeConverter } from '../../../../utils/helpers';

function StudentDetails(props) {

    return (
        <>  
            <h1 className='studentTitle'>
                {props.student.first_name}
                &nbsp;  
                {props.student.additional_names}
                <h4>Government ID: {props.student.cpr}</h4>
            </h1> 
            <div className="studentBox">
                <div className="studentInfoBox">
                    <h2>Details</h2>
                    {/* <hr></hr> */}
                    <div className="studentSubBox">
                        <div>
                            <h3>Student General Info:</h3>
                            <p>
                                <strong>Birthdate:</strong>
                                <br></br>
                                {getDateStringENGBFormat(props.student.birthdate)}
                            </p>
                            <p>
                                <strong>Gender:</strong> 
                                <br></br>
                                {props.student.gender}
                            </p>
                            <p>
                                <strong>School Name:</strong> 
                                <br></br>
                                {props.student.school_name}
                            </p>
                        </div>
                        <div>
                            <h3>Student Contact Info:</h3>
                            <p>
                                <strong>Email:</strong> 
                                <br></br>
                                {props.student.email}
                            </p>
                            <p>
                                <strong>Phone Number:</strong> 
                                <br></br>
                                {props.student.phone_number}
                            </p>
                            <p>
                                <strong>Address:</strong> 
                                <br></br>
                                {props.student.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="studentInfoBox">
                    <h2>Contacts</h2>
                    <hr></hr>
                    <div className="studentSubBox">
                        <div>
                            <h3>Primary Contact:</h3>
                            <p>
                                <strong>Name:</strong> 
                                <br></br>
                                {props.student.primary_emergency_contact_name}
                            </p>
                            <p>
                                <strong>Relationship:</strong> 
                                <br></br>
                                {props.student.primary_emergency_relationship}
                            </p>
                            <p>
                                <strong>Phone Number:</strong> 
                                <br></br>
                                {props.student.primary_emergency_phone}
                            </p>
                        </div>
                        <div>
                            <h3>Secondary Contact:</h3>
                            <p>
                                <strong>Name:</strong> 
                                <br></br>
                                {props.student.emergency_contact_name ? props.student.emergency_contact_name : "N/A"}
                            </p>
                            <p>
                                <strong>Relationship:</strong> 
                                <br></br>
                                {props.student.emergency_relationship ? props.student.emergency_relationship : "N/A"}
                            </p>
                            <p>
                                <strong>Phone Number:</strong> 
                                <br></br>
                                {props.student.emergency_phone ? props.student.emergency_phone : "N/A"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="studentBox">
                <div className="studentInfoBox">
                    <h2>Notes</h2>
                    <hr></hr>
                    <div className="studentSubBox">
                        {props.student.notes === "" ? 
                            <div className="noInfo">
                                <p>No available notes for this student.</p>
                            </div>
                            :
                            <div>
                                <p><strong>Notes: </strong>{props.student.notes}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="studentEditButton"> 
                <Link 
                    to={`/student/${props.student.student_id}/edit`}>
                    <EditButton>Edit Student Details</EditButton>    
                </Link>
            </div>
            <div className="studentBox" > 
                <div className="studentInfoBox">
                    <h2>Course(s)</h2>
                    <hr></hr>
                    {props.course.length > 0 && 
                    props.course.map((course) => (
                        <>
                            <div className="">
                                <div className="studentCourseBox">
                                    <div className="courseBoxes">
                                        <p><strong>Term: </strong>
                                        <br></br>
                                        {course.term}</p>
                                        <p><strong>First Day: </strong>
                                        <br></br>
                                        {getDateStringENGBFormat(course.first_day)}</p>
                                        <p><strong>Last Day: </strong>
                                        <br></br>
                                        {getDateStringENGBFormat(course.last_day)}</p>
                                    </div>
                                    <div className="courseBoxes">
                                        <p><strong>Course Days: </strong>
                                        <br></br>
                                        {course.course_days}</p>
                                        <p><strong>Start Time: </strong>
                                        <br></br>
                                        {timeConverter(course.start_time)}</p>
                                        <p><strong>End Time: </strong>
                                        <br></br>
                                        {timeConverter(course.end_time)}</p>
                                    </div>
                                    <div className="courseBoxes">
                                        <p><strong>Course Type: </strong>
                                        <br></br>
                                        {course.course_type}</p>
                                        <p><strong>Course Status: </strong>
                                        <br></br>
                                        {course.course_status}</p>
                                        <p><strong>Student Status: </strong>
                                        <br></br>
                                        {course.student_result_type}</p>
                                    </div>
                                    <div className="courseBoxes">
                                        <p><strong>Group Type: </strong>
                                        <br></br>
                                        {course.group_type}</p>
                                        <p><strong>Level: </strong>
                                        <br></br>
                                        {course.course_level}</p>
                                        <p><strong>Section: </strong>
                                        <br></br>
                                        {course.section}</p>
                                    </div>
                                    {course.notes === "" ? 
                                        <div className="noInfo">
                                            <p><strong>Notes: </strong>
                                            <br></br>
                                            No available notes for this course.</p>
                                        </div>
                                    :
                                        <div>
                                            <p><strong>Notes: </strong>
                                            <br></br>
                                            {course.notes}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <hr></hr>
                        </>
                    ))}       
                    {props.course.length === 0 && 
                        <div className="studentSubBox">
                            <div className="noInfo">
                                <p>This student is not currently enrolled in any courses.</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};

export default StudentDetails;

// const mapStateToProps = state => {
//     return {
//         studentById: state.studentByIdReducer.studentById,
//         error: state.studentByIdReducer.error
//     };
// };

// export default connect(mapStateToProps, {})(StudentDetails);                