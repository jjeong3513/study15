
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductTab from './components/ProductTab/ProductTab';
import Tab from './components/Tab/Tab';

function App() {
  const title = 'React site';
  return (
    <div className="App">
      <Header title={title} /> {/* Header / -> 이렇게 태그 입력할 때 첫글자는 대문자로 적어줘야함*/}
      <Main />
      <ProductTab />
      <Tab />
      <Footer title={title} />
    </div>
  );
}

export default App;
