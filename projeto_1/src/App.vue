<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa/>
    <Formulario/>
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";
import LifeCycle from "./components/LifeCycle";
import Pessoa from "./components/Pessoa";
import Formulario from "./components/Formulario";


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
    Pessoa,
    Formulario
  },
};
</script>