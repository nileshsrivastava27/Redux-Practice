import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Header.js'
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';

function App() {
  return (
    <>
    <Router>  
      <Header/> 
        <Routes>
          <Route path = "/" element = {<ProductListing />} />
          <Route path = "/product/:productId" element = {ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
