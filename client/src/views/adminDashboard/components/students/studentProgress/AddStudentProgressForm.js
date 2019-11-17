import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { postStudentProgress, togglePostComponent } from '../../../../../actions';
import { Table, Spin } from 'antd';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button } from '../../mainStyle/styledComponent';




const StudentProgressForm = props => {

    const [state, setState] = useState({
        speaking_fluency: '',
        speaking_accuracy: '',
        vocabulary: '',
        pronunciation: '',
        grammar: '',
        listening: '',
        writing: '',
        reading: '',
        interest: '',
        participation: '',
        submitting_homework: '',
        homework_effort: '',
        notes: '',
        course_id: '',
        student_id: '',
        teacher_id: '',
        report_date: '',
        id: props.id,
    })




    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const formSubmit = e => {
        e.preventDefault()
        props.postStudentProgress(state)
    }

    // const overallAverage = arr => {
    //     arr = [state.speaking_fluency, state.speaking_accuracy, state.vocabulary, state.pronunciation, state.grammar, state.listening, state.writing, state.reading, state.interest, state.participation]
    //    arr.reduce(( a, b) => a + b, 0) / arr.length

    // }

    return (
        <FormWrap onSubmit={formSubmit} style={{ margin: '3%' }}>
            <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0' }}>
                <div style={{
                    display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gridGap: '15px', margin: '10px'
                }}>

                    <div>
                        <label>Speaking Fluency</label>
                        <div>
                            <Input
                                type='number'
                                name='speaking_fluency'
                                placeholder="Speaking Fluency"
                                onChange={handleChange}
                                value={state.speaking_fluency}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Speaking Accuracy</label>
                        <div>
                            <Input
                                type='number'
                                name='speaking_accuracy'
                                placeholder="Speaking Accuracy"
                                onChange={handleChange}
                                value={state.speaking_accuracy}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Vocabulary</label>
                        <div>
                            <Input
                                type='number'
                                name='vocabulary'
                                placeholder="Vocabulary"
                                onChange={handleChange}
                                value={state.vocabulary}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Pronunciation</label>
                        <div>
                            <Input
                                type='number'
                                name='pronunciation'
                                placeholder="Pronunciation"
                                onChange={handleChange}
                                value={state.pronunciation}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} >
                            <Icon name="save" onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer" }} /> 
                            Add Report
                        </div>
                    </div>


                    {/* row 2  */}
                    <div>
                        <label>Grammar</label>
                        <div>
                            <Input
                                type='number'
                                name='grammar'
                                placeholder="Grammar"
                                onChange={handleChange}
                                value={state.grammar}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Listening</label>
                        <div>
                            <Input
                                type='number'
                                name='listening'
                                placeholder="Listening"
                                onChange={handleChange}
                                value={state.listening}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Writing</label>
                        <div>
                            <Input
                                type='number'
                                name='writing'
                                placeholder="Writing"
                                onChange={handleChange}
                                value={state.writing}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Reading</label>
                        <div>
                            <Input
                                type='number'
                                name='reading'
                                placeholder="Reading"
                                onChange={handleChange}
                                value={state.reading}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Interest</label>
                        <div>
                            <Input
                                type='number'
                                name='interest'
                                placeholder="Interest"
                                onChange={handleChange}
                                value={state.interest}
                            />
                        </div>
                    </div>

                    {/* row 3 */}
                    <div>
                        <label>Participation</label>
                        <div>
                            <Input
                                type='number'
                                name='participation'
                                placeholder="Participation"
                                onChange={handleChange}
                                value={state.participation}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Submitting Homework</label>
                        <div>
                            <Input
                                type='number'
                                name='submitting_homework'
                                placeholder="Submitting Homework"
                                onChange={handleChange}
                                value={state.submitting_homework}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Homework Effort</label>
                        <div>
                            <Input
                                type='number'
                                name='homework_effort'
                                placeholder="Homework Effort"
                                onChange={handleChange}
                                value={state.homework_effort}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Notes</label>
                        <div>
                            <Input
                                type='text'
                                name='notes'
                                placeholder="Notes"
                                onChange={handleChange}
                                value={state.notes}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Overall</label>
                        <div>
                            <Input
                                type='number'
                                name='overall'
                                placeholder="Overall"
                                onChange={handleChange}
                                value={state.overall}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Course Id</label>
                        <div>
                            <Input
                                type='number'
                                name='course_id'
                                placeholder="Course Id"
                                onChange={handleChange}
                                value={state.course_id}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Student Id</label>
                        <div>
                            <Input
                                type='number'
                                name='student_id'
                                placeholder="Student Id"
                                onChange={handleChange}
                                value={state.student_id}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Teacher Id</label>
                        <div>
                            <Input
                                type='number'
                                name='teacher_id'
                                placeholder="Teacher Id"
                                onChange={handleChange}
                                value={state.teacher_id}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Report Date</label>
                        <div>
                            <Input
                                type='text'
                                name='report_date'
                                placeholder="Report Date"
                                onChange={handleChange}
                                value={state.report_date}
                            />
                        </div>
                    </div>



                </div>
            </fieldset>
        </FormWrap>

    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        isPosted: state.studentProgressReducer.isPosted,
        isPosting: state.studentProgressReducer.isPosting,
        error: state.studentProgressReducer.error
    };
};


export default
    connect(
        mapStateToProps,
        { postStudentProgress, togglePostComponent }
    )(StudentProgressForm)




