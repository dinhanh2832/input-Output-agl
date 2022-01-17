import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo-output',
  templateUrl: './demo-output.component.html',
  styleUrls: ['./demo-output.component.css']
})
export class DemoOutputComponent implements OnInit {
  @Output() voteSize = new EventEmitter();
  @Output() changeFontSize = new EventEmitter();
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  voted() {
    this.counter ++;
    let obj  = {
      counter: this.counter,
      name: "anhepzai"
    }
    this.voteSize.emit(obj);
  }

  upSize() {
    // @ts-ignore
    this.changeFontSize.emit(document.getElementById('xxx').value);
  }
}
