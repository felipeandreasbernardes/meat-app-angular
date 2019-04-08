import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.services";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import { Order, OrderItem } from "./order.model";
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) { }

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

    checkOrder(order: Order): Observable<string> {
        const header = new Headers()
        header.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: header }))
            .map(response => response.json())
            .map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }

}
