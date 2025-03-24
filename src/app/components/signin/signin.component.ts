import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers:[UserServiceService]
})
export class SigninComponent {
  user :User = new User("","","");
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router,private service: UserServiceService
  ){}

  
  signIn() {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.service.signIn(this.user).subscribe({
      next: (response) => {
        if (response) {
          this.successMessage = 'Conta criada com sucesso!';
          // Redireciona para a página de login após um breve atraso
          setTimeout(() => {
            this.router.navigate(["login"]);
          }, 1500);
        } else {
          this.errorMessage = 'Falha ao criar conta. Tente novamente.';
        }
      },
      error: (error) => {
        console.error('Erro ao registrar:', error);
        if (error.status === 409) {
          this.errorMessage = 'Este usuário já existe. Tente outro nome de usuário.';
        } else {
          this.errorMessage = 'Erro ao se conectar ao servidor. Tente novamente mais tarde.';
        }
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}


