## Desafio Franq

### Descrição
Desenvolver o front-end de uma aplicação com dados de cotações e bolsas de valores consumidos da API da HG Finance.

### Uso
```bash
# clonar
npx degit flavionn/franq franq
cd franq

# instalar
pnpm i

# desenvolver
pnpm dev
```

- se não tiver o pnpm instalado rode `npm install -g pnpm`
- acesso em http://localhost:3000

### Stack
- pnpm
- Vite
- Vue 3 (Composition API, SFC)
- Vuex
- Vue Router
- Firebase
- [Uno CSS](https://github.com/unocss/unocss)
- Sass
- Pug
- Veja mais no arquivo [package.json](./package.json)

### Comentários

### Autenticação e persistência
Para cadastro de usuários e autenticação utilizei o Firebase 9. Utilizei um método do Firebase chamado onAuthStateChanged para persistência de dados.
Criei um composable chamado [auth.js](./src/composables/auth.js) com alguns métodos relacionados a autenticação do usuário.

#### Layouts e páginas
Utilizei o [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) para criação das rotas com base nos arquivos na pasta [pages](./src/pages). E o [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) para o [layout](./src/layouts) das páginas.

#### Gerenciamento de estado
Quando o usuário faz a autenticação, alguns dados do seu cadastro vindos do Firebase são guardados no localStorage e em uma variável. Utilizei getters para buscar alguns destes dados durante a navegação.

#### Comunicação com a API
A comunicação com a API esta sendo realizada utilizando o Axios. Até o momento utilizei as rotas "quotation" e "taxes" da HG Finance.
Criei um composable chamado [finance.js](./src/composables/finance.js) com alguns métodos que chamam o carregamento de dados específicos da API.

#### Navegação & Visual
A página inicial conta com uma imagem hero conceitual que busquei de um outro projeto criado por uma outra empresa [Collins](wearecollins.com)
Os ícones utilizados estão disponíveis em [Icones](https://icones.js.org/)

#### TTD
-[ ] Versão desktop
-[ ] Salvar dados obtidos da API em um estado e consumi-los na aplicação
-[ ] Atualizar estes dados após um período de tempo
