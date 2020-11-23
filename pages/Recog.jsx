import AccountSettingsLayout from '../components/layout'
import { Row, Col, Image, Button, Typography } from 'antd';
import { LeftOutlined, RightOutlined, RedoOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Index = () => (
  <AccountSettingsLayout props ={"/Recog"}>
  <>
        <Row justify="center" align="bottom" >
          <Col span={4} style={{ padding:"20px"}}>
            <Title level={4} style={{textAlign:"center"}}>Есть проблемы с боксами и качеством</Title>
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Лицо не в боксе</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Лицо плохо видно</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Слишком светлое</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Слишком темное</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Изображение размыто</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Плохое качество</Button><br />
            <Button danger type="default" block = "true" style={{margin:"10px"}}>Другие проблемы</Button><br />
            <Button type="default" block = "true" style={{margin:"10px"}}>Нет проблем</Button>
          </Col>
          <Col span={6} style={{ paddingBottom:"30px"}}>
            <Row justify="center" align="center" >
              <Col style = {{textAlign: "center"}}>
                <Button type="primary" block = "true" shape="round" size={"large"}>
                  Один человек
                </Button><br/><br/>
                <Button type="primary" block = "true" shape="round" size={"large"}>
                  Разные люди
                </Button><br/><br/>
                <Button type="primary" block = "true" shape="round" size={"large"}>
                  Подтвердить
                </Button><br/><br/>
                <br/>
                <br/>
                <br/>
                <Button type="primary" block = "true" shape="round" size={"large"}>
                  Скачать данные
                </Button><br/><br/><br/><br/>
                <LeftOutlined style = {{ fontSize: "20px", marginRight: 30}}/>
                <RedoOutlined style = {{ fontSize: 20 }}/>
                <RightOutlined style = {{ fontSize: 20 , marginLeft: 30 }}/>

              </Col>
            </Row >
          </Col>
          <Col span={14} style={{ paddingBottom:"70px"}}>
            <Row justify="space-around" align="middle">
              <Row align="middle">
                <Col span={6} style={{ padding:"10px"}}>
                  <Title level={5} style={{textAlign:"center"}}>Камера</Title>
                  <Image width={200}
                    src="/face.jpg"
                  />
                </Col>
                <Col span={6} style={{ padding:"10px"}}>
                  <Title level={5} style={{textAlign:"center"}}>База данных</Title>
                  <Image width={200}
                    src="/face.jpg"
                  />
                </Col>
                <Col span={6} style={{ padding:"10px"}}>
                  <Title level={5} style={{textAlign:"center"}}>База данных</Title>
                  <Image width={200}
                    src="/face.jpg"
                  />
                </Col>
                <Col span={6} style={{ padding:"10px"}}>
                  <Title level={5} style={{textAlign:"center"}}>База данных</Title>
                  <Image width={200}
                    src="/face.jpg"
                  />
                </Col>
              </Row>

              <Row align="middle">
                <Col span={12} style={{ padding:"10px"}}>
                  <Title level={4} style={{textAlign:"center"}}>Полный кадр</Title>
                  <Image width={400}
                    src="/face.jpg"
                  />
                </Col>
                <Col span={12} style={{ padding:"10px"}}>
                  <Title level={4} style={{textAlign:"center"}}>Карта глубин</Title>
                  <Image width={400}
                    src="/face.jpg"
                  />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
  </>
  </AccountSettingsLayout>
)

export default Index
