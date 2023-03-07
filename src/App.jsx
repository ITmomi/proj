import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Home} from './Page/Home'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const HeaderStyle = css`
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  
  & > span {
    font-weight: 700;
    font-size: 20px;
    color: white;
    padding: 0 24px;
  }
`;


function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{MaxWidth:'1920px'}}>
        <div css={HeaderStyle}>
          <span>Publishing</span>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
