import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Adicione esta importação


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
