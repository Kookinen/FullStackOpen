import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const StatisticLine = props => {
    if (props.text === "Positive") {
        return <tr><td>{props.text}</td><td>{props.value} %</td></tr>
    }
    else {
        return <tr><td>{props.text}</td><td>{props.value}</td></tr>
    }
}
    

const Statistics = (props) => {
    if (props.stats.all === 0) {
        return <div><p>No feedback given</p></div>
    }
    else {
        let average = 0
        let positive = 0
        average = (props.stats.good + props.stats.bad * (-1)) / (props.stats.all)
        positive = props.stats.good * 100 / props.stats.all
        return <div>
                   <table>
                       <tbody>                
                           <StatisticLine text="Good" value={props.stats.good} />
                           <StatisticLine text="Neutral" value={props.stats.neutral} />
                           <StatisticLine text="Bad" value={props.stats.bad} />
                           <StatisticLine text="All" value={props.stats.all} />
                           <StatisticLine text="Average" value={average} />
                           <StatisticLine text="Positive" value={positive} />
                       </tbody>
                   </table>
               </div>
         }
}

const App = () => {
    const [clicks, setClicks] = useState({
        good: 0, bad:0, neutral:0, all:0
    })

    const handleGoodClick = () => {
        console.log('adding...')
        const newClicks = {
            good: clicks.good + 1,
            bad: clicks.bad,
            neutral: clicks.neutral,
            all: clicks.all + 1
        }
        setClicks(newClicks)
        console.log('Good: ', clicks.good)
    }

    const handleBadClick = () => {
        console.log('adding...')
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad + 1,
            neutral: clicks.neutral,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }

    const handleNeutralClick = () => {
        console.log('adding...')
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad,
            neutral: clicks.neutral + 1,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }

    

  return (
      <div>
          <h2>give feedback</h2>
          <Button handleClick={() =>handleGoodClick()} text="good"/>
          <Button handleClick={() =>handleNeutralClick()} text="neutral"/>
          <Button handleClick={() => handleBadClick()} text="bad" />
          <h2>statistics</h2>
          <Statistics stats={clicks} />
          
      </div>
  )
}

export default App
