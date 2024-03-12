import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCards: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCards: updatedData, isLoading: false})
  }

  render() {
    const {teamCards, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="app-container">
              <div className="heading-container">
                <img
                  className="ipl-logo"
                  alt="ipl logo"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                />
                <h1 className="ipl-heading">IPL Dashboard</h1>
              </div>
              <ul className="team-cards-container">
                {teamCards.map(eachTeam => (
                  <Link key={eachTeam.id} to={`/team-matches/${eachTeam.id}`}>
                    <TeamCard teamCard={eachTeam} />
                  </Link>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
