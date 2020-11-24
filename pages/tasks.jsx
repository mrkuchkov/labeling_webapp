import AccountSettingsLayout from '../components/layout'
import { Table } from 'antd';
import { useState } from 'react';
import { useRouter } from "next/router";


const dataSource = [
  {
    key: 'Antispoofing',
    name: 'Антиспуфинг',
    age: 0,
    address: 100,
  },
  {
    key: 'Recog',
    name: 'Распознование',
    age: 10,
    address: 50,
  },
  {
    key: 'Turn',
    name: 'Поворот лица',
    age: 0,
    address: 0,
  },
];


const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
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
    <Table
    dataSource={dataSource}
    columns={columns}
    onRow={(record) => {
        const router = useRouter();
        return {
          onClick: event => {
            router.push(record.key);
            }
          };
        }}
  />;
  </AccountSettingsLayout>
)

export default Index
