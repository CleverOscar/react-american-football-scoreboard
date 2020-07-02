import React, {useState} from 'react'

function TouchDown(){
  // declare states
  

  return (
    <div>
      <section className="buttons">
        <button className="homeButtons__touchdown" >Home Touchdown</button>
         <button className="homeButtons__fieldGoal" >Home Field Goal</button>

       <div className="awayButtons">
         <button className="awayButtons__touchdown" >Away Touchdown</button>
         <button className="awayButtons__fieldGoal" >Away Field Goal</button>
       </div>
      </section>
    </div>)
}

export default TouchDown;
