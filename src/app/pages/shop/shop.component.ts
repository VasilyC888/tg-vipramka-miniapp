import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductsService} from "../../services/products.service";
import {ProductsListComponent} from "../../components/products-list/products-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
  }

}
