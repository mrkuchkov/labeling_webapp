import MenuLayout from '../components/layout'
import { Row, Col, Image, Button, Typography } from 'antd';

const { Title } = Typography;

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
          <Title level={4} style={{textAlign:"center"}}>No problems with boxes and quality</Title>
          <Row justify="space-around" align="middle" >
            <Col span={16}>
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Real face</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Unreal face</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Face on screen</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Printed face</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{padding:"10px", height:"300px"}}>
          <Title level={4} style={{textAlign:"center"}}>Problems with boxes and quality</Title>
          <Row justify="space-around" align="middle" >
            <Col span={10}>
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Problem with quality</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Turned face</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Problem with box</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Problem with quality</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Turned face</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Other type of problem</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Problem with box</Button><br />
              <Button danger type="default" block = "true" style={{margin:"10px"}}>Other type of problem</Button>
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
          <Title level={4} style={{textAlign:"center"}}>Other buttons</Title>
          <Row justify="space-around" align="middle" >
            <Col span={10}>
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Real face</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Unreal face</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Face on screen</Button><br />
              <Button type="primary" block = "true" style={{margin:"10px"}} ghost >Printed face</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>

  </MenuLayout>
)

export default Index
