import { Component } from '@angular/core';
import {User} from "../../models/user";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[UserServiceService]
})
export class LoginComponent {
  user: User = new User("", "", "");
  errorMessage: string = '';
  isLoading: boolean = false;


  constructor(private router: Router, private userService: UserServiceService){ }

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.login(this.user).subscribe({
      next: (response) => {
        if (response) {
          // Atualiza o user com os dados retornados, incluindo o ID
          this.user = response;
          
          // Navega para a página do usuário
          this.router.navigate([`userpage/${this.user.id}`]);
        } else {
          this.errorMessage = 'Login falhou. Usuário ou senha inválidos.';
        }
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
        this.errorMessage = 'Erro ao se conectar ao servidor. Tente novamente mais tarde.';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}

