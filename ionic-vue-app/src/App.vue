<template >
  <IonApp id="app"> <IonRouterView /> <Tabs /></IonApp>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonApp, IonRouterView } from "@modus/ionic-vue";
import Tabs from "@/components/Tabs.vue";

@Options({
  components: {
    IonApp,
    IonRouterView,
    Tabs
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
</style>