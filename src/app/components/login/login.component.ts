import { Component } from '@angular/core';
import {User} from "../../models/user";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User("", "", "");

  constructor(private router: Router){ }

  login(){

    console.log(this.user)

    this.router.navigate([`userpage/${this.user.id}`]).then(() => {
      window.location.reload();
    });
  }

}
