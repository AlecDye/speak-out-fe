import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformationTab from './StudentInfomationTab';
import { Tab, Button } from 'semantic-ui-react';
import 'antd/dist/antd.css';
import './studentCard.css';
import './StudentInformationTab.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    const editStudentInfo = e => {
        console.log('hi')
        e.preventDefault();
        props.toggleEditComponent();
   }

    const panes = [
        {
            menuItem: 'STUDENT INFORMATION',
            render: () => <Tab.Pane attached={false}><StudentInformationTab /></Tab.Pane>,
        },
        {
            menuItem: 'ENROLLMENT',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
        },
        {
            menuItem: 'ATTENDANCE',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        },
        {
            menuItem: 'BILLING',
            render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
        },

      {
          menuItem: <Button className='ui button'>Can you see me?</Button>
      }
    
    ]

    const goBack = () => {
        console.log("props", props)
        if(!props.isEditing){
            props.history.goBack();
        } else {
            props.toggleEditComponent()
        }
    }

    return (
        <div>
            <div className="student-card">
                <div className="back-button" onClick={goBack} style={{cursor:"pointer"}}
>
                    <FontAwesomeIcon icon='angle-left' size='lg' color='gray'/> {''}
                    Back
                    </div>
                <div className='student-title'>
                    <h2>{props.studentById.first_name}</h2>
                    <p>CPR: {props.studentById.cpr}</p>
                    <p>Student ID: {props.studentById.id}</p>
                </div>
               
                {!props.isEditing ? <Button onClick={editStudentInfo} className='ui button'>Edit</Button> : null}
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
           
            </div>
        </div>
        
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditting,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        //destructuring mapDispatchToProps
        { getStudentById, toggleEditComponent }
    )(StudentCard)
)






// const TabExampleSecondaryPointing = () => (
 
// )

// export default TabExampleSecondaryPointing