import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import Hello from './containers/Hello.jsx';
import Blog from './components/Blog.jsx';

const store = createStore(reducer);
const Index = () => (
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Hello} />
        <Route path="/blogPost" component={Blog} />
      </Router>
    </Provider>
  )
);

render(<Index />, document.getElementById('app'));

