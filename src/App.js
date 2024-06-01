import logo from './logo.svg';
import './App.css';
// 사용자 정의 태그라는 말을 쓰지 않고 컴포넌트라고 부른다.
// 리액트의 본질 ? 코드가 단순해지며 이름을 가지고 있어서 어떤 취지인지 쉽게 파악할 수 있다. 동시에 수정할 수 있는 것도 특징적이다. 컴포넌트를 만드는 기술 덕분에 그들을 독립된 부품으로 만들 수 있게 됐고 그 부품을 이용하여 더 적은 복잡도로 소프트웨어를 만들 수 있게 됐다. 컴포넌트를 공유하여 생산성을 높일 수 있다는 장점도 있다.
function Header() {
  return <header>
    <h1><a href="/">Web</a></h1>
  </header>
}
function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">CSS</a></li>
      <li><a href="/read/3">JavaScript</a></li>
    </ol>
  </nav>
}
function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, Web!
  </article>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
