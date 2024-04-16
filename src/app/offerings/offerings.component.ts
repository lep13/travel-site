import { Component } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss'
})
export class OfferingsComponent {

  parentImgArray: any[] = 
  [ {
    //img:"https://thumbs.dreamstime.com/z/group-travelers-depicted-around-earth-globe-various-travel-items-image-promoting-travel-agencies-group-travelers-273966162.jpg?ct=jpeg",
    img:"https://as2.ftcdn.net/v2/jpg/01/90/68/91/1000_F_190689119_Pk4vVxOfMppACTeFN2JJDtzWRhCAWASm.jpg",
    heading:"Served 250,000+ customers ",
    content:"With a legacy of excellence, we've curated unforgettable experiences for over 250,000+ travelers worldwide. From breathtaking landscapes to cultural immersion, our tour packages guarantee memories that last a lifetime. Join our global community and embark on your next adventure with confidence and excitement.",
  },
    {
      img:"https://as2.ftcdn.net/v2/jpg/01/89/35/37/1000_F_189353714_0vBKUZBiwxDIGqcfQXx41lZ59fVsmmGd.jpg",
      heading:"Expert-Approved Tours!",
    content:"Embark on unforgettable adventures with our expert-approved tours! Each experience is meticulously curated to ensure the trip of a lifetime, recommended by trusted brands like TripAdvisor or BBB. With knowledgeable guides and carefully selected itineraries, trust us to make your travel dreams a reality. Book your next adventure today!"
  },
    {
      img:"https://as1.ftcdn.net/v2/jpg/06/64/77/16/1000_F_664771665_zsbHWsuNl23Tzs8UArWkLxwIK43HE4FM.jpg",
      heading:"World Tour Day Extravaganza!",
      content:"Explore the world with our exclusive World Tour Day offer! Enjoy unbeatable discounts on our diverse range of tour packages, from stunning city escapes to exotic adventures. Book now and embark on your dream journey while saving big on your next global adventure!"
  }
  ];
}
