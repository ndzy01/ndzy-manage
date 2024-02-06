const links = [
  { src: 'https://ndzy01.gitee.io/ndzy-manage/', name: 'manage' },
  { src: 'https://ndzy01.gitee.io/ndzy-users/', name: 'users' },
  { src: 'https://ndzy01.gitee.io/ndzy-tags/', name: 'tags' },
  { src: 'https://ndzy01.gitee.io/ndzy-records/', name: 'records' },
  { src: 'https://ndzy01.gitee.io/ndzy-todos/', name: 'todos' },
  { src: 'https://ndzy01.gitee.io/ndzy-imgs-manage/', name: 'imgs' },
  { src: 'https://ndzy01.gitee.io/ndzy-chats/', name: 'chats' },
];

const App = () => {
  return (
    <div style={{ padding: 16 }}>
      {links.map((item) => (
        <a style={{ margin: 16 }} key={item.src} target="_blank" href={item.src}>
          <span> {item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default App;
