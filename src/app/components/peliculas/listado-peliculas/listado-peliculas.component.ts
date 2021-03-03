import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  
  @Input()
  peliculas: { titulo: string; fecha: Date; precio: number; }[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  remover(index:number): void{
    this.peliculas?.splice(index,1);
  }
}
