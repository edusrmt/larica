import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientslist',
  templateUrl: './ingredientslist.component.html',
  styleUrls: ['./ingredientslist.component.css']
})
export class IngredientslistComponent implements OnInit {
  myIngredients: Array<String> = [];


  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(value: String){
    if(value.trim().length > 0){
      this.myIngredients.push(value);
    }
  }
  removeIngredient = (name) =>{
    this.myIngredients = this.myIngredients.filter(ingredient => ingredient !== name);
  }
}

