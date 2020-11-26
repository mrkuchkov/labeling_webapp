import MenuLayout from '../components/layout'
import { Table } from 'antd';
import Link from 'next/link';

const dataSource = [
  {
    key: 1,
    href: '/antispoofing',
    name: 'Антиспуфинг',
    tasks_count: 315,
    finished_tasks_count: 25,
  },
  {
    key: 2,
    href: '/recog',
    name: 'Распознование',
    tasks_count: 35,
    finished_tasks_count: 25,
  },
  {
    key: 3,
    href: '/turn',
    name: 'Поворот лица',
    tasks_count: 225,
    finished_tasks_count: 15,
  },
];


const columns = [
  {
    title: 'Название',
    dataIndex: "name",
    key: "name",
    render: (text, record) => <Link href={record.href}>{text}</Link>
  },
  {
    title: 'Выполнено',
    dataIndex: "tasks_count",
    key: "tasks_count",
  },
  {
    title: 'Всего',
    dataIndex: "finished_tasks_count",
    key: "finished_tasks_count",
  }
];


const Index = () => (
  <MenuLayout props ={"/tasks"}>
    <Table
      dataSource={dataSource}
      columns={columns}
    />;
  </MenuLayout>
)

export default Index
