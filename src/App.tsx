import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Login from './Login';
import Register from './Register';

const links = [
  { src: 'https://ndzy01.gitee.io/ndzy-admin', name: 'admin' },
  { src: 'https://ndzy01.gitee.io/ndzy-todos/', name: 'todos' },
];

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
  return (
    <div style={{ padding: 16 }}>
      <ul>
        {links.map((item) => (
          <li key={item.src}>
            <a target="_blank" href={item.src}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <Tabs defaultActiveKey="1" items={items} />;
    </div>
  );
}

export default App;
