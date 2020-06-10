# fastdispatcher
Projeto FICR

Projeto desenvolvido para o curso de Análise e Desenvolvimento de Sistemas da FICR.

# Para testar o site, siga as instruções abaixo.

FRONT-END
- Abrir terminal
- git init
- git clone https://github.com/dannilopires/fastdispatcher.git
- cd front-end
- npm install
- ng serve 
- abrir navegador e digitar: http://localhost:4200

BACK-END
- Abrir outro terminal
- cd back-end
- npm start 
- Servidor iniciará e ficará 'escutando' na porta 4000

MONGODB
 Para verificar persistência de dados no mongodb
- Abrir terceiro terminal
- Iniciar mongo
- show dbs
- use node-api
- show collections
- db.users.find().pretty()  
