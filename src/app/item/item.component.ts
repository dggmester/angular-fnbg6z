import { Component, Input } from '@angular/core';
import { citi } from '../model/citi.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() selectedItem: citi;
}
