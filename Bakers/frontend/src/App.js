import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  return (
      <BrowserRouter>
        <Header />
        <Container>
          <main className='py-3'>
          <Routes>
              <Route path='/' Component={HomeScreen} exact />
             <Route path='/product/:id' Component={ProductScreen} exact />
            </Routes>
          </main>
        </Container>
        <Footer />
        </BrowserRouter>
  );
}

export default App;
