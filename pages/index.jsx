import MenuLayout from '../components/layout'
import { Table, Tag, Space, Progress } from 'antd';
import { Timeline } from 'antd';
import { Statistic, Row, Col, Button, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import Link from 'next/link'

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


const dataSource = [
  {
    key: '1',
    name: 'Ilya',
    antispoofing:'10000 / 6666',
    recognition:'10000 / 6666',
    turn:'10000 / 6666',
  },
  {
    key: '2',
    name: 'Julia',
    antispoofing:'10000 / 6666',
    recognition:'10000 / 6666',
    turn:'10000 / 6666',
  },
  {
    key: '3',
    name: 'Alexander',
    antispoofing:'10000 / 6666',
    recognition:'10000 / 6666',
    turn:'10000 / 6666',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Antispoofing (done / left)',
    dataIndex: 'antispoofing',
    key: '/antispoofing',

  },
  {
    title: 'Face recognition (done / left)',
    dataIndex: 'recognition',
    key: 'recognition',
  },
  {
    title: 'Face turn (done / left)',
    dataIndex: 'turn',
    key: 'turn',
  },
];

const Index = () => (
  <MenuLayout props ={"/"}>
<Table dataSource={dataSource} columns={columns} />

  <Progress style={{marginTop:"35px"}}
     strokeColor={{
       from: '#e3f7ff',
       to: '#0000CD',
     }}
     percent={60}
     status="active"
   />
    <Progress
      strokeColor={{
        from: '#e3f7ff',
        to: '#0000CD',
      }}
      percent={60}
      status="active"
    />
    <Progress
     strokeColor={{
       from: '#e3f7ff',
       to: '#0000CD',
     }}
     percent={60}
     status="active"
   />

   <div className="site-statistic-demo-card">
<Row gutter={16} style={{marginLeft:"1000px", marginTop:"30px"}}>
  <Col span={12}>
    <Card>
      <Statistic
        title="Frames labeling per an hour"
        value={1128}
        precision={2}
        valueStyle={{ color: '#0000CD' }}
        prefix={<ArrowUpOutlined />}
        suffix=""
      />
    </Card>
  </Col>
</Row>
</div>

<Space direction="vertical" size={12} style={{marginLeft:"80px", marginTop:"-400px" }}>

<RangePicker
showTime={{ format: 'HH:mm' }}
format="YYYY-MM-DD HH:mm"
onChange={onChange}
onOk={onOk}
/>
</Space>


       <Timeline style={{marginTop:"50px", marginLeft:"140px" }}>
       <Timeline.Item color="blue">Start working with the new dataset
         <p>2020-11-01</p></Timeline.Item>
       <Timeline.Item color="blue">
         <p>Ilya: All tasks are 33% done</p>
         <p>Julia: All tasks are 33% done</p>
         <p>Alexander:All tasks are 33% done</p>
         <p>2020-11-01</p>
       </Timeline.Item>
       <Timeline.Item color="blue">
       <p>Ilya: All tasks are 60% done</p>
       <p>Julia: All tasks are 60% done</p>
       <p>Alexander: All tasks are 60% done</p>
       <p>2020-11-02</p>
       </Timeline.Item>
       </Timeline>


  </MenuLayout>
)

export default Index
