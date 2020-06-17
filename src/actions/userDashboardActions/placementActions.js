
import testObject from "../../views/userDashboard/components/placementTest/Child/TestObject";
export const GET_CHILD_QUESTIONS = 'GET_CHILD_QUESTIONS'
export const START_TEST = 'START_TEST'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const TEST_TIME_OUT = 'TEST_TIME_OUT'
export const START_TEST_TIMER = 'START_TEST_TIMER'

export const getChildQuestions = () => ({
    type: GET_CHILD_QUESTIONS,
    payload: testObject
})

export const startTest = () => ({
    type: START_TEST,
})

export const nextPage = (data) => ({
    type: NEXT_PAGE,
    payload: data
})

export const prevPage = () => ({
    type: PREV_PAGE
})

export const startTestTimer = () => ({
    type: TEST_TIME_OUT,
})

export const timeOut = () => ({
    type: TEST_TIME_OUT,
})
