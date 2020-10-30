import { Ingredient } from "@/models/Ingredient";
import { TotalNutrients } from './TotalNutrients';

export class Recipe {
    calories!: number;
    dietLabels!: Array<string>;
    healthLabels!: Array<string>;
    image!: string;
    label!: string;
    ingredients!: Array<Ingredient>;
    totalNutrients: TotalNutrients = new TotalNutrients();
    uri!: string;
}