<template>
  <h4>Meu nome é {{ nome }} e sou {{ profissao }}</h4>
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