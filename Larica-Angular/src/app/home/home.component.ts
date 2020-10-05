import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'O que você deseja comer hoje';

  constructor() { }

  ngOnInit(): void {
  }

  setTitle (newTitle: string) {
    this.title = newTitle;
  }
}
