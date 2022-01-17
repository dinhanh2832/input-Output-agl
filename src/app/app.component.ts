import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vote: number = 0;
  // dmoxx: String = "cc";
  title = 'angular-progress-bar';
  ngOnInit() {
  }
  // @ts-ignore
  voteCount(value) {
    // this.vote = value;
    console.log(value)
  }

  fontSize = 10;

  // @ts-ignore
  change(val) {
    this.fontSize = val
    console.log(this.fontSize)
  }

}
