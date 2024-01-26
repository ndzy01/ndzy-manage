import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Login from './Login';
import Register from './Register';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '登录',
    children: <Login />,
  },
  {
    key: '2',
    label: '注册',
    children: <Register />,
  },
];

function App() {
  return <Tabs defaultActiveKey="1" items={items} />;
}

export default App;
