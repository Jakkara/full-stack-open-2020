import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, label }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>Reviews</h1>
      <h2>Leave a rating</h2>
      <Button handleClick={() => setGood(good + 1)} label="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleClick={() => setBad(bad + 1)} label="bad" />
      <h2>Customer Reviews</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
    </div>
  )

}

ReactDOM.render(<App />,
  document.getElementById('root')
)
