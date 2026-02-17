import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,          // ключевой момент — standalone компонент
  imports: [CommonModule, ProductListComponent],  // подключаем все необходимые standalone компоненты
  template: `
    <h1>Online Store</h1>
    <app-product-list></app-product-list>
  `,
})
export class AppComponent {}
