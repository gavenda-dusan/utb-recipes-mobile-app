<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>{{ recipe.label }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <img v-bind:src="recipe.image" />
          </IonCol>
        </IonRow>
        <IonItem>
          <IonRow>
            <IonCol>
              <h3>Ingredients</h3>
              <p
                v-for="ingredient in recipe.ingredients"
                :key="ingredient.text"
              >
                {{ ingredient.text }}
              </p>
            </IonCol>
          </IonRow>
        </IonItem>

        <IonItem>
          <IonRow>
            <IonCol>
              <div>{{ recipe.totalNutrients.ENERC_KCAL.label }}</div>
              <div>
                {{ calories }} {{ recipe.totalNutrients.ENERC_KCAL.unit }}
              </div>
            </IonCol>
            <IonCol>
              <div>{{ recipe.totalNutrients.SUGAR.label }}</div>
              <div>{{ sugar }} {{ recipe.totalNutrients.SUGAR.unit }}</div>
            </IonCol>
            <IonCol>
              <div>{{ recipe.totalNutrients.FAT.label }}</div>
              <div>{{ fat }} {{ recipe.totalNutrients.FAT.unit }}</div>
            </IonCol>
            <IonCol>
              <div>{{ recipe.totalNutrients.PROCNT.label }}</div>
              <div>{{ protein }} {{ recipe.totalNutrients.PROCNT.unit }}</div>
            </IonCol>
          </IonRow>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton @click="addToFavorites()">Add to favorites</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from "@modus/ionic-vue";
import { Recipe } from "@/models/Recipe";
import axios from "axios";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Options({
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  }
})
export default class RecipesDetail extends Vue {
  private recipe = new Recipe();
  private isFavorite = false;

  mounted() {
    const link = encodeURIComponent(this.$route.params.link as string);
    axios
      .post(
        `https://api.edamam.com/search?r=${link}&app_id=ab62d393&app_key=605062d301d4c1b0d4967b013b44df68`
      )
      .then(res => {
        if (res.data.length > 0) {
          this.recipe = res.data[0];
        }
      })
      .catch(error => console.log(error));
  }

  get calories() {
    return this.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0);
  }

  get sugar() {
    return this.recipe.totalNutrients.SUGAR.quantity.toFixed(0);
  }

  get fat() {
    return this.recipe.totalNutrients.FAT.quantity.toFixed(0);
  }

  get protein() {
    return this.recipe.totalNutrients.PROCNT.quantity.toFixed(0);
  }

  async addToFavorites() {
    await Storage.set({
      key: `favorite-${this.recipe.uri}`,
      value: JSON.stringify({
        name: this.recipe.label,
        uri: this.recipe.uri
      })
    });
  }
}
</script>

<style scoped>
img {
  border: 3px solid #555;
}
</style>