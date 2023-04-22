# Aula 10 Criar Rotas Dinâmicas, Exibir vídeo por ID do card

Nesta aula vamos criar rota dinâmica para exibir vídeo por id do card

1. Criar rota dinâmica passando parâmetros
2. Ajuste no routes.js
3. Ajuste no componente Watch para pegar o id dos parâmetros da rota
4. Buscar o vídeo por id na nossa lista de videos.json
5. Exibir o iframe com base no id do card que foi clicado
6. Ajuste no componente Card para usar o Link e ir para rota /watch/id passando o id do video

* 00:00 Apresentação das tarefas do dia
* 00:49 Criar rota dinâmica
* 01:13 Arquivo routes.js
* 02:30 Componente Watch
* 04:18 Trabalhar com parâmetros do react-router-dom
* 08:25 'Erro' no id de src: mude ele para `video.id`
* 08:47 Testando o Watch passando o id na url
* 09:53 Dinamizar a passagem de ID para abrir o vídeo
* 10:45 Usar Link no lugar da tag a
* 13:20 Testar se os Cards estão dinâmicos
* 14:20 Ajuste na rota dinâmica
* 17:30 Finalização


## Criar rota dinâmica [00:49]

1. Abra o arquivo `routes.js`
2. Na linha 11 da rota /watch faça o acréscimo do parâmetro `:id`:
`<Route path="/watch/:id" element={<Watch />} ></Route>`
3. Salve as alterações no arquivo e feche

## Componente Watch [02:30]

1. Abra o arquivo index.js do componente
2. Na tag `iframe` quebre as linhas das propriedades. Isto facilita a leitura do código.
3. Mude a propriedade src para template literals:

`src={`https://www.youtube.com/embed/${video.id}`}`

4. Dentro da function Watch antes do return acrescente as seguintes linhas:

~~~javascript
    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id })
    console.log(video)

~~~

5. Não se esqueça de fazer o import do `useParams` do `react-router-dom`
6. Não se esqueça de fazer o import de `videos` do nosso arquivo `videos.json`
7. O console.log(video) é para vermos que ID que estamos recebendo como params
8. O código de index.js de Watch ficará da seguinte forma:

~~~javascript
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";

function Watch() {
    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id })
    console.log(video)

    return (

        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        width="854" height="480" 
                        src={`https://www.youtube.com/embed/${video.id}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;

~~~

## Testando o Watch passando o id na url [08:25]

1. Na url após /watch passamos um /id-valido
2. Esse id-valido seria um id que está na nossa lista de vídeos do json

## Dinamizar a passagem de ID para abrir o vídeo [09:53]

1. O Card irá passar o id para Watch. Abra o index.js de Card
2. Substitua a tag a por um Link, faça o import dele [10:45]
`import { Link } from "react-router-dom";`

3. Use a props to

~~~javascript
<Link to={`/watch/${id}`} >
    <img
        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
        alt="Capa"
    />
</Link>
~~~

4. Apague as linhas do href, rel e target
5. Vai ficar apenas a tag img dentro do nosso Link

## Testar se os Cards estão dinâmicos [13:20]

Basta clicar no Card do vídeo que ele vai para a rota `/watch` e abre o vídeo de acordo com o ID dele.

## Ajuste na nossa rota dinâmica [14:20]

1. No arquivo index.js de Watch
2. No lugar do console.log(video) digite o seguinte código:
`if(!video) { return <PageNotFound /> }`

> A linha do if serve para redirecionarmos para a PageNotFound caso o vídeo não tenha ID da nossa lista de vídeos.

3. Não se esqueça de fazer o importe da `PageNotFound`

## Finalização [17:30]

Criamos uma rota dinâmica que recebe um id como parâmetro. Utilizamos o recurso do useParams do react-router-dom. Fizemos ajustes nos componentes Watch e Card para que o card, use a rota /watch, passe o id do vído clicado para abrir o nosso 'player'.
Fizemos ajuste para chamar PageNotFound caso, o id passado não esteja na nossa lista de vídeos do arquivo videos.json
Dicas e sugestões do que iremos fazer nas aulas seguintes neste projeto.
