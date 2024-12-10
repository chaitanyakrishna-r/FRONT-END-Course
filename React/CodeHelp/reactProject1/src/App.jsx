import './App.css'
// import UserCard from './components/UserCard'
// import Counter from './components/Counter/Counter'
import Cards from './components/Props/Cards'

function App() {
  

  return (
    <>
    <div className='container'>
     {/* <UserCard name={"chaitanyakrishna"} desc={"hey i'm engineer"}/>
     <UserCard name={"alex"} desc={"hey i'm plumer"}/>
     <UserCard name={"jordon"} desc={"hey i'm player"}/> */}
  
     <Cards name={'ckr'}>

      <h1>Best web dev</h1>
     </Cards>
    </div>
    </>
  )
}

export default App
