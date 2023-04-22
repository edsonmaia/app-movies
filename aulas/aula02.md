# Aula 02 Organizar projeto, JSX e fragment

## Limpar estrutura do projeto

Vamos apagar alguns arquivos:

1. De src apague 5 arquivos:

* App.css
* App.teste.js
* logo.svg
* reportWebVitals.js
* setupTests.js

Vai ficar apenas 3 arquivos: App.js, index.js e index.css

2. De public apague 4 arquivos:

* logo192.png
* logo512.png
* manisfest.json
* robots.txt

Deixe apenas o favicon.ico e index.html

## Ajustes nos códigos

### index.html de public

Abra o index.html da pasta public e deixe o código da seguinte forma:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>App Movies</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
~~~

### App.js de src

Dentro de App.js deixe o código da seguinte forma:

~~~javascript
function App() {
	return (
		<h1>Hello World!</h1>
	);
}

export default App;

~~~

Em resumo, apague os imports, os conteúdos dentro do return e coloque apenas a tag h1 com o texto Hello Word!

### index.js de src

Dentro de index.js deixe o código da seguinte forma:

~~~javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

~~~

Apague o import de reportWebVitals
Apague as linhas finais:

~~~javascript
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
~~~

## JSX e como usar o fragment no App.js

Substitua o conteúdo do return, aquele h1 pelo seguinte código:

~~~javascript
function App() {
	return (
		<>
		<h1>Hello World!</h1>
		<p>Olá Mundo! Estou aprendendo React JS!</p>
		</>
	);
}

export default App;

~~~

Salve as alterações (CTRL + S) e veja o resultado no browser.

### JSX

É o JavaScript + XML. Com ele escrevemos HTML, CSS e JS dentro das funções de retorno do React JS.

### Fragment <> </>

É uma tag 'vazia, sem nome dentro'. É como uma div genérica. Serve para 'envolver' elementos do return.
Dentro do return da função no React só podemos ter um elemento pai, no exemplo que fizemos tivemos que usar o fragment para envolver as tags h1 e p.
