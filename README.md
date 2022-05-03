# kmdb-movie

📝 Descrição:

Construir um sistema de catálogo de filmes, baseado no sistema do IMDb. Desenvolvendo uma aplicação considerando algumas funcionalidades do IMDb.

🎯Objetivos:

Configuração de um banco de dados relacional (MySql).

Criação de uma API com os dados dos Usuário, formato CRUD (Creat, Read, Update, Delete).

Criação de uma API com os filmes/ séries favoritos dos Usuários.

Autenticação dos Usuários através de Token (JWT).


🖥️ Como Executar:

Instalação das dependências do projeto
  $ npm i


🔨 Tecnologias:

As seguintes ferramentas foram usadas na construção do projeto:

NodeJs

Sequelize

Express

MySQL

Nodemon

Passport


🔓Autenticação - JWT e Passaport Google:

A API utiliza JWT como forma de autenticação/autorização.


🔚Endpoints:


get ("/atracoes") - lista todas as séries e filmes disponíveis;

get ("/favoritos") - lista todas as séries e filmes favoritos dos Usuários;

post ("/favoritos") - adiciona nos Favoritos as séries e filmes do Usuários;

delete ("/favoritos") - deleta as séries e filmes favoritos do Usuários;


get ("/protected") - Verifica o Usuario autenticado;

post ("/usuario") - Cria um novo Usuário;

delete ("/usuario") - Deleta o Usuário




🤝 Feito por:
    Karen Nabarrete Garcia