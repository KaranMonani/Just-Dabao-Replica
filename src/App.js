import { Switch, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage/index'
import Order from './components/pages/order/index'
import Support from './components/pages/support/index'
import Partner from './components/pages/partner/index'
import Gallery from './components/pages/story/index'
import Blog from './components/pages/blog/index'
import Story from './components/pages/story/index'
import Login from './components/pages/login/index'
import Cart from './components/pages/cart/index'
import ProductDetails from './components/pages/product-details/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product-details/:id" component={ProductDetails} />
        <Route exact path="/order/" component={Order} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/cart/" component={Cart} />
        <Route exact path="/support/" component={Support} />
        <Route exact path="/partner/" component={Partner} />
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/blog/" component={Blog} />
        <Route exact path="/story" component={Story} />
      </Switch>
    </div>
  );
}

export default App;
