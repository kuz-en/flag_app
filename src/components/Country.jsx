function Country (props) {
  const {
    name,
    capital,
    flag,
    alpha3Code: code,
  } = props;

  return <div id={code} className="card country">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={flag} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{name}</span>
      <p>{capital}</p>
    </div>
  </div>
}

export {Country}
