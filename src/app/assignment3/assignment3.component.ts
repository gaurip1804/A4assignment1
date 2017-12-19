import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
  .displaypara{
    visibility : hidden;
   }
    .vip{
      color:white;
    }
  `]
})
export class Assignment3Component implements OnInit {

  displayparagh = 'hidden';
  i = 0;
  logArr = [];
  bgcolour = 'white'; colourflag = 'white';

  getPara(){
    this.i++;
    this.logArr.push(this.i);
    this.colourflag = this.i > 5 ? 'blue' : 'white';
    return this.displayparagh = this.i % 2 === 0 ? 'hidden' : 'visible';
  }

  // setColour()
  // {
  //   return this.bgcolour = this.i > 5 ? 'blue' : 'white';
  // }

  constructor() { }

  ngOnInit() {
  }

}
