import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://api.time.com/wp-content/uploads/2014/10/tom-hanks-big-movie-poster.jpg?w=600&quality=85';
  image3 = 'https://images-na.ssl-images-amazon.com/images/I/610hrhIQ6KL._AC_.jpg';

  constructor() { }

  ngOnInit() {
  }

}