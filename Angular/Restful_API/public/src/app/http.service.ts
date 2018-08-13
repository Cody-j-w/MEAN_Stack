
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {}
   getTasks() {
    return this._http.get('/tasks');
   }

  showTasks(id) {
    return this._http.get(`/tasks/${id}`);
  }
  postTasks(newTask) {
    return this._http.post('/tasks', newTask);
  }
  updateTasks(task) {
    console.log('in service file');
    console.log(task)
    return this._http.put(`/tasks/${task._id}`, task);
  }
  deleteTasks(task) {
    return this._http.delete(`/tasks/${task._id}`);
  }
}
