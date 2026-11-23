import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');

  Cosmetics:Array<any>=[
    {
      id:1,
      img:"img-1-3.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      title: "Rose Perfume",
      type: "Cosmetics",
      Description: "A delicate floral fragrance",
    },

    {
      id:2,
      img:"img-2-3.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      title:"Luxury Skincare",
      Description:"Everyday skincare essentials",
      type:"Cosmetics"
    }
    ,
    {
      id:3,
      img:"img-3-4.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      title:"Velvet Lipstick",
      Description:"Rich color and smooth finish",
      type:"Cosmetics",
    }
    ,
    {
      id:4,
      img:"img-4-2.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      title:"Blush Collection",
      Description:"A natural touch of color",
      type:"Cosmetics"
    },

    {
      id:5,
      img:"img-5-1.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      title:"Beauty Foundation",
      Description:"A flawless makeup base",
      type:"Cosmetics"
    }
  ]

  Makeup:Array<any>=[
    {
      id:6,
      img:"img-6-2.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      title:"Makeup Brushes",
      Description:"Tools for a perfect look",
      type:"Makeup"
    }
    ,
    {
      id:7,
      img:"img-7-3.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      title:"Nude Eyeshadow",
      Description:"Soft shades for every occasion",
      type:"Makeup"
    },

    {
      id:8,
      img:"img-8.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      title:"Glam Makeup",
      Description:"A sophisticated beauty look",
      type:"Makeup"
    },

    {
      id:9,
      img:"img-9-1.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      title:"Pink Lip Gloss",
      Description:"A glossy finishing touch",
      type:"Makeup"

    },

    {
      id:10,
      img:"img-10-2.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      title:"Mascara Look",
      Description:"Defined and elegant lashes",
      type:"Makeup"
    }
  ]

  Fashion:Array<any>=[
    {
      id:11,
      img:"img-11.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      title:"Burgundy Dress",
      Description:"Timeless evening elegance",
      type:"Fashion"
    }
    ,
    {
      id:12,
      img:"img-12.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      title:"Casual Chic",
      Description:"Effortless everyday style",
      type:"Fashion"
    }
    ,
    {
      id:13,
      img:"img-13-1jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      title:"Elegant Handbag",
      Description:"A statement fashion accessory",
      type:"Fashion"
    }
    ,
    {
      id:14,
      img:"img-14.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      title:"Modern Outfit",
      Description:"Contemporary fashion inspiration",
      type:"Fashion"
    }
    ,
    {
      id:15,
      img:"img-15.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      title:"Pearl Accessories",
      Description:"Delicate details that shine",
      type:"Fashion"
    }
  ]

  all:Array<any>=[...this.Cosmetics,...this.Makeup,...this.Fashion]
  
}
