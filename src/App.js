import React, {Component} from 'react';											
import './App.css';											
import AllProduct from './../src/component/layout_page/AllProduct';											
import { BrowserRouter as Router, Route } from 'react-router-dom';											
import routes from './routes.js';											
import { ToastContainer, toast } from 'react-toastify';											
import 'react-toastify/dist/ReactToastify.css';											
class App extends Component {											
  render(){											
  return (											
    <Router>											
    <ToastContainer />											
      <Route>  											
        {this.showContentMenu(routes)} 											
      </Route>    											
    </Router>  											
    );											
                      
  }											
  showContentMenu = (routes) =>{											
    var result = null;											
    if (routes.length > 0) {											
      result = routes.map((route, index) =>{											
        return (											
            <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />											
          );											
      });											
    }											
    return result;											
  }											
                      
}											
                      
export default App;											