import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['home.component.scss']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void { }

  imgCollection: Array<object> = [
    {
      image: 'https://m.media-amazon.com/images/I/51AjWCr0TaL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/51AjWCr0TaL._AC_SY200_.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://m.media-amazon.com/images/I/71+LFTYpxEL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/71+LFTYpxEL._AC_SY200_.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://m.media-amazon.com/images/I/41gHUTutQ2L._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/41gHUTutQ2L._AC_SY200_.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://m.media-amazon.com/images/I/61mQzH1c9eL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/61mQzH1c9eL._AC_SY200_.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://m.media-amazon.com/images/I/51SV-xsjeNL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/51SV-xsjeNL._AC_SY200_.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://m.media-amazon.com/images/I/7131Q5GCjDL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/7131Q5GCjDL._AC_SY200_.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }, {
      image: 'https://m.media-amazon.com/images/I/71yy3vIVptL._AC_SY200_.jpg',
      thumbImage: 'https://m.media-amazon.com/images/I/71yy3vIVptL._AC_SY200_.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }
  ];
}
