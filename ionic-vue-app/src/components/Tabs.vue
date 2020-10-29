
<template>
  <IonTab tab="home"> </IonTab>
  <IonTab tab="recipes"> </IonTab>
  <IonTabBar class="stick-to-bottom">
    <IonTabButton tab="home" href="/">
      <IonLabel>Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="recipes" href="/recipes">
      <IonLabel>Recipes</IonLabel></IonTabButton
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