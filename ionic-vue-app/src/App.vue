<template>
  <IonApp>
    <IonContent>
      <IonRouterView />
    </IonContent>
    <IonFooter>
      <Tabs />
    </IonFooter>
  </IonApp>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonApp, IonRouterView, IonContent, IonFooter } from "@modus/ionic-vue";
import Tabs from "@/components/Tabs.vue";

@Options({
  components: {
    IonApp,
    IonRouterView,
    Tabs,
    IonContent,
    IonFooter
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ion-page {
  justify-content: initial;
}
</style>