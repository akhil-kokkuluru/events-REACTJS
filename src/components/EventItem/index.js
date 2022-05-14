import './index.css'

const EventItem = props => {
  const {eventsList} = props
  const {id, imageUrl, name, location, registrationStatus} = eventsList
  return (
    <div className="eventContainer">
      <button>
        <img src={imageUrl} alt="event" className="imgcss" />
      </button>
      <h1 className="heading">{name}</h1>
      <p className="discription">{location}</p>
    </div>
  )
}

export default EventItem
