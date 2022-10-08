import { Request, Response } from "express";
import * immovelService from "../services/immovelService";

export async function createImmovelForRent(req: Request, res: Response) {
    const required = req.body
    await immovelService.createImmovelForRent(required);
    res.sendStatus(201);
}
export async function deleteImmovelForRent(req: Request, res: Response) {
    const required = req.params.id
    await immovelService.deleteImmovelForRent(required);
    res.sendStatus(200);
}
export async function deleteAllImmovelForRent(req: Request, res: Response) {
    const required = req.params.id
    await immovelService.deleteAllImmovelForRent(required);
    res.sendStatus(200);
}
export async function findAllImmovelForRent(req: Request, res: Response) {
    const required = req.query,
    const result = await immovelService.findAllImmovelForRent(required);
    res.status(200).send(result);
}
export async function getImmovelForRentById(req: Request, res: Response) {
    const required = req.params.id
    const result = await immovelService.getImmovelForRentById(required);
    res.status(200).send(result);
}