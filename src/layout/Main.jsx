import React, { useState, useEffect } from 'react';
import { Countries } from '../components/Countries';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

function Main() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchCountries = (str) => {
        setLoading(true);
        fetch(`https://restcountries.com/v2/name/${str}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setCountries(data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch('https://restcountries.com/v2/name/united')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Search searchCountries={searchCountries} />
            {loading ? <Preloader /> : <Countries countries={countries} />}
        </main>
    );
}

export { Main };
