import { useState } from 'react';
import { useRouter } from "next/router";
import { Button, Dropdown, Layout, Image, Menu } from 'antd';
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
            width: 150,
            marginRight: 30,
            float: "left",
          }}/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[count]}
          onClick={handelClick}>
          <Menu.Item key="/tasks" >
            Tasks
          </Menu.Item>
          <Menu.Item key="/static" >
            Статистика
          </Menu.Item>
          <Menu.Item key="/task_manager" >
            Диспетчер задач
          </Menu.Item>
        </Menu>
        <Menu
          theme="dark"
          defaultSelectedKeys={[count]}
          onClick={handelClick}
          style ={{
            marginLeft: "70vh",
            float: "right",
            marginRight: 28,
          }}>
            <SubMenu
              key="sub4"
              title="Hi, user">
                <Menu.Item key="tasks">log out</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      <Content>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
          Ant Design ©2020 Created by Ant UED
      </Footer>
    </Layout>

  );
};

export default AccountSettingsLayout;
