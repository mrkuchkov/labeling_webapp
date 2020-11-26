import MenuLayout from '../components/layout'
import { Row, Col, Image, Button, Typography } from 'antd';

const { Title } = Typography;

const test_template ={
  result_classes: [
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
  ],
  problem_classes: [
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
  ]
};

// построить кнопку на основе объекта test_template


const send_result = (result_id) => {
  console.log(result_id);
};

const send_problem = (problem_id) => {
  console.log(problem_id);
};



const Index = () => (
  <MenuLayout props ={"/antispoofing"}>
    <>
      <Row>
        <Col span={8} style={{padding:"30px", height:"300px"}}>
          <Image
            src="/face.jpg"
          />
        </Col>
        <Col
          span={8}
          size = 'large'
          style={{padding:"10px", height:""}}
        >
          <Title level={4} style={{textAlign:"center"}}>Нет проблем с боксами и качеством</Title>
          <Row justify="space-around" align="middle" >
            <Col span={16}>
              <Button type="primary" block = "true" style={{margin:"10px"}}>Реальное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Нереальное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Мобильное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Бумажное лицо</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{padding:"10px", height:"300px"}}>
          <Title level={4} style={{textAlign:"center"}}>Есть проблемы с боксами и качеством</Title>
          <Row justify="space-around" align="middle" >
            <Col span={10}>
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Проблема с качеством</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Повернутое лицо</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Проблема с боксом</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Проблема с качеством</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Повернутое лицо</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Другой тип проблемы</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Проблема с боксом</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Другой тип проблемы</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{padding:"30px"}}>
          <Image
            src="/face_bw.jpg"
          />
        </Col>
        <Col
          span={8}
          size = 'large'
          style={{padding:"10px"}}
        >
          <Title level={4} style={{textAlign:"center"}}>Еще кнопки</Title>
          <Row justify="space-around" align="middle" >
            <Col span={10}>
              <Button type="primary" block = "true" style={{margin:"10px"}}>Реальное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Нереальное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Мобильное лицо</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}}>Бумажное лицо</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>

  </MenuLayout>
)

export default Index
