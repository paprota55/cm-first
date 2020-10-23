
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coraggio men';
  siteName = 'https://www.coraggiomen.pl';
  h1 = 'Sklep internetowy w trakcie realizacji.';
  h2 = 'Nasze produkty';
  h3 = 'Zapraszamy do kontaktu mailowego:';
  mail = 'biuro@coraggiomen.pl';
  imageObject: Array<object> = [{
    image: 'assets/calosc.jpg',
    thumbImage: 'assets/calosc.jpg',
    alt: 'Image alt',
    title: ''
  }, {
    image: 'assets/koszule.jpg',
    thumbImage: 'assets/koszule.jpg',
    title: '',
    alt: 'Image alt'
  }, {
    image: 'assets/buty1.jpg',
    thumbImage: 'assets/buty1.jpg',
    title: '',
    alt: 'Image alt'
  }, {
    image: 'assets/buty2.jpg',
    thumbImage: 'assets/buty2.jpg',
    title: '',
    alt: 'Image alt'
  }, {
    image: 'assets/buty3.jpg',
    thumbImage: 'assets/buty3.jpg',
    title: '',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
