import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {

  icon:string = 'https://i.pinimg.com/564x/e6/f3/20/e6f3204bd34862cd764314637857e193.jpg'
  title:string = 'Blog'
  description:string = 'Componentização, construção, estilização, organização.'
  project:string = 'https://my-space-brown.vercel.app/'
  

  constructor() { }

  ngOnInit(): void {
  }

}
