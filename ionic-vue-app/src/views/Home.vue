<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <div>
          <IonTitle>Home page</IonTitle>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <h2>This is application made for ABMTE 2020.</h2>
      <h3>Author: Dušan Gavenda</h3>
      <p>
        Purpose of the application is to connect to edamam.com recipes API and
        provide recipes to the user.
      </p>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonContent
} from "@modus/ionic-vue";

@Options({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonContent
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>