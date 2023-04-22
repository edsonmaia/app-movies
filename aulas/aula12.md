# Aula 12 Criar Component VideoList e Página Pesquisar

Nesta aula vamos aprender como criar o componente VideoList e a página Pesquisar

1. Criar nova página Search
2. Criar nova rota para /search
3. Criar novo componente VideoList que lista todos os vídeos
   Este componente será usado para exibir a lista de vídeos
Vamos continuar na próxima aula a implementação da funcionalidade de buscar por termo e filtrar vídeos

* 00:00 Apresentação das tarefas do dia
* 00:34 Ajustes no código
* 01:25 Criar page Search (Pesquisar)
* 05:20 Criar uma nova rota para a page Search
* 06:37 Criar link no Header
* 07:42 Ajustes no JSX da page Search
* 10:40 Motivação para criar componente que Liste todos vídeos
* 12:20 - 21:25 Criar componente VideoList 
* 21:30 Utilizar VideoList na page Search
* 24:15 CSS de VideoList
* 25:06 Finalização

## Apresentação das tarefas do dia [00:00]

Criação da funcionalidade de pesquisa (search), componente que exiba a lista de vídeos e uma página para fazermos as pesquisas.

## Ajustes no código [00:34]

1. Vamos apagar o código feito na aula 11 sobre useState, apaguar linhas em branco. Apague o import do useState.
2. Tira os comentários das linhas 17 até 21 que tem o map de categories.

## Criar page Search (Pesquisar) [01:25]

1. Dentro da pasta `pages` crie a pasta `Search`
2. Dentro de `Search` crie os arquivos `index.js` e `Search.module.css`
3. Faça o seguinte código em index.js:

~~~javascript
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css";

function Search() {
    return (
        <>
        <Header />
        <Container>
            <section className={styles.search}>
                <h2>Pesquisar</h2>
                
                Lista de vídeos
                
            </section>
        </Container>
        <Footer />
        </>
    );
}

export default Search;

~~~

## CSS da page Search

~~~css
.search {
    width: 100%;
    min-height: 600px;
    padding-top: 68px;
    display: flex;
    flex-direction: column;
}

~~~

## Criar uma nova rota para a page Search [05:20]

1. Abra o arquivo routes.js
2. Duplique a rota watch e abaixo faça a seguinte alteração:
`<Route path="/search" element={<Search />} ></Route>`
3. Faça o import da page Search `import Search from "./pages/Search";`
4. Salve o arquivo e feche

## Criar link no Header [06:37]

1. Abra o arquivo index.js do componente Header
2. Duplique o link watch e abaixo faça a seguinte alteração:
`<Link to="/search">Pesquisar</Link>`
3. Salve e feche o arquivo Header. 

## Ajustes no JSX da page Search  [07:42]

Fizemos a inclusão dos componentes Header, Container e Footer.

## Motivação para criar componente que Liste todos vídeos [10:40]

Vamos criar um componente que exibe toda a nossa listagem de vídeos e em seguida podemos fazer um componente que pesquise nessa lista total de vídeos.

## Criar componente VideoList [12:20] [21:25]

1. Em components crie a pasta `VideoList`
2. Dentro de `VideoList` crie os arquivos `index.js` e `VideoList.module.css`
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./VideoList.module.css";
import Card from "../Card";

function VideoList({ videos, emptyHeading }) {
    const count = videos.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'vídeos' : 'vídeo'
        heading = `${count} ${noun}`
    }

    return (
        <>
            <h2>{heading}</h2>
            <section className={styles.videos}>
                { videos.map((video) => <Card id={video.id} key={video.id} /> )}
            </section>
        </>
    );
}

export default VideoList;

~~~

## Utilizar VideoList na page Search [21:30]

Vamos utilizar o componente VideoList para listar todos os vídeos.

> Passamos as props videos que é a nossa lista de vídeos do arquivo videos.json e a props emptyHeading é o texto que queremos exibir acima da nossa listagem de vídeos.

1. Faça o import de videos e de VideoList.
3. Use o componente VidoList no lugar do texto abaixo de h2:

~~~javascript
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css";
import videos from "../../json/videos.json";
import VideoList from "../../components/VideoList";

function Search() {
    return (
        <>
        <Header />
        <Container>
            <section className={styles.search}>
                <h2>Pesquisar</h2>
                
                <VideoList videos={videos} />
                
            </section>
        </Container>
        <Footer />
        </>
    );
}

export default Search;



~~~

Aos [23:30] fizemos ajustes no CSS de Search.

## CSS de VideoList [24:15]

~~~css
.videos {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-top: 0.5rem;
}

~~~

Salve e feche os arquivos de css e dos componentes.

## Finalização [25:06]

Na próxima aula vamos implementar o componente de busca, colocar o input do type search e fazer a função para filtrar os vídeos de acordo com o termo buscado.
