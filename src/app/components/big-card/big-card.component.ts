import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css']
})
export class BigCardComponent implements OnInit {

  titulos: string[] = ['Dev. Web', 'Gamer', 'Entusiasta']; // Adicione aqui os textos desejados
  textoAtual: string = '';
  intervalo: any;
  dark:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.atualizarTitulo()
  }

darkMode(){
  this.dark = !this.dark
}

  atualizarTitulo() {
    let index = 0;
    this.intervalo = setInterval(() => {
      this.textoAtual = this.titulos[index];
      index = (index + 1) % this.titulos.length;
    }, 1000);


}}
