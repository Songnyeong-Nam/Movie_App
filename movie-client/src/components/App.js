import {HashRouter as Router, Route} from "react-router-dom"
import { createGlobalStyle } from 'styled-components'

import Home from '../routes/Home';
import Detail from '../routes/Detail';

const GlobalStyle = createGlobalStyle`
  body {
    background:  #0f0f0f;
    height: 100%;
    font-family: 'Bebas Neue', cursive;
  }
  `

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail} />
      </Router>
    <GlobalStyle/>
    </div>
  );
}

export default App;
