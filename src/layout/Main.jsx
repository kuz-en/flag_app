import React from 'react';
import { Countries } from "../components/Countries"

class Main extends React.Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/united')
      .then(response => response.json())
      .then(data => this.setState({countries: data}))
  }

  render() {
    const {countries} = this.state;

    return <main className="container content">
      {
        countries.length ? (
         <Countries countries={this.state.countries} />
        ) : <h3>Loading...</h3>
      }
    </main>
  }
}

export {Main}
