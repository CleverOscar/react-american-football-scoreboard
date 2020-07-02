import React, {useState} from 'react';


function HomeScore(){
  //declare useState
const [lionsScore, setLionsScore] = useState(0);

  //return div
  return(
    <div>
      <div className="home">
      <h2 className="home__name">Lions</h2>
      <div className="home__score" >{lionsScore}</div>
    </div>
    </div>
  );
}

export default HomeScore;
