import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, label }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ reviews }) => {
  const good = reviews.good,
    bad = reviews.bad,
    neutral = reviews.neutral,
    total = good + bad + neutral,
    positiveReviews = good / total || "0",
    averageScore = (good - bad) / total || "0"


  if (total === 0) {
    return (
      <>
        <p>No reviews yet</p>
      </>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total reviews" value={total} />
        <StatisticLine text="Average review score" value={averageScore} />
        <StatisticLine text=" % of positive reviews" value={positiveReviews * 100 + '%'} />
      </tbody>
    </table>

  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allReviews = { good, bad, neutral }

  return (
    <div>
      <h1>Reviews</h1>
      <h2>Leave a rating</h2>
      <Button handleClick={() => setGood(good + 1)} label="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleClick={() => setBad(bad + 1)} label="bad" />
      <h2>Customer Reviews</h2>
      <Statistics reviews={allReviews} />
    </div>
  )

}

ReactDOM.render(<App />,
  document.getElementById('root')
)
