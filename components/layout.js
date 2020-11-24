import { useState } from 'react';
import { useRouter } from "next/router";
import { Button, Layout, Image, Menu } from 'antd';
import { UserOutlined, MehOutlined, VideoCameraOutlined, ReloadOutlined, BarChartOutlined, UserDeleteOutlined, OrderedListOutlined, SafetyCertificateOutlined, SortAscendingOutlined, InteractionOutlined  } from '@ant-design/icons';
import { Tree } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        Русский
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        English
      </a>
    </Menu.Item>
  </Menu>
);

const treeData = [
  {
    title: 'Device chosen',
    key: '0-0',
    icon: <VideoCameraOutlined />,
    children: [
      {
        title: '2020-11-20 | antispoofing crop',
        key: '0-0-1',
        icon: ({ selected }) => (selected ? <VideoCameraOutlined style={{ color: '#0000CD' }}/> : <VideoCameraOutlined />),
      },
      {
        title: '2020-11-19 | antispoofing print',
        key: '0-0-2',
        icon: ({ selected }) => (selected ? <VideoCameraOutlined style={{ color: '#0000CD' }}/> : <VideoCameraOutlined />),
      },
        {
        title: '2020-11-12 | resnet18 clf (wo onet)| 2k base',
        key: '0-0-3',
        icon: ({ selected }) => (selected ? <VideoCameraOutlined style={{ color: '#0000CD' }}/> : <VideoCameraOutlined />),
      },
      {
        title: '	Local test',
        key: '0-0-4',
        icon: ({ selected }) => (selected ? <VideoCameraOutlined style={{ color: '#0000CD' }}/> : <VideoCameraOutlined />),
      },
  ],
},
];

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
    <Layout style={{ background: 'white' }}>


        <Sider
          style={{ background: 'white' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo"/>

          <Menu mode="inline" defaultSelectedKeys={[count]} style={{ background: 'white' }}>

              <Image
                width = {150}
                src = "/logo.png"
                preview = {false}
                style ={{
                  float: "left",
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 15,
                  marginBottom: 25,

                }}
              />

            <SubMenu key="1" onClick={handelClick} icon={<OrderedListOutlined style={{ color: '#0000CD' }} />} title="Tasks" style={{ color: '#0000CD'}}>

            <Menu.Item key="/" onClick={handelClick} icon={<SortAscendingOutlined style={{ color: '#0000CD' }} />}>
              All
            </Menu.Item>
            <Menu.Item key="/antispoofing" onClick={handelClick} icon={<UserOutlined style={{ color: '#0000CD' }} />}>
              Antispoofing
            </Menu.Item>
            <Menu.Item key="/recog" onClick={handelClick} icon={<MehOutlined style={{ color: '#0000CD' }} />}>
              Face recognition
            </Menu.Item>
            <Menu.Item key="/turn" onClick={handelClick} icon={<ReloadOutlined style={{ color: '#0000CD' }} />}>
              Face turn
            </Menu.Item>

            </SubMenu>

            <Menu.Item key="/task_manager"  onClick={handelClick} icon={<SafetyCertificateOutlined style={{ color: '#0000CD' }} />}>
              Task manager
            </Menu.Item>
            <Menu.Item key="/stats" onClick={handelClick} icon={<BarChartOutlined style={{ color: '#0000CD' }} />}>
              Statistics
            </Menu.Item>
            <Menu.Item key="/devices" onClick={handelClick} icon={<InteractionOutlined style={{ color: '#0000CD' }} />}>
              Choose a device
            </Menu.Item>
            <Menu.Item key="/camspecs" onClick={handelClick} icon={<VideoCameraOutlined style={{ color: '#0000CD' }} />}>
              Cam. specifications
            </Menu.Item>
            <Menu.Item key="logout" icon={<UserDeleteOutlined style={{ color: '#0000CD' }} />}>Log out
            </Menu.Item>
          </Menu>
                              <Tree style={{ paddingTop:'10vh', paddingBottom:'10vh'}}
                              showIcon
                              defaultExpandAll
                              defaultSelectedKeys={['0-0-0']}
                              switcherIcon={<VideoCameraOutlined />}
                              treeData={treeData}/>

                              <Dropdown overlay={menu}>
                              <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: '#0000CD', paddingLeft:'5.5vh'}}>
                                                                                     Language <DownOutlined />
                              </a>
                              </Dropdown>

        </Sider>
        <Layout style={{ background: 'white' }}>
          <Header style={{ padding: 0, background: 'white'}}>
          </Header>
          <Content style={{ margin: '24px 16px 0', background: 'white' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: 'white' }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
  );
};

export default MenuLayout;
