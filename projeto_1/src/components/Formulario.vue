<template>
  <div>
      <h3>Formulário com reutilização de componentes</h3>
    <InputText />
    <br>
    <InputText />
    <br>    
    <Submit />
  </div>
</template>

<script>
import InputText from "./form/InputText.vue";
import Submit from "./form/Submit.vue";

export default {
  name: "Formulario",
  components: {
    InputText,
    Submit,
  },
};
</script>