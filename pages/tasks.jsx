import AccountSettingsLayout from '../components/layout'
import { Table } from 'antd';
import { useState } from 'react';
import { useRouter } from "next/router";


const dataSource = [
  {
    key: 'Antispoofing',
    name: 'Antispoofing',
    age: 0,
    address: 100,
  },
  {
    key: 'Recog',
    name: 'Recog',
    age: 10,
    address: 50,
  },
  {
    key: 'Turn',
    name: 'Turn',
    age: 0,
    address: 0,
  },
];



const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href={text}>{text}</a>,
  },
  {
    title: 'Выполнено',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Всего',
    dataIndex: 'address',
    key: 'address',
  },
];


const Index = () => (
  <AccountSettingsLayout props ={"/tasks"}>
    <Table dataSource={dataSource} columns={columns} />;
  </AccountSettingsLayout>
)

export default Index
