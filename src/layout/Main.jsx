import React from 'react';
import { Countries } from "../components/Countries"
import { Search } from '../components/Search';
import {Preloader} from "../components/Preloader"

class Main extends React.Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    fetch('https://restcountries.com/v2/name/united')
      .then(response => response.json())
      .then(data => this.setState({countries: data}))
  }

  searchCountries = (str) => {
    fetch(`https://restcountries.com/v2/name/${str}`)
    .then(response => response.json())
    .then(data => this.setState({countries: data}))
  }

  render() {
    const {countries} = this.state;

    return <main className="container content">
      <Search searchCountries={this.searchCountries}/>
      {
        countries.length ? (
         <Countries countries={this.state.countries} />
        ) : <Preloader />
      }
    </main>
  }
}

export {Main}
