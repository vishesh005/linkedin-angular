import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-icon',
  templateUrl: './bar-icon.component.html',
  styleUrls: ['./bar-icon.component.css']
})
export class BarIconComponent implements OnInit {


  @Input('iconData')
  public iconData: any | undefined

  constructor() {

  }

  ngOnInit(): void {
  }

}
