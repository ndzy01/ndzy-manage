import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { service } from './http';

const Login = () => {
  const [s, setS] = useState(false);

  return (
    <Form
      name="login"
      onFinish={(values) => {
        setS(true);
        service({
          url: '/users/login',
          method: 'POST',
          data: values,
        })
          .then((res: any) => {
            setS(false);
            if (res && res.data && res.data.token) {
              localStorage.setItem('token', res.data.token);
              window.location.reload();
            }
          })
          .catch(() => {
            setS(false);
          });
      }}
      scrollToFirstError
    >
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
      <Form.Item>
        <Button loading={s} type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
