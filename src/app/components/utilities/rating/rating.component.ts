import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating:number = 5;
  @Input()
  rating = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  votado:boolean = false;

  maxRatingArr:number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  manejarMouseEnter(index:number): void{
    this.rating = index + 1;
  }

  manejarMouseLeave(): void{
    if(!this.votado){
      this.rating = 0;
    }
  }

  manejarMouseClick(index: number): void{
    this.rating = index + 1;
    this.votado = true;
    this.rated.emit(this.rating);
  }

}
