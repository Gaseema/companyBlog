import React from 'react';
import RowLatest from './RowLatest.jsx';
import RowRecent from './RowRecent.jsx';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Nav from './Nav.jsx';
import RowBlogs from './RowBlogs.jsx';

require('../styles/hello.scss');

const Hello = () => (
  (
    <div>
      <Nav />
      <Hero />
      <RowBlogs />
      <RowLatest />
      <RowRecent />
      <Footer />
    </div>
  )
);

export default Hello;

