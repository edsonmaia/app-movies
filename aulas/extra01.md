# Extra 01 Ajustes no Projeto MaiaFlix

## Fonte personalizada

1. Acesse o `Google Fonts`
`https://fonts.google.com`

2. Escolha a fonte `Poppins`
`https://fonts.google.com/specimen/Poppins?query=poppins`

3. Selecione os tamanhos: Regular 400, Medium 500 e Semibold 600

4. Na opção <link> selecione as 3 linhas de texto:

~~~html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
~~~

5. No projeto abra o arquivo `index.html` que está em `public`

6. Cole as 3 linhas de link da fonte abaixo da tag head de abertura:

~~~html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="stylesheet" type="text/css" charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  <meta name="description" content="Web site created using create-react-app" />
  <title>🎞 App Movies 🎞</title>
</head>
~~~

> No caso de links de fonte é recomendável colocar os links antes de qualquer outra tag dentro da head.

7. Salve e feche o arquivo `index.html`.

8. Abra o arquivo index.css - nosso css global

9. No seletor body defina a fonte personalizada (apague aquela listagem grande de fontes que estava):
~~~css
body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
~~~

> Vamos usar a fonte 'Poppins' como fonte personalizada e quando ela não for carregada deverá ser usada uma fonte sem serifa.

10. Salve e feche o arquivo `index.css`.

## Responsividade

### Ajuste no CSS do Header

1. Abra o arquivo Header.module.css

2. No final do arquivo adicione os seguintes códigos:

~~~css

/* extra 01 responsividade */
@media (max-width: 480px) {
    .header span {
        font-size: 1.5rem;
    }
    .header a {
        font-size: 0.95rem;
        padding-inline: 0.5rem;
    }
}

@media (max-width: 380px) {
    .header span {
        font-size: 1.5rem;
    }
    .header a {
        font-size: 0.75rem;
    }
}

~~~

> Esses ajustes são só para telas bem pequenas de 480 para baixo.

3. Salve o arquivo e feche.


### Ajuste no CSS de Watch

1. Abra o arquivo Watch.module.css

2. No final do arquivo adicione os seguintes códigos:

~~~css

/* extra 01 responsividade */
@media (max-width: 1024px) {
    iframe {
        width: 100%;
        aspect-ratio: 16/9;
    }
}

~~~

> Para telas menores que 1024px o iframe vai ocupar 100% e manter o aspect-ratio 16x9

3. Salve o arquivo e feche.

## Criar botão para rolar para o topo

1. Dentro de components crie a pasta ScrollToTopButton

2. Dentro da pasta crie os arquivos index.js e button.css

3. Em index.js faça o seguinte código:

~~~javascript
import "./button.css";

function ScrollToTopButton() {

const handleClick = () => {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	})
}

  return (
    <button onClick={handleClick}>
      &#9650;
    </button>
  );
}

export default ScrollToTopButton;

~~~

4. No arquivo button.css faça o seguinte código:

~~~css
button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 9998;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 0;
    border-radius: 50%;
    background-color: #b71c1c90;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 10px #000;
}

~~~

5. Para usar o botão use a tag dele antes do Header nas pages Favorites, Home, Search e Watch
`<ScrollToTopButton />`

> A posição do botão dentro das páginas é indiferentes, pois, a posição dele de fato é definida no CSS.

6. Não se esqueça de fazer o import do botão

`import ScrollToTopButton from "../../components/ScrollToTopButton";`


## Page Search

1. Abra o arquivo index.js da page Searhc
2. Apague a tag h2 com o texto Pessquisar
3. Salve e feche o arquivo index.js
4. No Search.module.css mude o padding-top de 68px para 88px
5. Salve e feche o arquivo Search.module.css

Nesta aula extra vamos até este ponto aqui. Na próxima veremos como fazer o deploy do projeto na Vercel

Salve Devs, até a próxima!
