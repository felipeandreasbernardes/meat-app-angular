import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.services";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService) { }

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

}
