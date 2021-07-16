import { Component, OnInit } from '@angular/core';
import {Goal} from "../goal"

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  constructor() { }
goals:Goal[]=[
  new Goal(1, "Watch finding Nemo","find an online version and wath merlin find his son"),
 new Goal(2,"buy cookies","I have to buy cookies for the parrot"),
  new Goal(3,"get new phone case", "Diana has her birthday coming up soon"),
  new Goal(4,"Get Dog food", "Pupper likes expensive snacks"),
  new Goal(5,"Solve math homework", "Damn maths"),
  new Goal(6,"plot my world domination plan", "Cause i am evil overlord"),
];


toggleDetails(index:any){
  this.goals[index].showDescription=!this.goals[index].showDescription;
}
  
  ngOnInit():  void {
  }

}
