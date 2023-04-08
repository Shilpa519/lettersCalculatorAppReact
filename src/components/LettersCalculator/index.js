import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: '', count: 0}

  onChangeInput = event => {
    this.setState({input: event.target.value})
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    const {input} = this.state
    return (
      <div className="app-container">
        <div className="data-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="val" className="input-label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="val"
            className="input"
            placeholder="Enter the phase"
            onChange={this.onChangeInput}
            value={input}
          />
          <div className="value-container">
            <p className="value">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
