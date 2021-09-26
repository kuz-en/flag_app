import React, {useState} from 'react'

const Search = (props) => {
  const {
    searchCountries = Function.prototype,
    } = props;

  const [search, setSearch] = useState('');

const handleKey = (event) => {
  if (event.key === "Enter") {
    searchCountries(search);
  }
}


    return <div className="row">

      <div className="input-field">
        <input
        placeholder='Поиск'
        class="validate"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
        />
        <button className="btn search-btn cyan lighten-2" onClick={() => searchCountries(search)}>Найти</button>
      </div>

  </div>


}

export {Search}