# Aula 09 Criar Page 404 Page Not Found e Ajustes no CSS

Nesta aula vamos instalar a lib react-router-dom, criar páginas e rotas.

* 00:00 Apresentação das tarefas do dia
* 00:44 Quebrou o Layout
* 01:43 Criar nova página Erro 404
* 07:33 Como usar a PageNotFound
* 07:50 Criar nova rota para PageNotFound
* 09:37 Estrutura de página completa para PageNotFound
* 14:10 Ajustes no CSS
* 14:50 Ajuste no CSS de Footer
* 16:00 Ajuste no index.css
* 18:24 Mais Ajustes no CSS
* 20:19 CSS de Category
* 22:18 CSS de Container
* 23:22 CSS do container de PageNotFound
* 26:12 Finalização da aula

## Quebrou o layout do container de Home

No arquivo Container.module.css
Ajuste a propriedade altura mínima para 100vh:
`min-height: 100vh;`
Apague o comentário da aula 05

## Criar nova página Page Not Found

1. Dentro da pasta `pages` crie a pasta `PageNotFound`
2. Dentro de PageNotFound crie os arquivos `index.js` e `PageNotFound.module.css`
3. O código de index.js ficará da seguinte forma:

~~~javascript
import erro404 from './erro404.png';
import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageNotFound() {
    return (
        <>
        <Header />
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado!</h2>
            <img src={erro404} alt="Logo de Página não localizada" />
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound;

~~~

### Arquivo erro404.png

> O link do arquivo erro404.png está na descrição do vídeo do YouTube e também tem no arquivo Figma do projeto.
> [Link no Drive](https://drive.google.com/file/d/1iBLhO8zIhpWm2EIbC6D2VA7elowRBkRq/view?usp=sharing)
> A imagem deve ficar dentro da pasta da PageNotFound

## CSS de PageNotFound

~~~css
.container {
    padding-top: 84px;
    width: 100%;
    height: 100%; /* era 80vh no vídeo */
    background: #222;
    color: #fff;
    text-align: center;
}

.container h2 {
    padding-block: 2rem;
}

.container img {
    height: 450px;
    padding-bottom: 2rem;
}

~~~

## Como usar a PageNotFound [07:33]

### Criar nova rota para PageNotFound [07:50]

1. Abra o arquivo routes.js
2. Duplique a linha (CTRL + SHIFT + Seta para baixo) da rota watch
3. Mude o path para `path="*"` e o element para `<PageNotFound />`

Salve as alterações, feche o arquivo e teste no browser.

## Estrutura de página completa para PageNotFound [09:37] 

1. Adicione os componentes Header e Footer.
2. O conteúdo estará na nossa section `.container`
3. Faça os ajustes do CSS.
4. Nos códigos anteriores já temos o código completo da page e do css.

> No vídeo aos 11:35 vemos como fazer outros ajustes do CSS do container da page.

## Ajustes no CSS [14:10]

1. Ajustes no `Container.module.css` que fizemos no início da aula. O ideial é `min-height: 100vh;`
2. Ajustes no `Footer.module.css`: Apague a linha de position absolute [14:50]
3. Ajustes no CSS Global `index.css` [16:00]: 
3.1 Fazer os resets no nosso CSS global:
~~~css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

~~~
3.2 Apague o `margin: 0;` que está no seletor `body`
3.3 Apague também as linhas de Formatação dos .cards que colocamos na aula 05 linhas 20 até 27

Salve as alterações e feche o arquivo.

## Mais Ajustes no CSS [18:24]

1. CSS do Footer, defina a altura `height: 50px;`
2. CSS de Category, adicione a formatação da tag h2 [20:19]:
~~~css
.category h2 {
    padding-block: 1rem;
}
~~~
3. CSS de Container, aumente o padding-block para 1.5rem [22:18]
4. CSS do container de PageNotFound [23:22]:
No vídeo eu indico mudar a altura para um valor absoluto.
Mas, deixe a configuração de `min-height: 100vh;`
As configurações da img pode deixar igual eu indiquei no CSS da PageNotFound.
Como está no tópico após a criação da page:
~~~css
.container {
    padding-top: 84px;
    width: 100%;
    height: 100vh; /* era height: 100%; */
    background: #222;
    color: #fff;
    text-align: center;
}

.container h2 {
    padding-block: 2rem;
}

.container img {
    height: 450px;
    padding-bottom: 2rem;
}

~~~

## Finalização [26:12]

Considerações finais sobre o CSS. Nas aulas, estamos fazendo vários ajustes, porque eu vou desenvolvendo e gravando os vídeos, estes muitos ajustes acontecem por causa disto. Eu faço, testo, depois decido mudar.
Se, você seguir um projeto desenhado no Figma, com todos os parâmetros, não terá 'retrabalho'.
