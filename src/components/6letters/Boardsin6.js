import Letterin6 from './Letterin6'


function Boardsin6() {
  
  return (
    <div className="board">
      <div className="row"> 
        <Letterin6 letterPos={0} attempVal={0}/>
        <Letterin6 letterPos={1} attempVal={0}/>
        <Letterin6 letterPos={2} attempVal={0}/>
        <Letterin6 letterPos={3} attempVal={0}/>
        <Letterin6 letterPos={4} attempVal={0}/> 
        <Letterin6 letterPos={5} attempVal={0}/> 
      </div>
      <div className="row">
        <Letterin6 letterPos={0} attempVal={1}/>
        <Letterin6 letterPos={1} attempVal={1}/>
        <Letterin6 letterPos={2} attempVal={1}/>
        <Letterin6 letterPos={3} attempVal={1}/>
        <Letterin6 letterPos={4} attempVal={1}/> 
        <Letterin6 letterPos={5} attempVal={1}/> 
      </div>
      <div className="row">
        <Letterin6 letterPos={0} attempVal={2}/>
        <Letterin6 letterPos={1} attempVal={2}/>
        <Letterin6 letterPos={2} attempVal={2}/>
        <Letterin6 letterPos={3} attempVal={2}/>
        <Letterin6 letterPos={4} attempVal={2}/> 
        <Letterin6 letterPos={5} attempVal={2}/> 
      </div>
      <div className="row">
        <Letterin6 letterPos={0} attempVal={3}/>
        <Letterin6 letterPos={1} attempVal={3}/>
        <Letterin6 letterPos={2} attempVal={3}/>
        <Letterin6 letterPos={3} attempVal={3}/>
        <Letterin6 letterPos={4} attempVal={3}/> 
        <Letterin6 letterPos={5} attempVal={3}/> 
      </div>
      <div className="row">
        <Letterin6 letterPos={0} attempVal={4}/>
        <Letterin6 letterPos={1} attempVal={4}/>
        <Letterin6 letterPos={2} attempVal={4}/>
        <Letterin6 letterPos={3} attempVal={4}/>
        <Letterin6 letterPos={4} attempVal={4}/> 
        <Letterin6 letterPos={5} attempVal={4}/> 
      </div>
      <div className="row">
        <Letterin6 letterPos={0} attempVal={5}/>
        <Letterin6 letterPos={1} attempVal={5}/>
        <Letterin6 letterPos={2} attempVal={5}/>
        <Letterin6 letterPos={3} attempVal={5}/>
        <Letterin6 letterPos={4} attempVal={5}/> 
        <Letterin6 letterPos={5} attempVal={5}/> 
      </div>
    </div>
  )
}

export default Boardsin6
