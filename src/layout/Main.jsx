import React from 'react';
import { Countries } from "../components/Countries"
import { Search } from '../components/Search';
import {Preloader} from "../components/Preloader"

class Main extends React.Component {
  state = {
    countries: [],
    loading: true,
  }

  componentDidMount() {
    fetch('https://restcountries.com/v2/name/united')
      .then(response => response.json())
      .then(data => this.setState({countries: data, loading: false}))
  }

  searchCountries = (str) => {
    this.setState({loading: true})
    fetch(`https://restcountries.com/v2/name/${str}`)
    .then(response => response.json())
    .then(data => this.setState({countries: data, loading: false}))
  }

  render() {
    const {countries, loading} = this.state;

    return <main className="container content">
      <Search searchCountries={this.searchCountries}/>
      {loading ? <Preloader /> : <Countries countries={countries} />}
    </main>
  }
}

export {Main}
