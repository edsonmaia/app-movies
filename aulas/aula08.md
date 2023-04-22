# Aula 08 Criar Rotas e Páginas, React Router DOM

Nesta aula vamos instalar a lib react-router-dom, criar páginas e rotas.

* 00:00 Apresentação das tarefas do dia
* 01:00 React Router DOM 
* 01:10 Instalar a lib react-router-dom 
* 02:29 Motivação da criação de páginas
* 03:00 Organização do projeto em páginas
* 03:10 Criação de pastas e arquivos das pages
* 04:30 Page Home
* 05:19 Refatorar arquivo App.js
* 06:20 'Problema' de imports no arquivo index.js de Home
* 06:40 Solução dos problemas de imports em Home
* 08:10 Page Watch
* 10:00 Testar page Watch
* 10:30 Rotas
* 10:50 Criar arquivo routes.js
* 15:00 Usar AppRoutes de router.js
* 16:30 Travou?!
* 17:20 Como acessar as rotas?
* 17:50 Refatorar componente Header
* 22:00 Finalizar a page Watch
* 24:24 CSS de Watch 
* 25:17 Incorporar um vídeo do YouTube em Watch
* 26:13 Ajuste no CSS do Container
* 27:00 Aumentar o tamanho do vídeo incorporado
* 27:50 Finalização da aula

## Instalar lib react-router-dom

1. Abra o terminal CTRL + J ou CTRL + '
2. Abra um 'novo' terminal (CTRL + SHIFT + N)
3. Digite o seguinte comando:
`npm install react-router-dom`
4. Após a instalação feche o terminal 'novo' que usamos para instalar a lib

## Organização do projeto para criação de páginas

1. Dentro da pasta src crie a pasta pages
2. Dentro de pages crie as pastas Home e Watch

> Cada page (página) dentro do React também é um componente.
> Deve ter seu arquivo index.js e seu CSS

## Page Home [04:30]

> Ela tera todo o código que temos dentro do arquivo App.js

1. Copie todo o conteúdo do arquivo App.js
2. Cole no index.js da page Home
3. Mude o nome do componente de App para Home
4. Mude o exporte default de App para Home

## Refatorar arquivo App.js [05:19]

1. Só para teste inicial, ante das rotas, apague todo o conteúdo do return e coloque apenas a page Home:
~~~javascript
<Home />
~~~

2. Apague os importes das linhas 1 até 6 e faça o import da page Home
`import Home from "./pages/Home";`

O código de App.js ficará assim:
~~~javascript
import Home from "./pages/Home";

function App() {

    return (
        <Home />
    );
}

export default App;

~~~

## Solução dos problemas de imports em Home

> Quando formos ver o resultado irão aparecer vários 'problemas' de imports do arquivo index.js de Home

Teremos que voltar dois níveis `../../` para acessar nossas pasta de components:

As linha 1 até 6 deverão ficar assim:
~~~javascript
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

~~~

Faça essas correções. Salve e veja o resultado no browser.

## Page Watch [08:10]

1. Código do arquivo index.js de Watch (Assistir):

~~~javascript
import styles from "./Watch.module.css";

function Watch() {
    return (
        <section className={styles.watch}>
            <h1>Assistir</h1>
        </section>
    );
}

export default Watch;

~~~

## Testar page Watch [10:00]

1. Em App.js substitua a page Home por Watch
2. Mude o importe
3. Salve e veja o resultado no browser.
4. Depois volte o código para exibir Home e faça o importe dele.

## Rotas [10:30]

1. Criar o arquivo `routes.js` dentro do `src`
2. Código do arquivo routes.js:

~~~javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/watch" element={<Watch />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

~~~

> Atenção para os imports do react-router-dom e das pages
> Salve e feche o arquivo routes.js

## Usar AppRoutes de router.js [15:00]

1. No arquivo App.js substitua o componente Home pelo nosso AppRoutes
2. Faça o import de routes.js
3. O código ficará assim:

~~~javascript
import AppRoutes from "./routes";

function App() {

  return (
    <AppRoutes />
  );
}

export default App;

~~~

## Travou?!

> Quando for testar as rotas, se o browser 'travar'.
> Abra o terminal, use CTRL + C para Parar a execução do npm start, confirme com S (Sim).
> Depois execute o comando npm start

Feche o arquivo App.js

## Como acessar as rotas? [17:20]

### Refatorar componente Header [17:50]

1. Substituir os links a por um componente Link do React Router
2. O código ficará assim:

~~~javascript
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>MaiaFlix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
            </nav>
        </header>
    )
}

export default Header;

~~~

> Não se esqueça de fazer o import do Link do react-router-dom
> A props to serve para indicarmos a rota que queremos ir ao clicar no Link

Salve e feche o arquivo index.js de Header
Salve e feche o arquivo index.js de Home

## Finalizar a page Watch [22:48]

Vamos fazer uma estrutura de página completa com cabeçalho, conteiner, rodapé.
O código ficará assim:

~~~javascript
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";

function Watch() {

    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Assistir</h1>

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;

~~~

## CSS de Watch [24:25]

~~~css
.watch {
    padding-top: 84px; /* 68px + 16px */

}

~~~

Salve as alterações e veja o resultado no browser.

## Incorporar um vídeo do YouTube em Watch

Abaixo da tag h1 cole o seguinte código:

~~~javascript
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KsFLXOTflsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
~~~

Apague a tag h1 com o texto Assistir

## Ajuste no CSS do Container [26:13]

Declare a propriedade `height: 100vh;`
No vídeo eu mostro essa alteração, mas, o 'correto', seria `min-height: 100vh;`


## Aumentar o tamanho do vídeo incorporado [27:00]

Mude as propriedades de tamanho para `width="854"` e `height="480"`

## Finalização [27:50]

Resumo geral da aula, separação da nossa aplicação em páginas (pages), a criação de rotas (routes) com a lib react-router-dom, ajustes no Header e no CSS de alguns componentes e páginas.
