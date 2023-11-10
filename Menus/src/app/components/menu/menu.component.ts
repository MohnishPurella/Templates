import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
    this.loadMenuItems();
  }
  items: MenuItem[] | undefined;

  loadMenuItems(){
    this.items = [
      {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        items: [
          {
            label: 'Option 1',
          },
          {
            label: 'Option 2',
          }
        ]
      }
  ];
  }
}
