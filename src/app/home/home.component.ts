import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Images = [{ id: "1", src: '/slider2.jpg' }, { id: "3", src: '/slider1.jpg' }, { id: "2", src: '/slider3.jpg' }];

  SlideOptions = {
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
    loop: true,
    autoplay: true
  };


  //sponsors = ['../assets/images/logo1.png', '../assets/images/logo2.png', '../assets/images/logo3.png', '../assets/images/logo4.png', '../assets/images/logo5.png'];
  sponsors = [{ id: "1", src: '/spon1.png' }, { id: "2", src: '/spon2.png' }, { id: "3", src: '/spon3.png' }, { id: "4", src: '/spon4.png' }, { id: "5", src: '/spon5.png' }];
  CarouselOptions = {
    items: 2,
    dots: false,
    nav: false,
    autoplay: true,
    loop: true,
    responsive: {
      320: {
        items: 1
      },
      767: {
        items: 3
      },
      991: {
        items: 4
      },
      1024: {
        items: 5
      }
    }
  };

}
