import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { title } from 'process';

interface Recipe {
  title: string;
  ingredients: string;
  thumbnail: string;
}

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.css']
})

export class RecipecardComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() setTitle;

  title;
  ingredients;
  thumbnail;

  constructor() { }

  ngOnInit(): void {
    const { title, ingredients, thumbnail } = this.recipe;

    this.title = title;
    this.ingredients = ingredients;
    this.thumbnail = thumbnail;
  }

}
