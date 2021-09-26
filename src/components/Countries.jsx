import  {Country} from './Country'

function Countries (props) {
  const {countries = [] } = props;

  return <div className="countries">
    {countries.length ? (
    countries.map((country )=> <Country key={country.alpha3Code} {...country} />)
    ) : (
      <h4>Ничего не найдено</h4>
    )}
  </div>
}

export {Countries}
