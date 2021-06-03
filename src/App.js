// import logo from './logo.svg';
// import './App.css';
// import React from ''



// class App extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// export default App;
import React from 'react';
import { Button } from 'react-bootstrap';
import RouterPage from './router/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>
       {/* <p>Campus Recruitment DRive</p> */}
      {/* <Button variant="outline-primary">Primary</Button>{' '} */} 
      <RouterPage/>
    </div>
  )
}

export default App
