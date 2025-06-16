import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [
    CommonModule,      // IMPORTANTE para usar *ngFor, *ngIf, etc.
    HttpClientModule   // para usar HttpClient
  ],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  eventos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/eventos').subscribe(data => {
      this.eventos = data;
    });
  }
}
