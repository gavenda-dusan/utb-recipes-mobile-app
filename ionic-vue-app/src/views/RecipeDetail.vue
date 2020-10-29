<template>
  <div>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{{ recipe.label }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonGrid>
      <IonRow>
        <IonCol>
          <img v-bind:src="recipe.image" />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <h3>Ingredients</h3>
          <p v-for="ingredient in recipe.ingredients" :key="ingredient.text">
            {{ ingredient.text }}
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
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
  IonTitle
} from "@modus/ionic-vue";
import { Recipe } from "@/models/Recipe";
import axios from "axios";

@Options({
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle
  }
})
export default class RecipesDetail extends Vue {
  private recipe = new Recipe();

  mounted() {
    const link = encodeURIComponent(this.$route.params.link as string);
    axios
      .post(
        `https://api.edamam.com/search?r=${link}&app_id=95f121cb&app_key=7ff6f10c068266c24c81c3f07f0570f8`
      )
      .then(res => {
        if (res.data.length > 0) {
          this.recipe = res.data[0];
        }
        console.log(res);
      })
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>
img {
  border: 5px solid #555;
}
</style>