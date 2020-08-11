import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  // define category and news
  const [category, saveCategory] = useState('');

  return (
    <Fragment>
      <Header title='News Search' />
      <div className='container white'>
        <Form saveCategory={saveCategory} />
      </div>
    </Fragment>
  );
}

export default App;
