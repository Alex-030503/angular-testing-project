import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
updateTask() {
throw new Error('Method not implemented.');
}
  title = 'angular-testing-project';

  tasks: Task[]=[];
  newTask:string='';


 /* addTask(task: string) { pq asi no me sirvee :(*/ 
 addTask() {
    if(this.newTask){
      this.tasks.push({nombre:this.newTask})
      this.newTask='';
      localStorage.setItem('Lista de tareas', JSON.stringify(this.tasks));
    }

  }
  
  storageKey(storageKey: any, arg1: string) {
    throw new Error('Method not implemented.');
    localStorage.setItem(storageKey,JSON.stringify(this.tasks));
  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
