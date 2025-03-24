import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userId: number = 0;
  user: User | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    // Obter o ID da URL
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // O '+' converte para número
      this.loadUserData();
    });
  }

  loadUserData(): void{
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.getUserById(this.userId).subscribe({
      next: (userData) => {
        this.user = userData;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar dados do usuário:', error);
        this.errorMessage = 'Não foi possível carregar os dados do usuário.';
        this.isLoading = false;
      }
    });
  }


}
