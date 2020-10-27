<template>
  <div class="hello">
    <h1>
      <RouterLink to="/">Go back home</RouterLink>
    </h1>
    <h2>Ahoj</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {}
})
export default class Home extends Vue {}
</script>