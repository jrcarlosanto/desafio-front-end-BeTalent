# Teste Técnico Front-end Be

<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Desafio](#desafio)
     * [Mock](#mock)
     * [Requisitos Gerais](requisitos-gerais)
     * [Acesso aos dados da API simulada](#acesso-aos-dados-da-API-simulada)
     * [Critérios de Avaliação](#critérios-de-avaliação)
   * [Layout](#layout)
     * [Web](#web)
     * [Mobile](#mobile)
   * [Como executar o projeto](#como-executar-o-projeto)
     * [Pré-requisitos pelo VSCode](#pré-requisitos-pelo-vscode)
     * [Rodando pelo VSCode)](#rodando-pelo-vscode)
     * [Pré-requisitos pelo Docker](#pré-requisitos-pelo-docker)
     * [Rodando pelo Docker)](#rodando-pelo-docker)
     * [Testes](#testes)
     * [Coverage](#coverage)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
   * [Licença](#licença)
<!--te-->

## Desafio

O Teste Técnico para Front-End da Be consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server.

### Mockup

Este é o [projeto em Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?type=design&node-id=1%3A4&mode=dev&t=vVxs9eyKybrYmq4Z-1) para você se orientar. Nele, você encontrará estilos, visualização desktop e mobile e outros padrões que deverá seguir.

### Requisitos Gerais

Deve-se utilizar React.js ou Vanilla JS (JavaScript puro) para construir o projeto.

É permitido utilizar libs externas, mas recomenda-se que seja o mínimo possível.

A visualização deve ser responsiva.

A tabela deve conter as seguintes colunas:

- imagem (thumb do/a usuário/a);
- nome;
- cargo
- data de admissão;
- telefone.

Também deve ser possível realizar pesquisa na tabela por meio de um input. O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone.

Datas e telefones devem ser formatadas no front-end e não na API.

Tenha instaladas em sua máquina as ferramentas [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.

### Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:

1. caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);
2. clone este repositório do GitHub em sua máquina: [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end);
3. entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;
4. inicie a estrutura e o desenvolvimento do projeto.

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou 
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.

### Critérios de Avaliação

Em ordem de relevância, avaliaremos:

1. lógica de programação;
2. organização (do código e dos arquivos);
3. CSS do projeto;
4. README, que deve conter, pelo menos, as seguintes informações: sobre o projeto, pré-requisitos e instruções para rodar a aplicação.

É um diferencial na avaliação o uso de TypeScript.

## Layout

### Web

#### Dark Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-web-dark.png" width="600px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-web-notFound-dark.png" width="600px">
</p>

#### Light Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-web-light.png" width="600px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-web-notFound-light.png" width="600px">
</p>

### Mobile

#### Dark Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-mobile-dark.png" width="300px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/notfound-mobile-dark.png" width="300px">
</p>

#### Light Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/cap-mobile-light.png" width="300px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/images/notfound-mobile-light.png" width="300px">
</p>

## Como executar o projeto

Este projeto pode ser executado de duas formas:
1. VSCode
2. Docker Compose

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando pelo VSCode

Na raiz do projeto.

```bash

# Clone este repositório
$ git clone git@github.com:jrcarlosanto/desafio-front-end-BeTalent.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5173 - acesse http://localhost:5173 

```
É necessário deixar o json-server rodando para que os dados sejam visualizados no projeto. Acesse a explicação o tópico Acesso aos dados da API simulada para uma maior explicação.

### Pré-requisitos Docker Compose

Segui os tutorias para a instalação do [Docker](https://docs.docker.com/desktop/install/linux-install/) e [Docker Compose](https://docs.docker.com/compose/install/)

### Rodando pelo Docker

Na raiz do projeto.

```bash

# Clone este repositório
$ git clone git@github.com:jrcarlosanto/desafio-front-end-BeTalent.git

# Execute a aplicação com o docker compose no segundo plano
$ docker-compose up -d --build

# Execute a aplicação com o docker compose para observar o terminal
$ docker-compose up --build

# O servidor inciará na porta:5173 - acesse http://localhost:5173 

# Execute o comando no terminal para encerar o docker

$ docker-compose down

```
### Testes

```bash

# Entre na pasta da aplicação
$ cd front-end

# Execute os testes
$ npm run test

```

### Coverage

```bash

# Entre na pasta da aplicação
$ cd front-end

# Execute os testes
$ npm run coverage

```

## Tecnologias

- [CREATE TRYBE APP](https://github.com/ricardoraposo/create-trybe-app)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [styled-components](https://styled-components.com/)
- [json-server-docker](https://github.com/codfish/json-server-docker)


### Utilitários

- Protótipo: [Figma](https://www.figma.com/design/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?node-id=1-2&t=t09A7CMXnPfTxnob-0)
- Teste: [Vitest](https://vitest.dev/)


## Autor

Carlos Antonio Sales de Oliveira Junior
[Perfil GitHub](https://github.com/jrcarlosanto)

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
