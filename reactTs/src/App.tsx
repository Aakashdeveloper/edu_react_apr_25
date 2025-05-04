import {useState} from 'react';
import CourseList from './component/courseList';
import './App.css';
import Header from './component/header';
import Image from './assets/goals.jpg';
import NewGoal from './component/NewGoal';

export type CourseGoal = {
  id: number;
  title: string;
  description:string;
}

function App(){

  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal:string,summary:string){
    setGoals((prevGoals) => {
      const newGoal:CourseGoal={
        id:Math.floor(Math.random()*1000),
        title:goal,
        description:summary
      }
      return [...prevGoals,newGoal]
    })
  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id))
  }

  return(
    <>
      <Header image={{src:Image,alt:'List of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <CourseList goals={goals} onDeleteGoal={handleDeleteGoal}/>
     
    </>
  )
}

export default App



// import {useState} from 'react';
// import CourseList from './component/courseList';
// import './App.css';
// import Header from './component/header';
// import Image from './assets/goals.jpg';


// export type CourseGoal = {
//   id: number;
//   title: string;
//   description:string;
// }

// function App(){

//   const [goals, setGoals] = useState<CourseGoal[]>([])

//   function handleAddGoal(){
//     setGoals((prevGoals) => {
//       const newGoal:CourseGoal={
//         id:Math.floor(Math.random()*1000),
//         title:"Learn React TS",
//         description:"This is react course"
//       }
//       return [...prevGoals,newGoal]
//     })
//   }

//   function handleDeleteGoal(id:number){
//     setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id))
//   }

//   return(
//     <>
//       <Header image={{src:Image,alt:'List of goals'}}>
//         <h1>Your Course Goals</h1>
//       </Header>
//       <button onClick={handleAddGoal}>Add Goal</button>
//       <CourseList goals={goals} onDeleteGoal={handleDeleteGoal}/>
     
//     </>
//   )
// }

// export default App



// import {useState} from 'react';
// import Course from './component/course';
// import './App.css';
// import Header from './component/header';
// import Image from './assets/goals.jpg';

// type CourseGoal = {
//   id: number;
//   title: string;
//   description:string;
// }

// function App(){

//   const [goals, setGoals] = useState<CourseGoal[]>([])

//   function handleAddGoal(){
//     setGoals((prevGoals) => {
//       const newGoal:CourseGoal={
//         id:Math.random()*1000,
//         title:"Learn React TS",
//         description:"This is react course"
//       }
//       return [...prevGoals,newGoal]
//     })
//   }

//   return(
//     <>
//       <Header image={{src:Image,alt:'List of goals'}}>
//         <h1>Your Course Goals</h1>
//       </Header>
//       <button onClick={handleAddGoal}>Add Goal</button>
//       <ul>
//         {goals.map((goal) => (
//           <li key={goal.id}>
//               <Course title={goal.title}>
//                 <p>{goal.description}</p>
//               </Course>
//           </li>
//         ))}
//       </ul>
     
//     </>
//   )
// }

// export default App



// import Course from './component/course';
// import './App.css';
// import Header from './component/header';
// import Image from './assets/goals.jpg';

// function App(){
//   return(
//     <>
//       <Header image={{src:Image,alt:'List of goals'}}>
//         <h1>Your Course Goals</h1>
//       </Header>
//       <button>Add Goal</button>
//       <Course title="Learn React TS">
//       <p>Learn it forn developer Funnel</p>
//       </Course>
//     </>
//   )
// }

// export default App

// import Course from './component/course';
// import './App.css'

// function App(){
//   return(
//     <>
//       <Course
//       title="Learn React TS"
//       description={"Learn it forn developer Funnel"}
//       id="1"
//       />
//     </>
//   )
// }

// export default App