import { notFoundError } from "../utils/errorUtils";
import * as immovelRepository from "../repositories/immovelRepository";
import { userService } from "./userService";

export async function createImmovelForRent(id:number,data:any) {
    
   const immovelForRent = await immovelRepository.createImmovelForRent(id,data); 
 
   return immovelForRent;
    
}

export async function availabilityImmovelForRent(userId:number,houseId:number,availability:boolean) {
   const search = await findImmovelForRentById(userId,houseId);
   if(!search) throw notFoundError("Immovel doesn't exist");

  return await immovelRepository.availabilityImmovelForRent(houseId,availability);
   
}

export async function deleteImmovelForRent(userId:number,houseId:number) {
   const search = await findImmovelForRentById(userId,houseId);
   console.log(search);
   if(!search) throw notFoundError("Immovel doesn't exist");

    await immovelRepository.deleteImmovelForRent(houseId);
  
}

export async function deleteAllImmovelForRent(userId:number) {
    const {id} = await userService.findUserById(userId);
    
    return await immovelRepository.deleteAllImmovelForRent(id);
    
}

export async function findImmovelForRentById(id:number,houseId:number) {

   const immovel = await immovelRepository.findImmovelForRentById(id,houseId);
   if(immovel) throw notFoundError("Immovel doesn't exist");

   return immovel
    
}

export async function findAllImmovelForRent(proprietaryId:number) {
   
   return await immovelRepository.findAllImmovelForRent(proprietaryId);
    
}