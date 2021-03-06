import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;
  @Output() eventToUse = new EventEmitter();

  constructor() { }

  deleteTask(id){
    this.eventToUse.emit(id);
  }

  ngOnInit() {
  }

}
