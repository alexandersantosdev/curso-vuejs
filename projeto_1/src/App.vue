<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <PrimeiroComponente />
    <LifeCycle />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";
import LifeCycle from "./components/LifeCycle";

export default {
  name: "App",
  data() {
    return {
      title: "Primeiro App VueJS - vue 3",
    };
  },
  components: {
    PrimeiroComponente,
    LifeCycle,
  },
};
</script>