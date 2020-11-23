import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientcardComponent } from './ingredientcard.component';

describe('IngredientcardComponent', () => {
  let component: IngredientcardComponent;
  let fixture: ComponentFixture<IngredientcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
