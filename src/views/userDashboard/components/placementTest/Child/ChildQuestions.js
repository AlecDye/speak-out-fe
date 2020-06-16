import React, { useState, useEffect } from 'react';
import { Form, Button, Radio } from 'antd';

const ChildQuestions = (props) => {
  const [form] = Form.useForm();
  const nextQuestion = props.nextQuestion
  const { question, images, choices, key } = props.currentQuestion[0] // currently a array in store

  return (
    <Form form={form}>
      <h3>{question}</h3>
      <div className="img-container">
        {images.map(stupidImg => (<img src={stupidImg} />))}
      </div>
      <Radio.Group>
        <Radio value={'a'}>{choices[0]}</Radio>
        <Radio value={'b'}>{choices[1]}</Radio>
        <Radio value={'c'}>{choices[2]}</Radio>
      </Radio.Group>
      {/* <Button onClick={() => dispatch}>Next</Button> */}
    </Form>
  );
};

export default ChildQuestions;