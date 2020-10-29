import { Recipe } from "@/models/Recipe";

export class Hit {
    bookmarked!: boolean;
    bought!: boolean;
    recipe!: Recipe;
}