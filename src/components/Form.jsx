import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ saveCategory }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  // custom hook
  const [category, SelectNews] = useSelect('general', OPTIONS);

  // submit to form, pass category to app.js
  const searchNews = (e) => {
    e.preventDefault();
    saveCategory(category);
  };

  return (
    <div className={`${styles.search} row`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find a News by Category</h2>
          <SelectNews />
          <div className='input-field col s12'>
            <input
              type='submit'
              className={`${styles.btn_block} btn-large amber darken-2`}
              /* btn-block --> [btn-block] works */
              value='Search'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
