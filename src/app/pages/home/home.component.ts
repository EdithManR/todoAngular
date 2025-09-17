import { Component, signal } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ NgFor ]
})
export class HomeComponent {
  tasks = signal([
      'Tarea1',
      'Tarea2',
      'Tarea3',
      'Tarea4'
  ]);

  changeHandlerInput(event:Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    //para  agregar nuevo valor  al final de la lista
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: Number){
    //usamos filter para hacer un array sin el elemanto con el index enviado
    this.tasks.update((tasks)=>tasks.filter((task, position)=> position != index));
  }
}
