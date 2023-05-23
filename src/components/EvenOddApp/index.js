import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    // eslint-disable-next-line
    const {count} = this.state
    const randomValue = Math.floor(Math.random() * 101)
    this.setState(prevState => ({
      count: prevState.count + randomValue,
    }))
  }

  render() {
    const {count} = this.state
    const Iseven = count % 2 === 0
    const message = Iseven ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="main-container">
        <h1 className="count">count {count}</h1>
        <p className="para">{message}</p>
        <button type="button" className="btn" onClick={this.handleIncrement}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
