# Curso de VueJS

- Aula 1: VueJS com CDN usando a tag script do html.
    - CDN: "https://unpkg.com/vue@next".

- Aula 2: Input e data binding. <code>v-if, v-model, v-on:click</code>.
    - Palavra <code>this</code> para acessar dados da instância Vue: <code>this.variavel_name</code>

- Aula 3: Introdução ao Vue CLI.
    - Instalado o CLI com o comando <code>npm install -g @vue/cli</code>
    - Criar o projeto com o comando <code>vue create {nome_do_projeto}</code>
    - Selecionar o preset default
    - Acessar a pasta do projeto com <code>cd {nome_do_projeto}</code>
    - Rodar o projeto com o comando <code>npm run serve</code>
    - Acessar o navegador de internet no endereço <code>http://localhost:8080/</code>

- Aula 4: Componentes.
    - Criação do primeiro componente.

- Aula 5: Dados nos componentes.
    - Passando dados ao componente utilizando a função <code> data(){
        return {
            dado: ''
        }
    }</code>

- Aula 6: Life cycle hooks.
    <code>

        // executado ao criar o componente
        created(){ 
        },

        //executado ao montar o componente - após o created
        mounted() { 
        },

    </code>

- Aula 7: Hierarquia de componentes.
    - Criada uma hierarquia de componentes, reutilizando-os.