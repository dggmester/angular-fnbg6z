import { Component, OnInit } from '@angular/core';
import { citi } from '../model/citi.model';
import { CitiService } from '../services/citi.services';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  items: citi[] = [];
  items_filtred: citi[] = [];
  regions: string[] = [];
  selectedItemName: string | null = null;
  selectedItem: citi;
  test() {
    //<!-- <button (click)="test()">TEST</button> -->
    console.log(this.items);
    console.log(this.items_filtred);
    console.log(this.regions);
    console.log(this.selectedItemName);
    console.log(this.selectedItem);
  }
  selectItem(item: citi) {
    this.selectedItemName = item.name;
    this.selectedItem = item;
    this.cs.setCitiValue(item);
  }
  filterItems(selectedRegion: string) {
    this.items_filtred = this.items.filter((item) => {
      return selectedRegion == '' ? true : item.region == selectedRegion;
    });
  }

  sortItems(selectedSort: string) {
    switch (selectedSort) {
      case 'name':
        this.items_filtred = this.items.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case 'population':
        this.items_filtred = this.items.sort(
          (a, b) => a.population - b.population
        );
        break;
      case 'region':
        this.items_filtred = this.items.sort((a, b) =>
          a.region.localeCompare(b.region)
        );
        break;
      default:
        break;
    }
  }

  constructor(private cs: CitiService) {}

  ngOnInit(): void {
    this.cs.GetCitiList().subscribe((clist) => {
      this.items = clist;
      this.items_filtred = clist;
      // Itt dolgozd fel a clist adatokat
      this.items.forEach((item) => {
        if (!this.regions.includes(item.region)) {
          this.regions.push(item.region);
        }
      });
    });
  }
}
