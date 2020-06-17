import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { nextPage, prevPage, getChildQuestions, startTestTimer, timeOut } from '../../../../../actions/userDashboardActions/placementActions'
import { rubric as grade } from './rubric'

const ChildPlacementTest = props => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const testTime = 1000 * 60 * 45 // 45 Minutes

  const { timerActive, questions, currentQuestion, page, userAwnsers } = useSelector( state => ({
    timerActive: state.placementTestingReducer.timerActive,
    questions: state.placementTestingReducer.questions,
    currentQuestion: state.placementTestingReducer.currentQuestion,
    page: state.placementTestingReducer.page,
    userAwnsers: state.placementTestingReducer.userAwnsers
  }), shallowEqual)

  const testTimer = () => {
    if(!timerActive) {
      setTimeout(() => {
        dispatch(timeOut())
        push('/dashboard')
      }, testTime);
    } else {
      dispatch(startTestTimer)
    }
    
  }

  useEffect(() => {
    testTimer()
  }, [])

  useEffect(() => {
    dispatch(getChildQuestions())
  }, [])

  const phaseOneGradeHelper = () => {
    let score = 0;
    userAwnsers.map((awnser, index) => {
      console.log("score map", awnser, index)
      if(awnser == grade[index]) {
        return score = score + 1;
      }
    })
    return score
  }

  const testHelper = () => {
    if(page === 0) {
      return <StartTest />
    }  else if (page >= 1) {
      return <ChildQuestions currentQuestion={currentQuestion} />
    } else if (page >= 25) {
      
    }
  }

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button onClick={() => console.log("STATE LOGS ", page, currentQuestion, userAwnsers)}>LOG</Button>
      <Button onClick={() => console.log("score", phaseOneGradeHelper())}>Score</Button>
    </div>
  );
};

export default ChildPlacementTest;