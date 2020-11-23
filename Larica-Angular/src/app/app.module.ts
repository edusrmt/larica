import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { RecipeslistComponent } from './recipeslist/recipeslist.component';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientcardComponent } from './ingredientcard/ingredientcard.component';
import { IngredientslistComponent } from './ingredientslist/ingredientslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodycontentComponent,
    RecipeslistComponent,
    RecipecardComponent,
    IngredientsComponent,
    IngredientcardComponent,
    IngredientslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
