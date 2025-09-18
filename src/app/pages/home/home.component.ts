import { Component, signal } from '@angular/core';
import { NgFor } from "@angular/common";

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ NgFor ]
})
export class HomeComponent {
  tasks = signal<Task[]>([
      {
        id: Date.now(),
        title:'Reservar vuelos',
        completed: true
      },
      {
        id: Date.now(),
        title:'Reservar Hotel',
        completed: false
      },
      {
        id: Date.now(),
        title:'Preparar equipaje',
        completed: false
      }
  ]);

  changeHandlerInput(event:Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask)
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed:false,
    };
    //para  agregar nuevo valor  al final de la lista
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  deleteTask(index: Number){
    //usamos filter para hacer un array sin el elemanto con el index enviado
    this.tasks.update((tasks)=>tasks.filter((task, position)=> position != index));
  }

  updateTask(index:Number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    });
  }
}
