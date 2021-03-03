import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Valor';
  peliculasCines: { titulo: string; fecha: Date; precio: number; }[] | undefined;
  peliculasEstrenos:{titulo:string, fecha:Date, precio: number}[] | undefined;
  ngOnInit(): void{
    setTimeout(()=>{
      this.peliculasCines = [
        {
          titulo: 'SpiderMan',
          fecha: new Date(),
          precio: 1400.99
        },
        {
          titulo: 'Moana',
          fecha: new Date(2021,1,5),
          precio: 1200.99
        },
        {
          titulo: 'SpiderMan',
          fecha: new Date(),
          precio: 1400.99
        },
        {
          titulo: 'Moana',
          fecha: new Date(2021,1,5),
          precio: 1200.99
        },
      ];
      this.peliculasEstrenos = [
        {
          titulo: 'SpiderMan',
          fecha: new Date(),
          precio: 1400.99
        },
        {
          titulo: 'Moana',
          fecha: new Date(2021,1,5),
          precio: 1200.99
        },
      ];
    },3000)

    
  }

  manejarRated(voto:number): void{
    alert(voto);
  }

  changeTitle(event:any){
    this.title = event.target.value;
  }
  
  
  
  
}
