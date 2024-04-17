import { SafeUrl } from "@angular/platform-browser";

export interface TourPackage {
   
        regionId: string;
        packageId: string;
        packageName: string;
        countryName: string;
        costPerPerson: number;
        adventureType: string;
        description: string;
        imageUrl: SafeUrl;
        imageUrl2: SafeUrl;
        // rating: string;
}
