import { Space, Tabs, Tag } from 'antd';
import type { TabsProps } from 'antd';
import Login from './Login';
import Register from './Register';

const links = [
  { src: 'https://ndzy01.gitee.io/ndzy-manage/', name: 'manage' },
  { src: 'https://ndzy01.gitee.io/ndzy-users/', name: 'users' },
  { src: 'https://ndzy01.gitee.io/ndzy-tags/', name: 'tags' },
  { src: 'https://ndzy01.gitee.io/ndzy-records/', name: 'records' },
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

function getRandomColor() {
  const red = Math.floor(Math.random() * 256); // 生成0-255的随机红色分量
  const green = Math.floor(Math.random() * 256); // 生成0-255的随机绿色分量
  const blue = Math.floor(Math.random() * 256); // 生成0-255的随机蓝色分量

  return 'rgb(' + red + ', ' + green + ', ' + blue + ')'; // 返回rgb格式颜色
}

function App() {
  return (
    <div style={{ padding: 16 }}>
      <Space wrap>
        {links.map((item) => (
          <a key={item.src} target="_blank" href={item.src}>
            <Tag color={getRandomColor()}> {item.name}</Tag>
          </a>
        ))}
      </Space>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default App;
