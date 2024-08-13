import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
  }

  addToCart(p_id: number) {
    this.cartService.add(p_id)
  }

  getAllProduct(){
    return this.productService.getAllProduct()
  }
}
