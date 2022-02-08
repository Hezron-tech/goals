import { GoalService } from './../goal-service/goal.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

goals:Goal[];
constructor(goalService:GoalService){
  this.goals=goalService.getGoals()
}

   addNewGoal(goal: Goal){
    let goalLength:number = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index: string | number){
    this.goals[ <any>index].showDescription = !this.goals[<any> index].showDescription;
  }

  

  deleteGoal(isComplete: any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
 

 

  ngOnInit(): void {
  }

}
