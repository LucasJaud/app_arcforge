import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private router: Router){}
  user :User = new User("","","");

  signIn(){
    console.log(this.user);

    this.router.navigate(["login"]).then(() => window.location.reload());
  }

}
