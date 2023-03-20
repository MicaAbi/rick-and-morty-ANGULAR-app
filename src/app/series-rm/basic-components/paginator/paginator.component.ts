import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() totalCards: number = 0

  paginate(event: any) {
    console.log(this.totalCards);
    
    console.log(event);
  }

}
