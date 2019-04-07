import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  restaurant: Restaurant

  ngOnInit() {
    this.restaurantsService.restaurantById(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
