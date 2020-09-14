import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/Header.js";
import Content from './components/Content.js';
import Total from './components/Total.js';

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  const courseExerciseMap = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3]
  ]

  return (
    <div>
      <Header course={course} />
      <Content courseExerciseMap={courseExerciseMap} />
      <Total allExercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 