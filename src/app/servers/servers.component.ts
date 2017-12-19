import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles:[`
    .online
    {
       color : white;
    },
  `],
})
export class ServersComponent implements OnInit {
  enableButton = false;
  changedText = 'This is some text for button click Demo';
  textStatus = 'offline';

  constructor() {
    setTimeout(() => {
      this.enableButton = true;
    }, 4000);

    this.textStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  componentnumber = 2;
  componentname= 'SecondServer';
  componenttype = 'Component';
  inputData = 'demotext';
  textFlag = false;

  getComponentType()
  {
    //return this.componenttype = 'FunctionComponent type';

    return this.componenttype;
  }

  ngOnInit() {
  }

   onChangeTextButtonclick(){
    this.textFlag = true;
    this.changedText = 'Button clicked, text changed. On button clicked name is : ' + this.inputData;
  }

  onkeypress(abc: Event)
  {

    this.inputData = (<HTMLInputElement>abc.target).value;
  }

  getColor(){
     return this.textStatus === 'online' ? 'green' : 'red';
  }

}
