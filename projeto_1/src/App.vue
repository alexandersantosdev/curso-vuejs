<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <PrimeiroComponente />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";

export default {
  name: "App",
  data() {
    return {
      title: "Primeiro App VueJS - vue 3",
    };
  },
  components: {
    PrimeiroComponente,
  },
};
</script>