<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Recipes browser</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonItem>
        <IonLabel position="floating">Search term</IonLabel>
        <IonInput type="text" inputmode="text" v-model="searchText"></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Diet type</IonLabel>
        <IonSelect interface="popover" v-model="selectedDiet">
          <IonSelectOption v-for="diet in dietLabels" :key="diet.Name">{{
            diet.Name
          }}</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton expand="block" @click="searchForRecipes">Search</IonButton>
      <RecipesTable :recipes="recipes"></RecipesTable>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonContent
} from "@modus/ionic-vue";
import axios from "axios";
import { DietLabels } from "@/enums/DietLabels";
import { DietLabel } from "@/models/DietLabel";
import { Hit } from "@/models/Hit";
import RecipesTable from "@/components/RecipesTable.vue";

@Options({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
    IonSelect,
    IonSelectOption,
    RecipesTable,
    IonContent
  }
})
export default class Recipes extends Vue {
  private searchText = "";
  private selectedDiet = "";
  private dietLabels!: Array<DietLabel>;
  private recipes = new Array<Hit>();

  created() {
    this.dietLabels = DietLabels;
  }

  searchForRecipes() {
    const link = this.buildRequestLink();
    axios
      .post(link)
      .then(res => {
        this.recipes = res.data.hits;
        console.log(this.recipes);
      })
      .catch(error => console.log(error));
  }

  private buildRequestLink() {
    let link = "https://api.edamam.com/search?";
    if (this.searchText.length > 0) link += `q=${this.searchText}`;
    link += "&app_id=ab62d393&app_key=605062d301d4c1b0d4967b013b44df68";
    if (this.selectedDiet.length > 0) link += `&diet=${this.selectedDiet}`;

    return link;
  }
}
</script>