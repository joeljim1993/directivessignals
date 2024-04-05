import { ChangeDetectionStrategy, Component, signal, type OnInit, computed } from '@angular/core';

@Component({
  templateUrl: './counterPage.page.html',
  styleUrls: ['./counterPage.page.css'],

})
export class CounterPagePage implements OnInit {

  public counter = signal(10);

  public squareCounter = computed( ()=> this.counter() * this.counter())
  ngOnInit(): void { }

  increaseBy(value:number){

    // this.counter.set( this.counter() + value);
    this.counter.update(current=> current + value )
  }

}
