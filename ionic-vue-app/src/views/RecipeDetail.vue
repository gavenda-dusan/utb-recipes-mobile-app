<template>
  <div class="ion-page" v-if="isLoaded">
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

        <IonRow>
          <IonCol>
            <IonButton v-if="!isFavorite" @click="addToFavorites()"
              >Add to favorites</IonButton
            >
            <IonButton
              v-if="isFavorite"
              @click="removeFromFavorites()"
              color="danger"
              >Remove from favorites</IonButton
            >
          </IonCol>
        </IonRow>

        <IonItem>
          <IonRow>
            <IonCol>
              <h3>Ingredients</h3>
              <ul>
                <li
                  v-for="ingredient in recipe.ingredients"
                  :key="ingredient.text"
                >
                  {{ ingredient.text }}
                </li>
              </ul>
            </IonCol>
          </IonRow>
        </IonItem>

        <IonItem>
          <IonRow>
            <IonCol>
              <div>
                <h4>{{ recipe.totalNutrients.ENERC_KCAL.label }}</h4>
              </div>
              <div>
                {{ calories }} {{ recipe.totalNutrients.ENERC_KCAL.unit }}
              </div>
            </IonCol>
            <IonCol>
              <div>
                <h4>{{ recipe.totalNutrients.SUGAR.label }}</h4>
              </div>
              <div>{{ sugar }} {{ recipe.totalNutrients.SUGAR.unit }}</div>
            </IonCol>
            <IonCol>
              <div>
                <h4>{{ recipe.totalNutrients.FAT.label }}</h4>
              </div>
              <div>{{ fat }} {{ recipe.totalNutrients.FAT.unit }}</div>
            </IonCol>
            <IonCol>
              <div>
                <h4>{{ recipe.totalNutrients.PROCNT.label }}</h4>
              </div>
              <div>{{ protein }} {{ recipe.totalNutrients.PROCNT.unit }}</div>
            </IonCol>
          </IonRow>
        </IonItem>

        <IonItem v-if="recipe.dietLabels.length > 0">
          <IonRow>
            <IonCol>
              <div><h4>Diet types</h4></div>
              <div>{{ diet }}</div>
            </IonCol>
          </IonRow>
        </IonItem>

        <IonItem v-if="recipe.healthLabels.length > 0">
          <IonRow>
            <IonCol>
              <div><h4>Health labels</h4></div>
              <div>{{ health }}</div>
            </IonCol>
          </IonRow>
        </IonItem>
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
  private isLoaded = false;

  async mounted() {
    const link = encodeURIComponent(this.$route.params.link as string);
    axios
      .post(
        `https://api.edamam.com/search?r=${link}&app_id=95f121cb&app_key=7ff6f10c068266c24c81c3f07f0570f8`
      )
      .then(res => {
        if (res.data.length > 0) {
          this.recipe = res.data[0];
          this.isLoaded = true;
        }
      })
      .catch(error => console.log(error));

    await this.checkIfFavorite();
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

  get diet() {
    let dietString = "";
    this.recipe.dietLabels.forEach(diet => {
      if (dietString === "") {
        dietString += diet;
      } else {
        dietString += `, ${diet}`;
      }
    });

    return dietString;
  }

  get health() {
    let healthString = "";
    this.recipe.healthLabels.forEach(health => {
      if (healthString === "") {
        healthString += health;
      } else {
        healthString += `, ${health}`;
      }
    });

    return healthString;
  }

  async addToFavorites() {
    await Storage.set({
      key: `favorite-${this.recipe.uri}`,
      value: JSON.stringify({
        name: this.recipe.label,
        uri: this.recipe.uri
      })
    });
    this.isFavorite = true;
  }

  async removeFromFavorites() {
    await Storage.remove({ key: `favorite-${this.recipe.uri}` });
    this.isFavorite = false;
  }

  async checkIfFavorite() {
    const { value } = await Storage.get({
      key: `favorite-${this.$route.params.link}`
    });

    if (value !== null && value !== undefined) {
      this.isFavorite = true;
    }
  }
}
</script>

<style scoped>
img {
  border: 3px solid #555;
}
</style>