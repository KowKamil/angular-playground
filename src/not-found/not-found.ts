import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../components/button/button.component";
import { Router } from "@angular/router";


@Component({
  selector: 'not-found',
  imports: [ButtonComponent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.less',
})
export class NotFoundPage {
  private router = inject(Router);

  public goHome(){
    this.router.navigate(['']);
  }
}