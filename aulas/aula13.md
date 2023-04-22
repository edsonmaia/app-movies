# Aula 13 Criar Component VideoList e Página Pesquisar

Nesta aula vamos aprender como criar o componente VideoList e a página Pesquisar

[28:00]

1. Criar novo componente SearchVideoList
2. Refatorar página Search para exibir o componente SearcVideoList
3. SearchVideoList terá input de pesquisa, iremos trabalhar um useState para pegar os dados do campo e usar como critério de filter da listagem de vídeos.

* 00:00 Apresentação das tarefas do dia
* 00:55 Criar componente SearchVideoList
* 04:50 Utilizar componente SearchVideoList na page Search
* 07:20 CSS de SearchVideoList
* 09:46 - 18:30 Ajustes no JSX de SearchVideoList
* 18:30 Testando o filtro de vídeos
* 20:40 Ajustes no CSS
* 22:50 EmptyHeading exibir mensagem
* 27:35 Finalização

## Apresentação das tarefas do dia [00:00]

Continuação do trabalho da funcionalidade de Pesquisar Vídeos.

## Criar componente SearchVideoList [00:55]

1. Dentro da pasta `components` crie a pasta `SearchVideoList`
2. Dentro de `SearchVideoList` crie os arquivos `index.js` e `SearchVideoList.module.css`
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useState } from "react";

// filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)
    
    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
               <VideoList
                    videos={foundVideos}
                    emptyHeading={`Sem vídeos sobre "${searchText}"`}
                /> 
        </section>
    );
}

export default SearchVideoList;

~~~

## Utilizar componente SearchVideoList na page Search [04:50]

1. Na linha 16 do código no lugar de exibir o componente `<VideoList videos={videos}>` vamos usar o componente `<SearchVideoList videos={videos}>`
2. Faça o import do SearchVideoList:
`import SearchVideoList from "../../components/SearchVideoList";`

## CSS de SearchVideoList [07:20]

~~~css
.container {
    min-width: 280px;
    max-width: 1150px;
    margin: 0 auto;
}

.container input {
    width: 320px;
    padding: 15px 10px;
    margin-block: 0.5rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.125rem;
}

~~~

## Ajustes no JSX de SearchVideoList [09:46] [18:30]

Fizemos o uso de useState para pegar os dados do input search. O código já foi apresentado no início destas instruções.

## Testando o filtro de vídeos [18:30]

Como dica, seria interessante, tratarmos os termos transformando tudo para minúsculas e fazer o mesmo como os conteúdos de category e title, pois, assim ficaria completo no nosso recurso de busca.

## Ajustes no CSS [20:40]

Fizemos alguns ajustes no CSS do projeto. O CSS completo já foi apresentado no início destas instruções.
Relembrando, estes muitos ajustes só estão sendo feitos, porque não estou seguindo um padrão de projeto, um modelo completo do Figma, e isto, nos causa 'retrabalho'.

## EmptyHeading exibir mensagem [22:50]

No código apresentado o início destas instruções vemos como usar a props emptyHeading para exibir mensagens, antes do exibir a quantidade total de vídeos.

~~~javascript
    
~~~

Aos [25:15] e aos [26:40] foram feitos ajustes no  CSS.

## Finalização [27:35]

Nesta aula fizemos um novo componente que faz a busca na listagem total de vídeos, filtra os resultados e exibi a listagem com base em um critério que pode ser parte dos textos de category ou title.
Vimos também ajustes no CSS do projeto.
