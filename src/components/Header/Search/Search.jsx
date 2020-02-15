import React from 'react';
import s from './Search.module.css';

const Search = () => {
  return (
    <div className={s.search}>
      <input type="text" className={s.search_term} placeholder="I am looking for..." />
      <button type="submit" className={s.search_button}> 
        Search
      </button>
    </div>
  )
}

export default Search;