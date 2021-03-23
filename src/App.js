import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from 'components/navbar'

import Home from 'pages/homePage'
import ProductPage from 'pages/productPage'
import Cart from 'components/cart'
import NavMenu from 'components/navMenu'
import Footer from 'components/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path='/products/:handle'>
            <ProductPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          <Home />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
