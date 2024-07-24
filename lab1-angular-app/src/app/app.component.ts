import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'lab1-angular-app';
  id: any;
  name: any;
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/resource').subscribe(data => {
      console.log('Data received:', data); 
      this.id = data[0].id;
      this.name = data[0].name;
    })
  }
}
