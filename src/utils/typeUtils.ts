import { User,Service, Driver, House, AddressHouse, PhotosHouse, Address } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateAddress = Omit<Address,"id">
export type CreateService = Omit<Service,"id">
export type CreateDriver = Omit<Driver, "id">
export type CreateHouse = Omit<House,"id"|"proprietaryId">
export type AddAddressHouse = Omit<AddressHouse,"id">
export type AddPhotoHouse = Omit<PhotosHouse,"id">