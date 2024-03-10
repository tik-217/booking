import { gql } from "@apollo/client";

export const HOTEL_SECTION = gql`
  query GetHotel($id: Int!) {
    hotel(id: $id) {
      id
      name
      stars
      description
      additionalInfo
      photo
      country
      policy
      city
      address
      reviewHotels {
        id
        avatar
        name
        rating
        reviews
        date
        country
      }
      hotelServices {
        id
        hotelId
        hotelServicesAnimals {
          id
          accommodationWithPetsIsPaidSeparately
          image
        }
        hotelServicesBeautyAndHealths {
          id
          beautySalonIsPaidSeparately
          firstAidKit
          image
          massageIsPaidSeparately
        }
        hotelServicesBusinesses {
          id
          conferenceHall
          image
          organizationOfMeetingsAndBanquets
          videoRentalAndComputerEquipment
          xerox
        }
        hotelServicesChildrens {
          id
          accommodationIsSuitableForFamiliesChildren
          babysittingAndChildCare
          childrensTvChannels
          image
        }
        hotelServicesEntertainments {
          id
          image
          suitableForFestiveEvents
        }
        hotelServicesGenerals {
          id
          airConditioning
          computer
          designHotel
          dishwasherCar
          earlyCheckIn
          elevator
          expeditedCheckInAndCheckOut
          fireExtinguisher
          fullDayHourFrontDesk
          heating
          image
          individualCheckInAndCheckOut
          lateCheckOut
          nonSmokingHotel
          washingMachine
        }
        hotelServicesInTheRooms {
          id
          bridalSuite
          cableTv
          familyRooms
          image
          musicCenter
          nonSmokingRooms
          refrigerator
          roomService
          roomsForAllergySufferers
          safeInTheRoom
          smokingRooms
          tv
          vipAmenitiesInTheRoom
        }
        hotelServicesInternets {
          id
          freeWiFi
          image
        }
        hotelServicesMeals {
          id
          breakfastInTheRoom
          freeTeaOrCoffee
          fullBoardIsPossible
          halfBoardIsPossible
          image
          kitchen
          microwave
          restaurant
        }
        hotelServicesParkings {
          id
          image
          parkingIsPaidSeparately
        }
        hotelServicesSanitaryMeasures {
          id
          enhancedDisinfectionMeasures
          image
          personalProtectiveEquipmentForGuests
          personalProtectiveEquipmentForStaff
          temperatureControlForGuests
          temperatureControlForStaff
        }
        hotelServicesServicesAndAmenities {
          id
          conciergeServices
          dryCleaningIsPaidSeparately
          hairDryerOnRequest
          image
          iron
          ironingFacilities
          ironingServicesArePaidSeparately
          laundryIsPaidSeparately
          luggageStorage
          telephone
        }
        hotelServicesSports {
          id
          gym
          image
        }
        hotelServicesStaffSpeaks {
          id
          image
          inEnglish
          inRussian
        }
        hotelServicesTransfers {
          id
          image
          transfer
        }
      }
      rooms {
        id
        cost
        name
        description
        photo
        numberOfGuests
      }
    }
  }
`;

export const HOTELS_SECTION = gql`
  query initialHotels {
    hotels {
      id
      name
      stars
      description
      additionalInfo
      photo
      country
      policy
      city
      address
      reviewHotels {
        avatar
        name
        rating
        reviews
        date
        country
      }
      hotelServices {
        id
        hotelId
        hotelServicesAnimals {
          id
          accommodationWithPetsIsPaidSeparately
          image
        }
        hotelServicesBeautyAndHealth {
          id
          beautySalonIsPaidSeparately
          firstAidKit
          image
          massageIsPaidSeparately
        }
        hotelServicesBusiness {
          id
          conferenceHall
          image
          organizationOfMeetingsAndBanquets
          videoRentalAndComputerEquipment
          xerox
        }
        hotelServicesChildren {
          id
          accommodationIsSuitableForFamiliesChildren
          babysittingAndChildCare
          childrensTvChannels
          image
        }
        hotelServicesEntertainment {
          id
          image
          suitableForFestiveEvents
        }
        hotelServicesGeneral {
          id
          airConditioning
          computer
          designHotel
          dishwasherCar
          earlyCheckIn
          elevator
          expeditedCheckInAndCheckOut
          fireExtinguisher
          fullDayHourFrontDesk
          heating
          image
          individualCheckInAndCheckOut
          lateCheckOut
          nonSmokingHotel
          washingMachine
        }
        hotelServicesInTheRooms {
          id
          bridalSuite
          cableTv
          familyRooms
          image
          musicCenter
          nonSmokingRooms
          refrigerator
          roomService
          roomsForAllergySufferers
          safeInTheRoom
          smokingRooms
          tv
          vipAmenitiesInTheRoom
        }
        hotelServicesInternet {
          id
          freeWiFi
          image
        }
        hotelServicesMeals {
          id
          breakfastInTheRoom
          freeTeaOrCoffee
          fullBoardIsPossible
          halfBoardIsPossible
          image
          kitchen
          microwave
          restaurant
        }
        hotelServicesParking {
          id
          image
          parkingIsPaidSeparately
        }
        hotelServicesSanitaryMeasures {
          id
          enhancedDisinfectionMeasures
          image
          personalProtectiveEquipmentForGuests
          personalProtectiveEquipmentForStaff
          temperatureControlForGuests
          temperatureControlForStaff
        }
        hotelServicesServicesAndAmenities {
          id
          conciergeServices
          dryCleaningIsPaidSeparately
          hairDryerOnRequest
          image
          iron
          ironingFacilities
          ironingServicesArePaidSeparately
          laundryIsPaidSeparately
          luggageStorage
          telephone
        }
        hotelServicesSports {
          id
          gym
          image
        }
        hotelServicesStaffSpeaks {
          id
          image
          inEnglish
          inRussian
        }
        hotelServicesTransfer {
          id
          image
          transfer
        }
      }
      rooms {
        cost
        name
        description
        photo
        numberOfGuests
      }
    }
  }
`;
