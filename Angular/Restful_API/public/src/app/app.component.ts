
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks';
  tasks: any;
  task: any;
  showing: any;
  newTask: any;
  deleteTask: any;
  updateTask: any;




  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    console.log(this.tasks)
    this._httpService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.newTask = { title: '', description: '', completed: false};
    this.updateTask = { title: '', description: '', completed: false};
  }
  onButtonClickParam(task) { 
    console.log(task._id);
    console.log(task.title);
    this.showTasksFromService(task);
    this.updateTask = {_id: task._id, title:task.title, description:task.description, completed:task.completed}
    console.log(this.updateTask)
  }
  onButtonClickDelete(task) {
    console.log(task._id)
    this.deleteTasksFromService(task)
  }


  onSubmit() {
    this._httpService.postTasks(this.newTask).subscribe(task => {this.tasks.push(this.newTask)});
    this._httpService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.newTask = { title: '', description: ''};
  }
  update(){
    this._httpService.updateTasks(this.updateTask).subscribe(task => {this.updateTask = console.log('Updated? ', task), {
      title:this.updateTask.title,
      description: this.updateTask.description,
      completed:this.updateTask.completed,
    }
  })
  this.showing = undefined;
  this._httpService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  


  showTasksFromService(task):void {
    this._httpService.showTasks(task).subscribe(task => this.showing = task);
    
  }




  deleteTasksFromService(task){
    this._httpService.deleteTasks(task).subscribe(task => this.deleteTask = task)
    this._httpService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}

