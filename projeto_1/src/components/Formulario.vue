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
import InputText from "./form/InputText";
import Submit from "./form/Submit";

export default {
  name: "Formulario",
  components: {
    InputText,
    Submit,
  },
};
</script>