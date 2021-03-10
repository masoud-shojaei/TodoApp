function Loader({type}) {
  const cheked = type === 'small-loader'
  const smallLoader = cheked && 'small-loader' 

  return <div className={`loader ${smallLoader}`}>Loading...</div>
}

export default Loader
