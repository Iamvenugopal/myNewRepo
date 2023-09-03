import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  // @Output() obj1 = new EventEmitter();
  // @Output() obj2 = new EventEmitter();
  // @Output() obj3 = new EventEmitter();

  constructor(private store:Store<{counter:{counter:number}}>){}

  onIncrement(){
    // this.obj1.emit();
       this.store.dispatch(increment());
  }

  onDecrement(){
   // this.obj2.emit();
   this.store.dispatch(decrement());

  }

  onReset(){
   // this.obj3.emit();
   this.store.dispatch(reset());

  }

}
