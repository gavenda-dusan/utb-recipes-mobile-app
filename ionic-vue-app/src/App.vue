<template>
  <IonApp>
    <IonContent>
      <IonRouterView />
    </IonContent>
    <IonFooter>
      <Tabs />
    </IonFooter>
    {{ result }}
  </IonApp>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IonApp, IonRouterView, IonContent, IonFooter } from "@modus/ionic-vue";
import Tabs from "@/components/Tabs.vue";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Options({
  components: {
    IonApp,
    IonRouterView,
    Tabs,
    IonContent,
    IonFooter
  }
})
export default class App extends Vue {
  result = "";

  async mounted() {
    this.keys();
    this.setObject();
    await this.getobject();
    console.log(this.result);
  }

  async setObject() {
    await Storage.set({
      key: "user2",
      value: JSON.stringify({
        id: 1,
        name: "Max"
      })
    });
  }

  getobject() {
    Storage.get({ key: "user2" }).then(ret => {
      const user = JSON.parse(ret.value || "{}");
      this.result = user.name;
    });
  }
  async keys() {
    const { keys } = await Storage.keys();
    console.log("Got keys: ", keys);
  }
}
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