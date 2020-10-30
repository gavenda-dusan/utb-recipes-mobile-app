<template>
  <div>
    <IonGrid>
      <IonItem
        v-for="recipe in recipes"
        :key="recipe.recipe.label"
        button
        @click="moveToDetail(recipe.recipe.uri)"
      >
        <IonRow>
          <IonCol>
            <div>
              {{ recipe.recipe.label }}
            </div>
          </IonCol>
        </IonRow>
      </IonItem>
    </IonGrid>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { IonGrid, IonRow, IonCol, IonItem, IonIcon } from "@modus/ionic-vue";
import { Hit } from "@/models/Hit";

@Options({
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem
  }
})
export default class RecipesTable extends Vue {
  @Prop({ required: true }) recipes = Array<Hit>();

  moveToDetail(uri: string) {
    this.$router.push({ name: `RecipeDetail`, params: { link: uri } });
  }
}
</script>

<style scoped>
</style>