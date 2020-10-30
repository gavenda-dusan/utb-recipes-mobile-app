<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Favorite recipes</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <RecipesTable :recipes="recipes"></RecipesTable>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@modus/ionic-vue";
import RecipesTable from "@/components/RecipesTable.vue";
import { Hit } from "@/models/Hit";
import { Recipe } from "@/models/Recipe";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Options({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    RecipesTable,
    IonContent
  }
})
export default class Favorites extends Vue {
  private recipes = new Array<Hit>();

  created() {
    this.loadFavorites();
  }

  async loadFavorites() {
    const { keys } = await Storage.keys();
    const favoritesKeys = keys.filter(x => x.includes("favorite-"));
    this.getFavoritesValues(favoritesKeys);
  }

  private getFavoritesValues(keys: string[]) {
    keys.forEach(async key => {
      Storage.get({ key: key }).then(result => {
        const favorite = JSON.parse(result.value || "");
        const hit = new Hit();
        const recipe = new Recipe();
        recipe.label = favorite.name;
        recipe.uri = favorite.uri;
        hit.recipe = recipe;
        this.recipes.push(hit);
      });
    });
  }
}
</script>