import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  Products:Product[] =[{
    productName: "vanila cakes",
    price: 100,
    stockCount: 2,
    discription:"A delicious vanila cake with rich and creamy frosting",
    imgUrl:"https://livforcake.com/wp-content/uploads/2017/06/vanilla-cake-4.jpg"
  },

  {
    productName: "Chocolate cake",
    price: 100,
    stockCount: 2,
    discription:"A delicious vanila cake with rich and creamy frosting",
    imgUrl:"https://howtoiceacake.com/wp-content/uploads/2023/04/chocolate-cake-design.jpg"
  },
  {
   productName: "Strowbarry cake",
    price: 100,
    stockCount: 2,
    discription:"A delicious vanila cake with rich and creamy frosting",
    imgUrl:"https://www.mybakingaddiction.com/wp-content/uploads/2023/06/decorated-chocolate-strawberry-cake.jpg"
  }
  
  ];

  ProductOutPutEvent(product:Product){
    console.log('Clicked'+ product.productName);
  }
}
