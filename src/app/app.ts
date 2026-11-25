import { CommonModule } from '@angular/common';
import { Component,  HostListener,  signal } from '@angular/core';
@Component({
  imports: [
    CommonModule,
  ],
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
      lightImgIcon:"lipstick-svgrepo-com-light.svg",
      title: "Rose Perfume",
      type: "Cosmetics",
      minDescription: "A delicate floral fragrance",
      Description:`A delicate floral scent blending fresh roses with balanced feminine notes for a refreshing aura.
        Ideal for daytime wear or calm evenings, offering classic elegance with a gentle modern touch.`,
    },

    {
      id:2,
      img:"img-2-3.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      lightImgIcon:"lipstick-svgrepo-com-light.svg",
      title:"Luxury Skincare",
      minDescription:"Everyday skincare essentials",
      Description:`A daily skincare collection crafted to deliver deep hydration and essential skin nourishment.
        Formulated for morning and evening routines, leaving your complexion noticeably smoother and radiant.`,
      type:"Cosmetics"
    }
    ,
    {
      id:3,
      img:"img-3-4.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      lightImgIcon:"lipstick-svgrepo-com-light.svg",
      title:"Velvet Lipstick",
      minDescription:"Rich color and smooth finish",
      Description:`A richly pigmented lipstick with a velvety texture that glides on for a smooth matte-satin finish.
        Easy to layer or blend without drying out the lips, making it a staple for day or night.`,
      type:"Cosmetics",
    }
    ,
    {
      id:4,
      img:"img-4-3.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      lightImgIcon:"lipstick-svgrepo-com-light.svg",
      title:"Blush Collection",
      minDescription:"A natural touch of color",
      Description:`
        A versatile blush range that adds a natural, healthy flush of color and instant warmth to the cheeks.
        Its blendable formula lets you effortlessly build from a soft daytime tint to a luminous evening glow.
      `,
      type:"Cosmetics"
    },

    {
      id:5,
      img:"img-5-1.jpg",
      imgIcon:"lipstick-svgrepo-com.svg",
      lightImgIcon:"lipstick-svgrepo-com-light.svg",
      title:"Beauty Foundation",
      minDescription:"A flawless makeup base",
      Description:`
        A smoothing foundation designed to even out skin tone and create a breathable, natural-looking base.
        Provides balanced, buildable coverage that minimizes minor imperfections and lasts comfortably all day.
      `,
      type:"Cosmetics"
    }
  ]

  Makeup:Array<any>=[
    {
      id:6,
      img:"img-6-2.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      lightImgIcon:"makeup-brush-1-svgrepo-com-light.svg",
      title:"Makeup Brushes",
      minDescription:"Tools for a perfect look",
      Description:`
        A curated set of brushes engineered for precision, control, and smooth, streak-free blending.
        Covers every step from base application to fine detailing for a polished, professional finish.
      `,
      type:"Makeup"
    }
    ,
    {
      id:7,
      img:"img-7-3.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      lightImgIcon:"makeup-brush-1-svgrepo-com-light.svg",
      title:"Nude Eyeshadow",
      minDescription:"Soft shades for every occasion",
      Description:`
        An eyeshadow palette featuring soft, wearable neutral shades that flatter every skin tone.
        Silky, blendable pigments transition effortlessly from a subtle daytime wash to a deeper evening look.
      `,
      type:"Makeup"
    },

    {
      id:8,
      img:"img-8.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      lightImgIcon:"makeup-brush-1-svgrepo-com-light.svg",
      title:"Glam Makeup",
      minDescription:"A sophisticated beauty look",
      Description:`
        skin, and lips.
        Designed to deliver a luminous, camera-ready finish that lets you stand out with confidence.
      `,
      type:"Makeup"
    },

    {
      id:9,
      img:"img-9-1.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      lightImgIcon:"makeup-brush-1-svgrepo-com-light.svg",
      title:"Pink Lip Gloss",
      minDescription:"A glossy finishing touch",
      Description:`
        A luminous pink gloss that adds a hydrating, high-shine finish with a lightweight, non-sticky feel.
        Wear it alone for a fresh tint or layer over lipstick to create fuller, smoother-looking lips.
      `,
      type:"Makeup"

    },

    {
      id:10,
      img:"img-10-2.jpg",
      imgIcon:"makeup-brush-1-svgrepo-com.svg",
      lightImgIcon:"makeup-brush-1-svgrepo-com-light.svg",
      title:"Mascara Look",
      minDescription:"Defined and elegant lashes",
      Description:`
        A lash-focused style that defines, lengthens, and lifts for an open, expressive gaze.
        Brings instant polish to minimal daytime makeup or serves as the finishing touch to bold shadows.
      `,
      type:"Makeup"
    }
  ]

  Fashion:Array<any>=[
    {
      id:11,
      img:"img-11.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      lightImgIcon:"hanger-svgrepo-com-light.svg",
      title:"Burgundy Dress",
      minDescription:"Timeless evening elegance",
      Description:`
        A rich burgundy evening dress that embodies timeless sophistication with a deep, flattering hue.
        Tailored for formal dinners and special celebrations, delivering effortless elegance with minimal styling.
      `,
      type:"Fashion"
    }
    ,
    {
      id:12,
      img:"img-12.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      lightImgIcon:"hanger-svgrepo-com-light.svg",
      title:"Casual Chic",
      minDescription:"Effortless everyday style",
      Description:`
        An everyday style that pairs relaxed comfort with clean, intentional tailoring for a put-together look.
        Built around versatile pieces that balance ease of movement with modern, understated polish.
      `,
      type:"Fashion"
    }
    ,
    {
      id:13,
      img:"img-13-1.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      lightImgIcon:"hanger-svgrepo-com-light.svg",
      title:"Elegant Handbag",
      minDescription:"A statement fashion accessory",
      Description:`
        A refined statement handbag combining structured aesthetic appeal with practical space for daily essentials.
        Pairs seamlessly across casual and formal outfits to bring instant cohesion and sophistication.
      `,
      type:"Fashion"
    }
    ,
    {
      id:14,
      img:"img-14.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      lightImgIcon:"hanger-svgrepo-com-light.svg",
      title:"Modern Outfit",
      minDescription:"Contemporary fashion inspiration",
      Description:`
        A contemporary ensemble inspired by clean silhouettes, balanced proportions, and current fashion trends.
        Offers a fresh, wearable aesthetic ideal for updating your everyday wardrobe with expressive style.
      `,
      type:"Fashion"
    }
    ,
    {
      id:15,
      img:"img-15.jpg",
      imgIcon:"hanger-svgrepo-com.svg",
      lightImgIcon:"hanger-svgrepo-com-light.svg",
      title:"Pearl Accessories",
      minDescription:"Delicate details that shine",
      Description:`
        Delicate pearl pieces that bring soft luminosity and classic charm to both daytime and evening outfits.
        Their subtle sheen bridges traditional elegance with minimalist styling without overpowering your look.
      `,
      type:"Fashion"
    }
  ]

  allProducts:Array<any>=[...this.Cosmetics,...this.Makeup,...this.Fashion]
  selectedProduct!:any;
  productArray:Array<any>=[];
  popupEle!:HTMLElement;
  isActive:boolean=false;
  popupImg!:any;
  currentIndex!:number;
  isSelected:string="Home";

  isScrolled:boolean=false;
  @HostListener('window:scroll')
  scroll(){
    this.isScrolled=window.scrollY>15
    return this.isScrolled;
  }

  updateActiveForNav(ele:string){
    this.isSelected=ele;
  }

  getProductByCategory(category:string){
   return this.allProducts.filter(product=> product.type===category)
  }

  openPopup(popupEle:HTMLElement,productArray:Array<any>,product:any){
    this.isActive=!this.isActive;
    this.popupEle=popupEle;
    this.selectedProduct=product;
    this.productArray=productArray;
    this.currentIndex=this.productArray.findIndex(item=>item.id==this.selectedProduct.id);
    this.popupEle.classList.add('active');
    setTimeout(()=> this.popupEle.classList.add('show'),10);
  }



  nextProduct(){
    this.currentIndex=++this.currentIndex % this.productArray.length;
    this.selectedProduct=this.productArray[this.currentIndex];
  }

  prevProduct(){
    this.currentIndex=(--this.currentIndex + this.productArray.length) % this.allProducts.length;
    this.selectedProduct=this.allProducts[this.currentIndex];
  }

  changeProduct(index:number){
    this.currentIndex=index;
    this.selectedProduct=this.productArray[this.currentIndex];
  }

  closePopup(){
    this.popupEle?.classList.remove('show');
    setTimeout(()=> this.popupEle?.classList.remove('active'),500)
  }

  stop($event:Event){
    $event.stopPropagation();
  }
}

