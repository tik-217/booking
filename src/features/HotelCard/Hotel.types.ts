import { IHotelServices } from "src/shared/types/hotels/IHotelServices";
import { Room } from "src/shared/types/rooms/IRoom";

export interface IHotelCardProps {
  id: number;
  name: string;
  stars: number;
  photo: string[];
  city: string;
  services: IHotelServices[];
  rooms: Room[];
}
