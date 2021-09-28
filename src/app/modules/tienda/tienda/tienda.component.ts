import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
// 

  constructor(private http: HttpClient) { 
  }
  
  ngOnInit(): void {
    this.http.get('http://localhost:3000/')
    .subscribe((tienda) => {
      console.log('tienda', tienda)
      
      
    })
  }

}
