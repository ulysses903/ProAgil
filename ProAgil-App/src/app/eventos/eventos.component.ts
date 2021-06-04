import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any; //= [
  //   {
  //     EventoId: 1,
  //     Tema: 'Angular',
  //     Local: 'Belo Horizonte'
  //   },
  //   {
  //     EventoId: 2,
  //     Tema: 'TS',
  //     Local: 'Sampa'
  //   },
  //   {
  //     EventoId: 3,
  //     Tema: 'C#',
  //     Local: 'RJ'
  //   }
  // ]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(){
    this.eventos = this.http.get('http://localhost:5000/api/values').subscribe(
      response => {this.eventos = response;},
      error =>{console.log(error);}
    );
  }

}
