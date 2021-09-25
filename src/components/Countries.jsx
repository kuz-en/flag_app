import  {Country} from './Country'

function Countries (props) {
  const {countries} = props;

  return <div className="countries">
    {countries.map(country => (
      <Country key={country.alpha3Code} {...country} />
    ))}
  </div>
}

export {Countries}
