<template>
  <div>
    Componente life cycle: Meu nome é: {{ nome }}
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: "Ainda não sei",
    };
  },
  created(){ // executado ao criar o componente
      this.nome = 'Alexander'
  },
  mounted() { //executado ao montar o componente - após o created
      this.nome = 'Lucas'
  },
};
</script>