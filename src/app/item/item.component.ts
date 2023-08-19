import { Component, Input, OnDestroy } from '@angular/core';
import { citi } from '../model/citi.model';
import { CitiService } from '../services/citi.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  //@Input() selectedItem: citi;
  selectedItem: citi;
  private subscription: Subscription;

  constructor(private cs: CitiService) {
    this.subscription = this.cs.selectedCiti$.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
