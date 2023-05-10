import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent {
  public counter: number = 10;

  public incrementar(value: number): void{
    this.counter+=value;
  }

  reset=() => this.counter = 10;
}
