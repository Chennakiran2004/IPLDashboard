import {Component} from 'react'
import './index.css'

export default class MatchCard extends Component {
  render() {
    const {details} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = details
    console.log(matchStatus)
    const getStatus = matchStatus === 'Won' ? 'won' : 'loss'

    return (
      <li className="card-container">
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="heading">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`status ${getStatus}`}>{matchStatus}</p>
      </li>
    )
  }
}
