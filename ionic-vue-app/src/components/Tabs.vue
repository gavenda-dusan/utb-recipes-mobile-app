
<template>
  <IonTab tab="home"> </IonTab>
  <IonTab tab="recipes"> </IonTab>
  <IonTab tab="favorites"> </IonTab>
  <IonTabBar>
    <IonTabButton tab="home" href="/">
      <IonLabel>Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="recipes" href="/recipes">
      <IonLabel>Recipes</IonLabel></IonTabButton
    >
    <IonTabButton tab="favorites" href="/favorites">
      <IonLabel>Favorites</IonLabel></IonTabButton
    >
  </IonTabBar>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonTab, IonTabBar, IonTabButton, IonLabel } from "@modus/ionic-vue";

@Options({
  components: {
    IonTab,
    IonTabBar,
    IonTabButton,
    IonLabel
  }
})
export default class Tabs extends Vue {}
</script>

<style scoped>
.stick-to-bottom {
  position: fixed;
  bottom: 0%;
  width: 100%;
  opacity: 1;
}
</style>