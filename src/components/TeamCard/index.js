import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {name, teamImageUrl} = teamCard
  return (
    <li className="team-card-container">
      <div>
        <img className="team-logo" src={teamImageUrl} alt={name} />
      </div>
      <div className="team-name">
        <p>{name}</p>
      </div>
    </li>
  )
}

export default TeamCard
