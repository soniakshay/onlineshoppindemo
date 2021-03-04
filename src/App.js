import logo from './logo.svg';
import './App.css';
import Wrapper from "./component/wrapper/wrapper";
import AppLoader from "./component/AppLoader/AppLoader";
import Header from "./component/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from "./component/productcontainer/ProductContainer";
import {
    BrowserRouter as Router,
    Link,
    Route // for later
} from 'react-router-dom'
function App() {
  return (
      <Router>
    <div className="App">
      <Wrapper>
            <AppLoader></AppLoader>
            <Header></Header>
          <Route exact path="/" component={ProductContainer} />

      </Wrapper>

    </div>
      </Router>
  );
}

export default App;
