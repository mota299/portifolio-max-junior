import { Component } from '@angular/core';
import { MenuService } from '../services/menu';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {

  constructor(private menuService: MenuService) { }

}


