import logo from './logo.svg';
import './App.css';
// 사용자 정의 태그라는 말을 쓰지 않고 컴포넌트라고 부른다.
// 리액트의 본질 ? 코드가 단순해지며 이름을 가지고 있어서 어떤 취지인지 쉽게 파악할 수 있다. 동시에 수정할 수 있는 것도 특징적이다. 컴포넌트를 만드는 기술 덕분에 그들을 독립된 부품으로 만들 수 있게 됐고 그 부품을 이용하여 더 적은 복잡도로 소프트웨어를 만들 수 있게 됐다. 컴포넌트를 공유하여 생산성을 높일 수 있다는 장점도 있다.
function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  // 리액트가 태그를 추적해야 하는데 그 근거가 필요하다. 그 근거로 Key라고 하는 약속된 Prop을 부여함으로써 정확도를 높인다. 반복문 내에서 겹치지 않도록 부여한다.
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'CSS', body: 'CSS is ...'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is ...'}
  ]
  return (
    <div>
      <Header title="Web"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
