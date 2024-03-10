export interface IHotelServices {
  id: number;
  hotelId: number;
  hotelServicesAnimals: HotelServicesAnimals[];
  hotelServicesBeautyAndHealth: HotelServicesBeautyAndHealths[];
  hotelServicesBusinesses: HotelServicesBusinesses[];
  hotelServicesChildrens: HotelServicesChildrens[];
  hotelServicesEntertainments: HotelServicesEntertainments[];
  hotelServicesGenerals: HotelServicesGenerals[];
  hotelServicesInTheRooms: HotelServicesInTheRooms[];
  hotelServicesInternet: HotelServicesInternets[];
  hotelServicesMeals: HotelServicesMeals[];
  hotelServicesParking: HotelServicesParkings[];
  hotelServicesSanitaryMeasures: HotelServicesSanitaryMeasures[];
  hotelServicesServicesAndAmenityes: HotelServicesServicesAndAmenityes[];
  hotelServicesSports: HotelServicesSports[];
  hotelServicesStaffSpeaks: HotelServicesStaffSpeaks[];
  hotelServicesTransfer: HotelServicesTransfers[];
}

interface HotelServicesAnimals {
  accommodationWithPetsIsPaidSeparately: string;
  id: number;
  image: string;
}

interface HotelServicesBeautyAndHealths {
  id: number;
  beautySalonIsPaidSeparately: string;
  firstAidKit: string;
  image: string;
  massageIsPaidSeparately: string;
}

interface HotelServicesBusinesses {
  id: number;
  conferenceHall: string;
  image: string;
  organizationOfMeetingsAndBanquets: string;
  videoRentalAndComputerEquipment: string;
  xerox: string;
}

interface HotelServicesChildrens {
  id: number;
  accommodationIsSuitableForFamiliesChildren: string;
  babysittingAndChildCare: string;
  childrensTvChannels: string;
  image: string;
}

interface HotelServicesEntertainments {
  id: number;
  image: string;
  suitableForFestiveEvents: string;
}

interface HotelServicesGenerals {
  id: number;
  airConditioning: string;
  computer: string;
  designHotel: string;
  dishwasherCar: string;
  earlyCheckIn: string;
  elevator: string;
  expeditedCheckInAndCheckOut: string;
  fireExtinguisher: string;
  fullDayHourFrontDesk: string;
  heating: string;
  image: string;
  individualCheckInAndCheckOut: string;
  lateCheckOut: string;
  nonSmokingHotel: string;
  washingMachine: string;
}

interface HotelServicesInTheRooms {
  id: number;
  bridalSuite: string;
  cableTv: string;
  familyRooms: string;
  image: string;
  musicCenter: string;
  nonSmokingRooms: string;
  refrigerator: string;
  roomService: string;
  roomsForAllergySufferers: string;
  safeInTheRoom: string;
  smokingRooms: string;
  tv: string;
  vipAmenitiesInTheRoom: string;
}

interface HotelServicesInternets {
  id: number;
  freeWiFi: string;
  image: string;
}

interface HotelServicesMeals {
  id: number;
  breakfastInTheRoom: string;
  freeTeaOrCoffee: string;
  fullBoardIsPossible: string;
  halfBoardIsPossible: string;
  image: string;
  kitchen: string;
  microwave: string;
  restaurant: string;
}

interface HotelServicesParkings {
  id: number;
  image: string;
  parkingIsPaidSeparately: string;
}

interface HotelServicesSanitaryMeasures {
  id: number;
  enhancedDisinfectionMeasures: string;
  image: string;
  personalProtectiveEquipmentForGuests: string;
  personalProtectiveEquipmentForStaff: string;
  temperatureControlForGuests: string;
  temperatureControlForStaff: string;
}

interface HotelServicesServicesAndAmenityes {
  id: number;
  conciergeServices: string;
  dryCleaningIsPaidSeparately: string;
  hairDryerOnRequest: string;
  image: string;
  iron: string;
  ironingFacilities: string;
  ironingServicesArePaidSeparately: string;
  laundryIsPaidSeparately: string;
  luggageStorage: string;
  telephone: string;
}

interface HotelServicesSports {
  id: number;
  gym: string;
  image: string;
}

interface HotelServicesStaffSpeaks {
  id: number;
  inEnglish: string;
  inRussian: string;
  image: string;
}

interface HotelServicesTransfers {
  id: number;
  image: string;
  transfer: string;
}
