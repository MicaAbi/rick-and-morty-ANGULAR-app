import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent implements OnInit {

  items: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {label: 'Characters'},
      {label: 'Detalle'}
    ]    
  }
}
