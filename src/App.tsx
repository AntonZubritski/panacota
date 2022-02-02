import Body from './ui/components/body';
import Footer from './ui/components/footer';
import Header from './ui/components/header';
import MainWrapper from './ui/wrappers/mainWrapper';
import LanguageContextProvider from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <MainWrapper>
          <Header />
          <Body />
          <Footer />
        </MainWrapper>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
