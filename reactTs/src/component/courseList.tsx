import Course from './course';
import {type CourseGoal} from '../App';

type CourseGoalList = {
    goals:CourseGoal[];
    onDeleteGoal:(id:Number) => void
}

function CourseList({goals,onDeleteGoal}:CourseGoalList){
    return(
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
              <Course 
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoal}
              >
                <p>{goal.description}</p>
              </Course>
          </li>
        ))}
      </ul>
    )
}

export default CourseList