# ApiChallenge creada eb Node + Express

## Un API REST, a la cual se le envía un texto y responde con el mismo texto invertido.
return:
{ 
   "text":"tset",
   palindrome": true
}

palindromo https://es.wikipedia.org/wiki/Pal%C3%ADndromo

libs & frameworks utilizados
- NodeJs https://nodejs.org/en/
- ExpressJs https://expressjs.com/
- Mocha https://mochajs.org/
- Chai https://www.chaijs.com/
- SuperTest https://github.com/visionmedia/supertest#readme

- StandarJs https://standardjs.com/


## Previamente:
Dentro del directorio del proyecto puedes correr:
`npm install`

## Scripts disponibles

Dentro del directorio del proyecto puedes correr:
`npm start`
Abrir http://localhost:3000) si deseas acceder por el navegador

Si lo quieres utilizar con docker 
(IMPORTANTE: el front-end no esta configurado para usar la api con docker)
`docker run -it -p 4000:3000 node-challenge`
Abrir http://localhost:4000) si deseas acceder por el navegador


### `npm test`

## Postman
http://localhost:3000/iecho?text=radar
return :
{
    "text": "radar",
    "palindrome": true
}

http://localhost:3000/
return:
{
    "message": "ApiChallenge running"
}

http://localhost:3000/ddd
return:
{
    "error": "no text"
}
