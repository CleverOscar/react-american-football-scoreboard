import React, {useState} from 'react'

function AwayScore(){
  //delcare state
  const [tigersScore, setTigersScore] = useState(0);

  return(
    <div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score" >{tigersScore}</div>
      </div>
    </div>
  )
}

export default AwayScore;
