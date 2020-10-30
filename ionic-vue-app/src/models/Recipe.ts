import { Ingredient } from "@/models/Ingredient";
import { TotalNutrients } from './TotalNutrients';

export class Recipe {
    calories!: number;
    dietLabels = new Array<string>();
    healthLabels = new Array<string>();
    image!: string;
    label!: string;
    ingredients!: Array<Ingredient>;
    totalNutrients: TotalNutrients = new TotalNutrients();
    uri!: string;
}