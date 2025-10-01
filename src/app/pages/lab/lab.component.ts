import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent {
  welcome = 'Bienvenido';
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];
  tasks = signal([
    'Tarea1',
    'Tarea2',
    'Tarea3',
    'Tarea4'
  ]);
  name = signal('Edith');
  age = 41;
  url = 'https://files.merca20.com/uploads/2020/07/NYCGifathon12.gif';

  person = signal({
    name: 'Erick',
    age: 87,
    avatar: 'https://imgproxy.domestika.org/unsafe/w:820/plain/src://content-items/003/452/287/Knock_Knock-original.gif?1575047764',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable:true,
  });
  nameCtrl = new FormControl('Lucia',{
    nonNullable:true,
    validators:[
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value =>{
      console.log(value);
    })
  }

  clickHandler(){
    alert('Click')
  }
  changeHandler(event:Event){
    console.log(event);
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  changeHandlerInput(event:Event){
    //para leer el valor del input
    const input = event.target as HTMLInputElement;
    const newValue =input.value;
    //para modificar el valor
    this.name.set(newValue);
    console.log(this.name());
  }
  changeAge(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        age:parseInt(newValue, 10)
      }
    })
  }
  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        name:newValue
      }
    })
  }
}
