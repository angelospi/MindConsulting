# Mind Consulting
<h2>Índice</h2>

   * [Introdução](#Introdução)
   * [Desenvolvimento](#Desenvolvimento)
      * [Banco de dados](#Banco-de-dados)
      * [Back-end](#Back-end)
      * [Front-end](#Front-end)
   * [Funcionamento](#Funcionamento)
   * [Pré-requisitos](#remote-files)


<h2>Introdução</h2>
  Essa página web foi feita como uma parte do processo seletivo para estágio da empresa Mind Consulting  cujo objetivo era desenvolver uma plataforma que possibilite uma empresa e seus clientes gerenciarem suas informações.

<h2>Desenvolvimento</h2>
Para desenvolvimento da aplicação foi necessário utilizar um banco de dados onde foi armazenado informações sobre os usuários, uma ferramenta para o frontend e outra para o backend, todas elas melhor explicadas na sessão banco de dados e tecnologias.

<h2> Banco de dados</h2>
  O banco de dados utilizado foi o MongoDB por ele ser um banco de dados fácil de ser usado. Além de que, a aplicação não necessitava de muitas relações e por isso não foi necessário utilizar um banco de dados relacional. 
  
  Para utilizar esse banco foi necessário a instalação do pacote mongoose:
   ```
   yarn add mongoose
   ```
  Do qual permitiu realizar a conexão com o MongoDB.
  No final da aplicação foi necessário realizar o DUMP do BD, isso foi feito através do mongodump que já vem instalado no pacote MongoDB database tools. Sendo assim, após a instalação foi possível rodar o comando:
  ```
  mongodump --uri=[link de conexão com o BD]
  ```
  Dessa forma, obteve-se o arquivo "usuario" com um arquivo json e um bson dentro.
  
  <h2>Back-end</h2>
    No desenvolvimento do Back-end foi utilizado a tecnologia NodeJS onde foi instalado as dependências:
    
   * [Cors](#Cors)
   * [Express](#Express)
   * [Multer](#Multer)
  
  Para iniciar qualquer projeto primeiro foi criado a pasta "backend" e dentro dela através do prompt de comamdo foi executado o código: 
  ```
  yarn init -y
  ```
  Através disso foi criado as configurações iniciais já gerando o package.json.
  
  <h3>Cors</h3>
  O Cors é responsável por permitir que outras urls acessem nossa API. Sendo assim, foi instalado o pacote cors na nossa aplicação:
  
  ```
  yarn add cors
  ```
  
  <h3>Express</h3>
  O express foi necessário para nos auxiliar no roteamento do servidor, sendo instalado pelo comando:
  
  ```
  yarn add express
  ```
  
  <h3>Multer</h3>
  Por fim, no nosso backend temos o pacote Multer que irá permitir que nossa aplicação envie imagens para o BD, nesse caso as imagens foram salvas em uma pasta localmente e no BD foi armazenado suas URLS. Dessa forma, ele foi instalado através do código:
  
  ```
  yarn add multer
  ```
  <h2>Front-end</h2>
  Com a parte do backend e conexão com o banco prontas, partiu-se para o desenvolvimento do Front-end, onde foi criado uma pasta "frontend" já com as configurações inicias necessária para usarmos a tecnologia React:
  
  ```
  npm create-react-app frontend
  ```
  Dessa forma, o ambiente para desenvolvimento já está criado, a partir daí baixamos alguns pacotes que foi necessário utilizar como:
  
   * [react-router-dom](#react-router-dom)
   * [Axios](#axios)
   
   <h3>React-Router-Dom</h3>
   Essa biblioteca permiti o gerenciamento das rotas da aplicação, sendo assim foi instalada através do código:
   
   ```
   yarn add react-router-dom
   ```
   
   <h3>Axios</h3>
   E então para finalizar temos o axios, do qual será necessário para termos acesso a nossa API. Esse pacote pode ser instalado pelo código: 
   
   ```
   yarn add axios
   ```
  
  <h3>Funcionamento</h3>
  
  A página web se inicia com a tela de login onde o usuário poderá acessar a plataforma com seu login e senha, ou realizar cadastro no link sublinhado "Não tenho cadastro".
  Isso pode ser demonstrado através da Figura 1:
  
  ![loginmc](https://user-images.githubusercontent.com/28029224/98066779-c0676180-1e36-11eb-9936-988a36ec3ee1.PNG)
  
  Se caso o usuário for um usuário comum e não o administrador, seu perfil pode estar ativo ou desativado. Se estiver desativado ele não terá acesso a plataforma e se estiver ativado cairá na tela onde apresentará seus dados, demonstrado pela Figura 2:
  
  ![image](https://user-images.githubusercontent.com/28029224/98067662-db3ad580-1e38-11eb-9715-9c8290c86524.png)

Sendo assim, o usuário poderá sair da página voltando a tela inicial ou realizar modificações que deseja caindo na próxima tela:

![image](https://user-images.githubusercontent.com/28029224/98067761-0cb3a100-1e39-11eb-8bc7-8b6753687136.png)

Isso finaliza a parte do usuário comum.
Agora, se caso a pessoa que está logada for um administrador, o mesmo cairá em uma página mostrando os dados de todos os usuários com opções para editar, ativar ou desativar o usuário apresentado pela imagem abaixo: 

![image](https://user-images.githubusercontent.com/28029224/98067910-6320df80-1e39-11eb-8cb4-46068d11ffc7.png)

<h2>Pré-requisitos</h2>

 * É necessário possuir o NodeJS instalado na máquina
 * É ncessário ter um gerenciador de pacotes NPM ou YARN. Nesse caso foi utilizado o YARN
 
<h3> Como instalar</h3>
1. Faça um clone:

```
https://github.com/angelospi/MindConsulting.git
```
 
2.Rode o backend

```
cd backend
yarn start
```
3. Rode o frontend

```
cd frontend
yarn start
```

Pronto! Sua aplicação já irá abrir e poderá utiliza-lá como desejar.




  
  
  
  
  

  
  
  
