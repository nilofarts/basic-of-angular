import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  id: number=10;
  name:string="nilofar";
  disableButton: boolean=false;
inputBox="name";

  constructor() { }

  ngOnInit() {
  }
  serverMethod(){
    return this.id;
  }
  clickMe(){
    this.disableButton=true;
  
  }
}
