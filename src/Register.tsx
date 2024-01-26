import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { service } from './http';

const Register = () => {
  const [s, setS] = useState(false);

  return (
    <Form
      name="register"
      onFinish={(values: any) => {
        setS(true);
        service({
          url: '/users/register',
          method: 'POST',
          data: values,
        })
          .then(() => {
            setS(false);
            window.location.reload();
          })
          .catch(() => {
            setS(false);
          });
      }}
      scrollToFirstError
    >
      <Form.Item
        name="nickname"
        label="昵称"
        rules={[{ required: true, message: '请输入你的昵称!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="mobile" label="手机号" rules={[{ required: true, message: '请输入你的手机号!' }]}>
        <Input className="w-100" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请再次输入密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码不匹配!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button loading={s} type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
