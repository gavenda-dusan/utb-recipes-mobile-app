
<template>
  <div class="ion-page stick-to-bottom">
    <IonTab>
      <IonTab>
        <ion-vue-router name="Home"></ion-vue-router>
        <!-- <RouterLink to="/">Home</RouterLink> -->
      </IonTab>

      <IonTab tab="tab2">
        <ion-vue-router name="About"></ion-vue-router>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </IonTab>

      <IonTabBar>
        <IonTabButton tab="Home">
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="About" :to="{ name: 'About' }">
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTab>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  IonPage,
  IonContent,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon
} from "@modus/ionic-vue";

@Options({
  components: {
    IonPage,
    IonContent,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon
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