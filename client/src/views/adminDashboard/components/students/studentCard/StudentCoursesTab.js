import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentCourses } from '../../../../../actions';
import { Table } from 'antd';

import './studentTable.scss'

const StudentCoursesTab = props => {

  useEffect(() => {
    props.getStudentCourses(props.studentID)
  }, [])

  const columns = [
    {
      title: 'Term',
      dataIndex: 'id',
      key: 1,
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['ascend']
    },
    {
      title: 'Days',
      dataIndex: 'cpr',
      key: 2,
      sorter: (a, b) => b.cpr - a.cpr,
      sortDirections: ['descend']
    },
    {
    title: 'Type',
    dataIndex: 'first_name',
    key: 3,
    sorter: (a, b) => {
      return (b.first_name===null)-(a.first_name===null) || +(a.first_name>b.first_name)||-(a.first_name<b.first_name);
    },
    sortDirections: ['descend']
    },
    {
      title: 'Group',
      dataIndex: 'additional_names',
      key: 4,
    },
    {
      title: 'Level',
      dataIndex: 'gender',
      key: 5,
    },
    {
      title: 'Section',
      dataIndex: 'mobile_telephone',
      key: 6,
    },
    {
      title: 'Subsection',
      dataIndex: 'mobile_telephone',
      key: 7,
    },
    {
      title: 'Status',
      dataIndex: 'mobile_telephone',
      key: 8,
    },
  ];

  return (
    <>
      <Table dataSource={props.courseByStudentId} className="coursesTable" columns={columns} pagination={false} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.studentCourseReducer.isLoading,
    courseByStudentId: state.studentCourseReducer.courseByStudentId,
    error: state.studentCourseReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentCourses }
  )(StudentCoursesTab)
)