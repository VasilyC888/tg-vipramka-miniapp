import {Component, Input} from '@angular/core';
import {IProduct} from "../../services/products.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}
