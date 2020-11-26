import MenuLayout from '../components/layout'
import { useState } from 'react';
import React, { Component } from 'react';
import { Row, Col, List, Card, Descriptions, Modal, Button, Input   } from 'antd';

const Index = () => {
  /**
  const [todos, setTodos] = useState([]);
  const [nextTodos, setNextTodos] = useState('');

  const handleChange = (event) => {
    const main = event.target.value;
    setNextTodos(main);
  }

  const handleClick = (event) => {
    const main = '';
    todos.push(nextTodos);
    setTodos(todos);
    setNextTodos(main);0
  }

  <div>
    <div >
      <h2>Welcome to My TODO List</h2>
    </div>
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
    <input
      type="text"
      placeholder="New TODO"
      value = {nextTodos}
      onChange = {handleChange}
    />
    <button onClick={handleClick}>Add TODO</button>
  </div>
  **/
  const test_template ={
    resultClasses: [
        {
          id: 1,
          name: 'Реальный человек',
          descripiton: 'Это лицо настоящего человека',
          //key_code: 90,
        },
        {
          id: 2,
          name: 'Телефон',
          descripiton: 'Это лицо настоящего человека',
        },
        {
          id: 3,
          name: 'Листок',
          descripiton: 'Это лицо настоящего человека',
        },
        {
          id: 4,
          name: 'Кроп',
          descripiton: 'Это лицо настоящего человека',
        },
    ],
    problemClasses: [
        {
          id: 1,
          name: 'Лицо завечено',
          descripiton: 'Это лицо засвечено',
        },
        {
          id: 2,
          name: 'Телефон',
          descripiton: 'Это лицо настоящего человека',
        },
    ],
    addProblemClasses(id, name, descripiton) {
        test_template.problemClasses.push({
          id,
          name,
          descripiton,
      })
    }
  };

  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => {
    setVisibleModal(true);
  };
  const handleOkProblems = () => {
    test_template.addProblemClasses(idInput.value, nameInput.value, descripitonInput.value);
    setVisibleModal(false);
  };

  const handleCancel = () => {
    setVisibleModal(false);
  };

  return(
      <MenuLayout props ={"/task_manager"} >
        <Row>
          <Col xs={12} sm={12} md={8} lg={4} xl={4}>
            Col
          </Col>
          <Col xs={6} sm={6} md={8} lg={10} xl={10}>
            <Card title="Results" style={{margin: "20px"}}>
              <Descriptions column={1} bordered>
                {test_template.resultClasses.map(item => <Descriptions.Item label="Название: " >{item.name}<br/><b>Описание: </b>{item.descripiton}</Descriptions.Item>)}

              </Descriptions>

              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                visible={visibleModal}
                onCancel={handleCancel}
              >
                <p>Some contents...</p>
              </Modal>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={8} lg={10} xl={10}>
            <Card title="Problems" style={{margin: "20px"}}>
              <Descriptions column={1} bordered>
                {test_template.problemClasses.map(item => <Descriptions.Item label="Название: " >{item.name}<br/><b>Описание: </b>{item.descripiton}</Descriptions.Item>)}
              </Descriptions>

              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                visible={visibleModal}
                onOk={handleOkProblems}
                onCancel={handleCancel}
              >
                <Descriptions column={1} bordered>
                  <Descriptions.Item label="Id: " ><Input placeholder="Basic usage" id="idInput"/></Descriptions.Item>
                  <Descriptions.Item label="Name: " ><Input placeholder="Basic usage" id="nameInput"/></Descriptions.Item>
                  <Descriptions.Item label="Descripiton: " ><Input placeholder="Basic usage" id="descripitonInput"/></Descriptions.Item>
                </Descriptions>

              </Modal>
            </Card>
          </Col>
        </Row>
      </MenuLayout>
  )
}
export default Index;
