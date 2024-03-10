import { Room } from "../rooms/IRoom";
import { IHotelServices } from "./IHotelServices";
import { IReviewHotels } from "./IReviewHotels";

export interface IHotelProperty {
  id: number;
  name: string;
  stars: number;
  description: string;
  additionalInfo: string;
  photo: string[];
  country: string;
  city: string;
  hotelServices: IHotelServices[];
  address: string;
  legalAddress: string[];
  policy: string[];
  rooms: Room[];
  reviewHotels: IReviewHotels[];
}

export interface IHotels {
  hotels: IHotelProperty[];
}

export interface IHotel {
  hotel: IHotelProperty;
}
