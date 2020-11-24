import MenuLayout from '../components/layout'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Troubles',
    key: 'Troubles',
    dataIndex: 'Troubles',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'broken') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Submit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '2020-11-20 | antispoofing crop',
    ID: 4,
    Troubles: ['broken'],
  },
  {
    key: '2',
    name: '2020-11-19 | antispoofing print',
    ID: 3,
    Troubles: ['works properly'],
  },
  {
    key: '3',
    name: '2020-11-12 | resnet18 clf (wo onet)| 2k base',
    ID: 2,
    Troubles: ['works properly'],
  },
  {
    key: '4',
    name: 'Local test',
    ID: 1,
    Troubles: ['works properly'],
  },
];

const Index = () => (
  <MenuLayout props ={"/devices"}>
  <Table columns={columns} dataSource={data} style={{ marginTop: '-56px' }}/>
  </MenuLayout>
)

export default Index
