import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingredientcard',
  templateUrl: './ingredientcard.component.html',
  styleUrls: ['./ingredientcard.component.css']
})
export class IngredientcardComponent implements OnInit {
  @Input() ingredient: String;

  @Output() onInteraction = new EventEmitter<string>();

  emitRemove(toRemoveIngredient) {
    this.onInteraction.emit(toRemoveIngredient);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
