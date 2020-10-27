
<template>
  <IonTabs>
    <IonTab tab="home"> </IonTab>
    <IonTab tab="about"> </IonTab>

    <IonTabBar class="stick-to-bottom">
      <IonTabButton tab="home" href="/">
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="about" href="/about">
        <IonLabel>About</IonLabel></IonTabButton
      >
    </IonTabBar>
  </IonTabs>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel
} from "@modus/ionic-vue";

@Options({
  components: {
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
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