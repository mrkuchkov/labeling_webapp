import { useState } from 'react';
import { useRouter } from "next/router";
import { Button, Layout, Image, Menu } from 'antd';
import {  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AccountSettingsLayout = ({ children, props }) => {

  const [count, setCount] = useState(props);
  const router = useRouter();


  const handelClick = (event) => {
    const key = event.key;
    setCount(key);
    router.push(key);
  }


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header  style ={{paddingLeft: 10}}>
        <Image
          width = {150}
          src = "/logo.png"
          preview = {false}
          style ={{
            marginRight: 30,
            float: "left",
          }}
        />

        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[count]}
            style ={{
                marginLeft: 160
            }}
        >

          <Menu.Item key="/Antispoofing" onClick={handelClick}>
          Антсиспуфинг
          </Menu.Item>
          <Menu.Item key="/Recog" onClick={handelClick}>
          Распознование лиц
          </Menu.Item>
          <Menu.Item key="/Turn" onClick={handelClick}>
          Поворот лица
          </Menu.Item>
          <Menu.Item key="/static" onClick={handelClick}>
          Статистика
          </Menu.Item>
          <Menu.Item key="/task_manager" onClick={handelClick}>
          Диспетчер задач
          </Menu.Item>

          <SubMenu
              key="sub4"
              title="Hi, user"
              mode="horizontal"
              style ={{
                float: "right",
                marginRight: 28,
              }}
          >
            <Menu.Item key="logout">log out</Menu.Item>
          </SubMenu>
        </Menu>

      </Header>
      <Content >{children}</Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2020 Created by Ant UED
      </Footer>
    </Layout>

  );
};

export default AccountSettingsLayout;
