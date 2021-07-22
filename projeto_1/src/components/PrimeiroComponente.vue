<template>
  <h3>Meu nome é {{ nome }} e sou {{ profissao }}</h3>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Alexander",
      profissao: "programador Jr",
    };
  },
};
</script>