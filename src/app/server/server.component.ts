
import { Component } from '@angular/core';

 // @-decorator - used to enhance your class
 // We need to tell angular that this a angular class - component class

@Component({
  selector : 'app-server',
  template : ` <h3> This is Gauri's 1st component, now it is inline - 1st component</h3>
               <!--<div app-servers>in inline as selector</div>-->
              <!--<div class="app-servers">in inline as class</div>-->
              <app-servers>in inline as class</app-servers>
              <button class="btn btn-primary" (click) = "addServer()">Add Server</button>
               <h3 *ngFor="let server of serverArr"> Servers component over - this is 1st component</h3>
              <app-assignment2></app-assignment2>
          
             `,
  styles : [`
   h3 {
     color: deeppink;
   }
  `],
})



// export - we can export it other components or files
export class ServerComponent{
  serverArr = ['testserver1,testserver2'];
  serverName = 'testServer';

  addServer(){
    this.serverArr.push(this.serverName);
  }
}
