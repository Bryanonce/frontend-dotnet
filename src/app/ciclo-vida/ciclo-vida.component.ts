import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../components/utilities/rating/rating.component';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss']
})
export class CicloVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  @ViewChild(RatingComponent)
  ratingComponent!: RatingComponent;

  @Input()
  titulo!:string;

  timer!: ReturnType<typeof setInterval>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Onhanges')
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }
  ngAfterViewInit(): void {
    console.log('AfterInit')
    this.ratingComponent.rating = 3;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('OnInit')
    this.timer = setInterval(()=>{
        console.log(new Date())
    },2000);
  }

}
