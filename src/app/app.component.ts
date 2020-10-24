
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
  h2 = 'Obecny katalog';
  h3 = 'Zapraszamy do kontaktu mailowego:';
  mail = 'biuro@coraggiomen.pl';
  imageObject: Array<object> = [{
    image: 'assets/katalog-02.png',
    thumbImage: 'assets/katalog-02.png',
    alt: 'start',
    title: ''
  }, {
    image: 'assets/katalog-03.png',
    thumbImage: 'assets/katalog-03.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-04.png',
    thumbImage: 'assets/katalog-04.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-05.png',
    thumbImage: 'assets/katalog-05.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-06.png',
    thumbImage: 'assets/katalog-06.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-06.png',
    thumbImage: 'assets/katalog-06.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-07.png',
    thumbImage: 'assets/katalog-07.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-08.png',
    thumbImage: 'assets/katalog-08.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-09.png',
    thumbImage: 'assets/katalog-09.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-10.png',
    thumbImage: 'assets/katalog-10.png',
    title: '',
    alt: 'obuwie'
  }, {
    image: 'assets/katalog-11.png',
    thumbImage: 'assets/katalog-11.png',
    title: '',
    alt: 'obuwie premium'
  }, {
    image: 'assets/katalog-12.png',
    thumbImage: 'assets/katalog-12.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-13.png',
    thumbImage: 'assets/katalog-06.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-13.png',
    thumbImage: 'assets/katalog-06.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-14.png',
    thumbImage: 'assets/katalog-14.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-15.png',
    thumbImage: 'assets/katalog-15.png',
    title: '',
    alt: 'paski'
  }, {
    image: 'assets/katalog-16.png',
    thumbImage: 'assets/katalog-16.png',
    title: '',
    alt: 'spodnie'
  }, {
    image: 'assets/katalog-17.png',
    thumbImage: 'assets/katalog-17.png',
    title: '',
    alt: 'koszule'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
