import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

import './css/style.css';

const Root = () => {
  return (
    <BrowserRouter>
      <routes>
        <Match exactly pattern="/" component={ StorePicker } />
        <Match exactly pattern="/store/:storeId" component={ App } />
        <Miss component={ NotFound } />
      </routes>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'));
