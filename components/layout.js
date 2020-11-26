import { useState } from 'react';
import { useRouter } from "next/router";
import { Button, Dropdown, Layout, Image, Menu } from 'antd';
import {  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const MenuLayout = ({ children, props }) => {

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
          <Menu.Item key="/" >
            Tasks
          </Menu.Item>
          <Menu.Item key="/stats" >
            Статистика
          </Menu.Item>
          <Menu.Item key="/task_manager" >
            Диспетчер задач
          </Menu.Item>
          <SubMenu
            key="sub"
            title="Hi, user"
            style ={{
              float: "right",
              marginRight: 28,
            }}>
              <Menu.Item key="/">log out</Menu.Item>
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

export default MenuLayout;
