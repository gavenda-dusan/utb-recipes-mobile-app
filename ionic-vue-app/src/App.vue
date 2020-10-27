<template>
  <IonApp> <IonRouterView /><Tabs /> </IonApp>
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