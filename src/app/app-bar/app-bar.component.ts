import { Component, OnInit } from '@angular/core';
import BarIcons from "../../assets/bar-icons.json";

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  public icons = BarIcons

  constructor() { }

  ngOnInit(): void {

  }

}
