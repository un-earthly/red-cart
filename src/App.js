import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
