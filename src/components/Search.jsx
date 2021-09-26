import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
  }

handleKey = (event) => {
  if (event.key === "Enter") {
    this.props.searchCountries(this.state.search);
  }
}

  render() {
    return <div className="row">

      <div className="input-field">
        <input
        placeholder='Поиск'
        class="validate"
        type="search"
        value={this.state.search}
        onChange={(e) => this.setState({search: e.target.value})}
        onKeyDown={this.handleKey}
        />
        <button className="btn search-btn cyan lighten-2" onClick={() => this.props.searchCountries(this.state.search)}>Найти</button>
      </div>

  </div>

  }
}

export {Search}