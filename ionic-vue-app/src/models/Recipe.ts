import { Ingredient } from "@/models/Ingredient";

export class Recipe {
    calories!: number;
    dietLabels!: Array<string>;
    healthLabels!: Array<string>;
    image!: string;
    label!: string;
    ingredients!: Array<Ingredient>;
    uri!: string;
}