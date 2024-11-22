# Sistema de Gerenciamento de Hospedagem 🏨

Este projeto é uma aplicação web para gerenciar hóspedes e quartos de um hotel. Ele permite exibir informações como lista de hóspedes, quartos disponíveis, cadastrar novos hóspedes e remover hóspedes existentes. Foi desenvolvido utilizando **HTML**, **CSS**, **JavaScript** e **Node.js**.

## Funcionalidades 🚀

1. **Mostrar Todos os Hóspedes**: Exibe uma lista completa de hóspedes cadastrados no sistema.
2. **Mostrar Quartos Disponíveis**: Lista todos os quartos que estão disponíveis para reserva.
3. **Criar Novo Hóspede**: Cria novo hospede, onde existe validação de CPF, e escolha do quarto.
4. **Deletar Hóspede**: Deleta o Hospede com base em qual quarto ele está.


## Tecnologias Utilizadas 🛠️

- **Frontend**:
  - HTML5: Estrutura da interface do usuário.
  - CSS3: Estilização com design moderno, responsivo e atrativo.
  - JavaScript: Lógica de interação com o DOM.

- **Backend**:
  - **Node.js**: Para a construção do servidor.
  - **Express.js**: Framework para a criação de rotas e manipulação de requisições.
  - **Cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.

- **Outros**:
  - Modulos ES6 para organizar o código.
  - Rotas dinâmicas para as operações CRUD (Create, Read, Update, Delete).

## Estrutura do Projeto 📂

```plaintext
├── node_modules/              # Dependências do Node.js
├── public/                    # Arquivos públicos acessíveis pelo cliente
│   ├── style/
│   │   ├── style.css          # Arquivo de estilização da aplicação
│   ├── index.html             # Interface principal do sistema
│   ├── index.js               # Código JavaScript do frontend
├── src/                       # Código-fonte do backend
│   ├── controller/
│   │   ├── controllerHospedes.js # Lógica de controle dos hóspedes
│   ├── data/
│   │   ├── hospedes.js        # Dados de hóspedes
│   │   ├── quartos.js         # Dados de quartos
│   ├── routes/
│   │   ├── routes.js          # Arquivo com as rotas do sistema
│   ├── server/
│   │   ├── server.js          # Configuração e inicialização do servidor
│   ├── index.js           # Código principal do backend
├── package.json               # Configuração do projeto e dependências
├── package-lock.json          # Versões fixas das dependências

```

## Melhorias e Atualizações Futuras 🔮

As seguintes melhorias e funcionalidades estão **em desenvolvimento** e serão lançadas nas próximas versões do sistema. O objetivo é aprimorar a experiência do usuário, garantir segurança e facilitar a manutenção do projeto:

1. **Criar Novo Hóspede** ✅: Melhorar o fluxo de cadastro para incluir validação de dados, como CPF, e exibir mensagens de erro mais detalhadas para o usuário.

2. **Deletar Hóspede** ✅: Implementar uma confirmação visual (como um modal) antes de deletar um hóspede, prevenindo exclusões acidentais. Adicionar também a funcionalidade de buscar hóspedes pelo nome ou CPF para facilitar o gerenciamento.

3. **Banco de Dados** 🔄: Substituir os arquivos de dados atuais (`hospedes.js` e `quartos.js`) por um banco de dados como **MongoDB**, **PostgreSQL** ou **MySQL**, permitindo persistência de dados mesmo após reinicializações do servidor.

4. **Interface de Login e Autenticação** 🔄: Implementar um sistema de login para administradores com autenticação baseada em **JWT** (JSON Web Tokens), garantindo segurança e restrição de acesso.

5. **Relatórios de Ocupação** 🔄: Criar gráficos e relatórios gerados dinamicamente para mostrar a ocupação dos quartos, tempo médio de estadia e outras métricas importantes para a gestão do hotel.

6. **Testes Automatizados** 🔄: Adicionar uma suíte de testes automatizados para validar o funcionamento das rotas e funcionalidades, utilizando ferramentas como **Jest** ou **Mocha**.

Essas atualizações estão sendo desenvolvidas com base no feedback dos usuários e nas melhores práticas de desenvolvimento. Novos lançamentos serão documentados e disponibilizados em breve!


Sinta-se à vontade para personalizar conforme necessário!


