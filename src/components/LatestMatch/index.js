import {Component} from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails
    return (
      <div className="match-card-container">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="description">{date}</p>
          <p className="description">{venue}</p>
          <p className="description">{result}</p>
          <p className="description">Man Of The Match</p>
          <p className="description">{manOfTheMatch}</p>
        </div>
        <div>
          <img
            className="team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <p className="description description1">First Innings</p>
          <p className="description description1">{firstInnings}</p>
          <p className="description description1">Second Innings</p>
          <p className="description description1">{secondInnings}</p>
          <p className="description description1">Umpires</p>
          <p className="description description1">{umpires}</p>
        </div>
      </div>
    )
  }
}
