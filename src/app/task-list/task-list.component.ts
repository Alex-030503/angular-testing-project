import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  imports:[CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() task!:Task;
  @Input() indice!: number;

  tasks: Task[]=[];
  newTask:string='';

  @Output() actualizar = new EventEmitter<{ task: Task;}>();

  editar: boolean = false;
  nomEditado: string = '';

 /* tasks: string[] = [];*/

  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    console.log('Adding task:', task);
  }

  /*updateTask(task: string) {*/
  updateTask() {
    console.log('Updating task:', this.task);
    this.tasks.push({nombre:this.newTask})
    this.editar = true;
    this.nomEditado = this.task.nombre;

  }




  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }
}
