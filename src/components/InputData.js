import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { newEntry } from '..';
import '../App.css';

export default function InputData() {

  const dispatch = useDispatch();
  const onFinish = (values) => {
  console.log('Success:', values);
  const {firstName, lastName, designation, email} = values;
  dispatch(newEntry( firstName, lastName, designation, email))
  };

  const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };
  
  return (
    <div className='container'>
      <Form
        className='form'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your First Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your last Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Designation"
          name="designation"
          rules={[
            {
              required: true,
              message: 'Please input your Designation!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
   </div>
  )
  };