import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }


  public goToMenu(){
    this.router.navigate(['']);
  }
  public goToIngredientsPage (){
    this.router.navigate(['/','ingredients']);
  }

}
