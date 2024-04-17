import { Injectable } from '@angular/core';
import { TourPackage } from '../model/tour-package';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class TourPackagesService {
  private tours : TourPackage[] =  [
    {
      "regionId": "1",
      "packageId": "1",
      "packageName": "Mystical Himalayan Retreat",
      "countryName": "India",
      "costPerPerson": 1500,
      "adventureType": "Hill Stations",
      "description": "Experience the serene beauty and tranquility of the Himalayas in this mystical retreat.",
      "imageUrl": "https://wallpapercave.com/wp/wp150780.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2019/03/07/04/52/himalaya-4039495_1280.jpg"
    },
    {
      "regionId": "2",
      "packageId": "2",
      "packageName": "Amazon Rainforest Expedition",
      "countryName": "Brazil",
      "costPerPerson": 2000,
      "adventureType": "Wonders",
      "description": "Embark on an unforgettable journey deep into the heart of the Amazon Rainforest, where adventure awaits at every turn.",
      "imageUrl": "https://wallpapercave.com/wp/wp2924127.jpg",
      "imageUrl2": "https://www.jetsetter.com/uploads/sites/7/2018/04/PwVhxGVG.jpeg",
    },
    {
      "regionId": "3",
      "packageId":"3",
      "packageName": "Ancient Wonders of Egypt",
      "countryName": "Egypt",
      "costPerPerson": 1800,
      "adventureType": "Historical",
      "description": "Explore the enigmatic pyramids and temples of ancient Egypt, a land steeped in history and mystery.",
      "imageUrl": "https://wallpaperaccess.com/full/1128770.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2019/06/26/12/25/tomb-4300251_1280.jpg"
    },
    {
      "regionId": "4",
      "packageId": "4",
      "packageName": "Alpine Adventure in Switzerland",
      "countryName": "Switzerland",
      "costPerPerson": 2500,
      "adventureType": "Hill Stations",
      "description": "Indulge in the breathtaking beauty of the Swiss Alps with thrilling adventures amidst picturesque landscapes.",
      "imageUrl": "https://wallpaperaccess.com/full/938058.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2020/06/24/20/41/truebsee-5337646_1280.jpg"
    },
    {
      "regionId": "2",
      "packageId":"5",
      "packageName": "Grand Canyon Expedition",
      "countryName": "United States",
      "costPerPerson": 1800,
      "adventureType": "Desert Safari",
      "description": "Discover the awe-inspiring beauty of the Grand Canyon on an unforgettable expedition through one of the world's most iconic natural wonders.",
      "imageUrl": "https://www.wallpaperflare.com/static/365/176/931/colorado-river-explored-grand-canyon-photo-wallpaper.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2014/05/21/14/20/colorado-river-349620_1280.jpg"
    },
    {
      "regionId": "3",
      "packageId": "6",
      "packageName": "Dubai Desert Safari",
      "countryName": "UAE",
      "costPerPerson": 1200,
      "adventureType": "Desert Safari",
      "description": "Embark on a thrilling desert safari in Dubai, where you'll experience the excitement of dune bashing, camel riding, and traditional entertainment.",
      "imageUrl": "https://th.bing.com/th/id/R.b47c7e356153c9eac9a81792e070a272?rik=VMCPvF9arYuPUA&riu=http%3a%2f%2fabasafari.com%2fwp-content%2fuploads%2f2019%2f08%2fWhatsApp-Image-2019-08-27-at-6.55.20-PM.jpeg&ehk=R9CZ%2b2BJKljEH8Y37UPtXQDMImO2LsnZdI%2b1kts7Fsg%3d&risl=&pid=ImgRaw&r=0",
    "imageUrl2": "https://cdn.pixabay.com/photo/2022/08/14/14/21/desert-7386004_1280.jpg"
    },
    {
      "regionId": "4",
      "packageId": "7",
      "packageName": "Magical Venice Experience",
      "countryName": "Italy",
      "costPerPerson": 2200,
      "adventureType": "Historical",
      "description": "Immerse yourself in the romance and history of Venice as you explore its charming canals, magnificent palaces, and iconic landmarks.",
      "imageUrl": "https://th.bing.com/th/id/R.05f4a203e60c3c93919b8137a598e455?rik=43WHNUWQmxVJSQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Venice-Italy-Wallpapers.jpeg&ehk=zQhjlKWxHHyfe7fP0uxCVvue0wsIeXjF9%2bku33uy%2btw%3d&risl=&pid=ImgRaw&r=0",
    "imageUrl2": "https://cdn.pixabay.com/photo/2021/07/24/15/47/venice-6489813_1280.jpg"
    },
    {
      "regionId":"1",
      "packageId": "8",
      "packageName": "Great Wall Trekking Adventure",
      "countryName": "China",
      "costPerPerson": 1900,
      "adventureType": "Wonders",
      "description": "Embark on a once-in-a-lifetime trekking adventure along the ancient Great Wall of China, one of the world's most iconic wonders.",
      "imageUrl": "https://skylineevents.co.uk/wp-content/uploads/2018/01/DSC_2433.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2018/09/10/22/07/great-wall-3668163_1280.jpg"
    },
    {
      "regionId": "1",
      "packageId": "9",
      "packageName": "Rajasthan Desert Safari",
      "countryName": "India",
      "costPerPerson": 1300,
      "adventureType": "Desert Safari",
      "description": "Experience the magic of Rajasthan with an exhilarating desert safari, where you'll journey across vast sand dunes and encounter the vibrant culture of this legendary land.",
      "imageUrl": "https://www.visittnt.com/blog/wp-content/uploads/2018/02/camel-safari-jaisalmer.jpg",
      "imageUrl2": "https://cdn.pixabay.com/photo/2018/04/22/18/19/caravan-3341872_1280.jpg"
    },
    {
      "regionId": "4",
      "packageId": "10",
      "packageName": "Parisian Romance",
      "countryName": "France",
      "costPerPerson": 2400,
      "adventureType": "Historical",
      "description": "Fall in love with the enchanting city of Paris as you stroll along its iconic boulevards, visit world-famous landmarks, and savor the essence of romance in the City of Light.",
      "imageUrl": "https://th.bing.com/th/id/R.a34034dfe1e2dc03b059b0adf7e74eaf?rik=HiGXznTtHXqYnQ&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f02%2fEiffel-tower-between-buildings-Paris-France-Hd-Wallpaper-2560x1600.jpg&ehk=Ufiwzpz1w0Wcj%2b0sqWPGVuQ1POjhfwrJT6LY0fSYJPo%3d&risl=1&pid=ImgRaw&r=0",
      "imageUrl2": "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg"
    },
    {
      "regionId": "1",
      "packageId": "11",
      "packageName": "Jaipur Hill Station Retreat",
      "countryName": "India",
      "costPerPerson": 1500,
      "adventureType": "Hill Stations",
      "description": "Escape to the picturesque hill stations of Jaipur, where you'll be surrounded by lush greenery, majestic forts, and a rich tapestry of culture and history.",
      "imageUrl": "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Kasauli.jpg",
      "imageUrl2": "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Kasauli.jpg"
    },
    {
      "regionId": "4",
      "packageId": "12",
      "packageName": "Spectacular Santorini Getaway",
      "countryName": "Greece",
      "costPerPerson": 2300,
      "adventureType": "Wonders",
      "description": "Discover the breathtaking beauty of Santorini, with its iconic whitewashed buildings, stunning sunsets, and crystal-clear waters, on this unforgettable island getaway.",
      "imageUrl": "https://cdn.projectexpedition.com/photos/641f5f63960f1_sized.jpg",
    "imageUrl2": "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_666,w_1000,x_0,y_0/c_limit,f_auto,fl_lossy,q_80,w_1080/shutterstock_216941512_juorzk.jpg"
    },
    {
      "regionId": "3",
      "packageId": "13",
      "packageName": "Abu Dhabi Water Sports Extravaganza",
      "countryName": "UAE",
      "costPerPerson": 1600,
      "adventureType": "Water Sports",
      "description": "Dive into excitement with a thrilling array of water sports adventures in Abu Dhabi, where you'll experience the adrenaline rush of jet skiing, parasailing, and more.",
      "imageUrl": "https://abudhabimarine.ae/img/containers/assets/abu-dhabi-cruises.jpg/739523fb23879b9ebe6b6bc01be80f6f.jpg",
    "imageUrl2": "https://abudhabimarine.ae/img/containers/assets/abu-dhabi-marine-tours.jpg/e91808c3f2cea953be4c333020ac6199.jpg"
     },
    {
      "regionId": "1",
      "packageId": "14",
      "packageName": "Enchanting Kyoto Experience",
      "countryName": "Japan",
      "costPerPerson": 2100,
      "adventureType": "Historical",
      "description": "Step back in time to ancient Japan as you explore the cultural treasures of Kyoto, from majestic temples and tranquil gardens to traditional tea houses and geisha districts.",
      "imageUrl": "https://wallpapercave.com/wp/wp6956104.jpg",
    "imageUrl2": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*R02pQ2XJ1lEIy96DtXU7UA.jpeg"
    },
    {
      "regionId": "3",
      "packageId": "15",
      "packageName": "Istanbul Bosphorus Cruise",
      "countryName": "Turkey",
      "costPerPerson": 1700,
      "adventureType": "Wonders",
      "description": "Embark on a captivating journey along the Bosphorus Strait in Istanbul, where Europe and Asia meet, and marvel at the city's iconic landmarks, magnificent palaces, and bustling waterfront.",
      "imageUrl": "https://excursionmania.com/wp-content/uploads/2021/02/ist-1.jpeg",
    "imageUrl2": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/56/71/de.jpg"
    }
  ];

    getTourPackages(regionId: string, adventureType?: string, costRange?: [number, number]): TourPackage[] {
    let filteredTours = this.tours.filter(tour => tour.regionId === regionId);
 
    if (adventureType && adventureType !== 'All') {
      filteredTours = filteredTours.filter(tour => tour.adventureType === adventureType);
    }
 
    if (costRange) {
      filteredTours = filteredTours.filter(tour => tour.costPerPerson >= costRange[0] && tour.costPerPerson <= costRange[1]);
    }
 
    return filteredTours;
  }
  
   getItinerary(packageId : string )  { 
    let imageUrl : SafeUrl = "https://excursionmania.com/wp-content/uploads/2021/02/ist-1.jpeg";
    if (packageId) {
      let filteredTours = this.tours.filter(p => p.packageId === packageId);
      imageUrl = filteredTours[0].imageUrl;
    }
  return imageUrl;
  }

  // constructor() { }
}
