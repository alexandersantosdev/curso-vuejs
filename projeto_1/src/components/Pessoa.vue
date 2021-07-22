<template>
  <div>
    <h2>
      {{ nome }}
    </h2>
    <Info />
  </div>
</template>

<script>
import Info from "./Info.vue";

export default {
  name: "Pessoa",
  data() {
    return {
      nome: "Alexander",
    };
  },
  components: {
    Info,
  },
};
</script>