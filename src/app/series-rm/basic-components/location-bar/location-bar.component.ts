import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent implements OnInit {

  items: MenuItem[] = []

  @Input() section: string = ''
  @Input() detail: string = ''

  urlSection!: string

  ngOnInit(): void {

    this.section ? this.urlSection = this.section.toLowerCase() : ''

    if(!this.detail) {
      this.items = [
        {
          label: 'Home',
          routerLink: '/rm/characters'
        },
        {
          label: this.section,
          routerLink: `/rm/${this.urlSection}`
        }
      ]    
    } else {
      this.items = [
        {
          label: 'Home'
        },
        {
          label: this.section,
          routerLink: `/rm/${this.urlSection}`
        },
        {
          label: this.detail,
        }
      ]    
    }
  }

}
