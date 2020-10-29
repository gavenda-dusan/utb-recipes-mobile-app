<template>
  <div>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Recipes browser</IonTitle>
      </IonToolbar>
    </IonHeader>

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
  IonSelectOption
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
    RecipesTable
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
      })
      .catch(error => console.log(error));
  }

  private buildRequestLink() {
    let link = "https://api.edamam.com/search?";
    if (this.searchText.length > 0) link += `q=${this.searchText}`;
    link += "&app_id=95f121cb&app_key=7ff6f10c068266c24c81c3f07f0570f8";
    if (this.selectedDiet.length > 0) link += `&diet=${this.selectedDiet}`;

    return link;
  }
}
</script>