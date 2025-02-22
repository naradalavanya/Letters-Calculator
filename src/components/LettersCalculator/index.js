import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  handleChange = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const letterCount = inputText.length
    return (
      <div className="calculator-container">
        <div className="left-content">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="phraseInput">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseInput"
            className="input-box"
            placeholder="Enter text here"
            onChange={this.handleChange}
            value={inputText}
          />
          <p className="letter-count">
            No.of letters: {inputText ? letterCount : 0}
          </p>
        </div>
        <div className="right-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
