<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Recipes app</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonLabel class="link">
      <RouterLink to="/about">About</RouterLink>
    </IonLabel>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonHeader, IonToolbar, IonTitle, IonLabel } from "@modus/ionic-vue";

@Options({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel
  }
})
export default class Home extends Vue {}
</script>