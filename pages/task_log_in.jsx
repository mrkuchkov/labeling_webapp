import MenuLayout from '../components/layout'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <Form
     {...layout}
     name="basic"
     initialValues={{
       remember: true,
     }}
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     style={{marginLeft:"-500px", marginRight:"200px", marginTop:"30px"}}
   >
     <Form.Item
       label="Username"
       name="username"
       rules={[
         {
           required: true,
           message: 'Please input your username!',
         },
       ]}
     >
       <Input />
     </Form.Item>

     <Form.Item
       label="Password"
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your password!',
         },
       ]}
     >
       <Input.Password />
     </Form.Item>

     <Form.Item {...tailLayout} name="remember" valuePropName="checked">
       <Checkbox>Remember me</Checkbox>
     </Form.Item>

     <Form.Item {...tailLayout}>
       <Button type="primary" htmlType="submit" ghost>
         Submit
       </Button>
     </Form.Item>
   </Form>
 );
};

const Index = () => (
<MenuLayout props ={"/task_manager"}>
<>
   <div align="center">
     <Avatar size={128} icon={<UserOutlined style={{ color: '#0000CD' }}/>} />
   </div>
</>
<Demo/>
</MenuLayout>
)

export default Index
