

const PassengerTicket = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.destination}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.seat}</h2>
    </div>
  )
}

export default PassengerTicket