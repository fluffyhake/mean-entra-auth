import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private http: HttpClient){

  }
  logIn(){
    try {
      this.http.get('http://localhost:3000/auth/login').subscribe((response: any)=>{
        console.log(response)
      })
    } catch (error) {
      console.log(error)
    }
  }
  logOut(){
    try {
      this.http.get('http://localhost:3000/auth/logout').subscribe((response)=>{
        console.log(response)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
