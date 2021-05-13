
# Frontend challenge

![desafio de frontend](https://github.com/Kwan13/Kwan13/blob/master/images/frontend-challenge.gif)

### Tecnologias:

- Typescript
- ReactJS
- Styled-Components
- Material-UI
- json-server

### Instruções:

Acesse o diretório raiz ("./frontend") do projeto e utilize os comandos abaixo para baixar as dependências e startar o projeto respectivamente.

1. Para baixar as dependências do projeto utilize os comandos:

	```
	yarn
	```
	*ou*
	```
	npm install
	```
	<br/>
2. Após efetuar o download das dependências do projeto inicie o backend em seguida o front-end:

	_**para inicializar o backend:**_

	```
	yarn dev
	```
	*ou*
	```
	npm run dev
	```

	_**para inicializar o front-end:**_

	```
	yarn start
	```
	*ou*
	```
	npm run start
	```
<br/>

### *Opcional - Backend (NodeJS):

#### Tecnologias:
- Typescript
- NodeJS
- Express
- TypeORM
- Docker
- Postgres

### Instruções:

1. Baixe e instale o <a href="https://www.docker.com/get-started" target="_blank">Docker</a>, utilize o comando a seguir no terminal para criar um container com o  Postgres:
	```
	docker run --name countries -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
	```
	após criar o container, dentro dele crie um banco de dados com o nome "countries", utilize o software que preferir para gerenciar o banco, recomento o <a href="https://dbeaver.io/" target="_blank">DBeaver</a>.
	
3. Vá até a pasta "./backend-optional" e baixe todas as dependências do projeto usando o comando a seguir.
	```
	yarn
	```
	e em seguida use os comandos abaixo para criar o banco de dados e startar o servidor:
	```
	yarn typeorm migration:run
	```
	```
	yarn dev
	```


