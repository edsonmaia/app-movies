# Aula 05 Criar Componente Card e mapear json

Nesta aula vamos criar o componente Card e fazer o mapeamento de arquivo JSON para exibir informações.

* 00:00 Apresentação das tarefas do dia
* 01:00 Ajustes para retirar informações do App.js
* 02:25 Criar componente Card
* 08:13 Como usar o Card na nossa aplicação
* 10:00 CSS de Card
* 11:20 Ajuste do CSS do Container
* 14:00 Organizar os Cards com seus títulos
* 14:40 Criar section para organizar título e Card
* 15:30 CSS (global) index.css para criar uma formatação do .card que está em App
* 18:45 CSS de Card (ajuste)
* 20:30 Motivação para mapear o JSON
* 21:40 Ajustes no componente Card para usarmos o dados do JSON
* 23:50 Passar as props id para os Cards
* 25:20 Dinamizar os Cards pegando os IDs do JSON
* 25:40 Crie a pasta json dentro de src
* 26:59 Import dos videos do arquivo db.json
* 31:44 Map sem o uso do key, veja o erro nas Ferramentas de Desenvolvedor
* 32:10 Props key
* 33:20 Finalização da aula
* 34:20 Criar outras categorias com suas listas de Cards

## Criar componente Card

1. Dentro de components crie a pasta Card
2. Dentro dela crie os arquivos index.js e Card.module.css
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./Card.module.css";

function Card() {
    return(
        <section className={styles.card}>
            <a
                href="https://www.youtube.com/watch?v=B_nq7VTJZds"
                rel="noreferrer noopener"
                target="_blank">
                <img src="https://img.youtube.com/vi/B_nq7VTJZds/mqdefault.jpg" alt="Capa" />
            </a>
        </section>
    );
}

export default Card;

~~~

4. Faça o CSS do Card.module.css

~~~css
.card {
    display: flex;
}

.card img {
    width: 225px;
    border-radius: 8px;
}

~~~

5. Salve as alterações (CTRL + S).

## Como usar o componente Card

1. Abra o arquivo App.js
2. Use a tag do componente `<Card />` abaixo do Banner, dentro do Container
3. Faça o import do componente Card
`import Card from "./components/Card";`

## Ajustes no CSS de Container

OBS.: Vamos ajustar o CSS dele algumas vezes.
Vamos definir a altura mínima em 100vh.

~~~css
.container {
    width: 100%;
    min-height: 100vh;
    background-color: #191919;
    color: #fff;
    padding-block: 1rem;
    text-align: center;
}

~~~

## Criar uma section dentro do Container no arquivo App.js

Lembrando que é necessário criar um componente Category que irá acomodar o título e a lista de vídeos de uma categoria. Mas, vamos fazer isso, em outra aula.
Por enquanto vamos fazer essa 'atrocidade'.

~~~html
<section className="cards">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
</section>
~~~

## CSS index.css

Vamos fazer uma formatação geral dos cards

~~~css
/* Formatação geral dos cards */
.cards {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
}

~~~

OBS.: Esse código CSS foi feito só para gente ver como organizar o conteúdo dentro do Container.
Quando criarmos o componente Category, devemos apagar ele.

## Ajustes no componente Card para usarmos dados do JSON

1. Receber a props id no Card
2. Mude o href para template literals
~~~javascript
    href={`https://www.youtube.com/watch?v=${id}`}
~~~
3. Faça o mesmo no src, mude para template literals
~~~javascript
    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
~~~

~~~javascript
import styles from "./Card.module.css";

function Card({ id }) {
    return(
        <section className={styles.card}>
            <a
                href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </a>
        </section>
    );
}

export default Card;

~~~

No arquivo App.js passe a props id para o Card

~~~javascript
    <Card id="B_nq7VTJZds" />
    <Card id="8PjBddZ2cdo" />
    <Card id="B_nq7VTJZds" />
    <Card id="B_nq7VTJZds" />
    <Card id="B_nq7VTJZds" />
~~~

## Dinamizar a criação dos Cards com base nos IDs do JSON

1. Crie a pasta json dentro de src
2. Copie para dentro dela o arquivo db.json
3. Apague os Cards que colocamos para teste
4. Faça o importe de vídeos do arquivo db.json:
`import videos from "./json/db.json";`
5. Faça agora o seguinte código dentro do Container e da section cards:

~~~javascript
    <h2>Geografia</h2>
    <section className="cards">
    { videos.map(video => <Card id={video.id} key={video.id} /> )}
    </section>
~~~

### Props key

> É usada pelo React para controlar listas. Quando criamos a lista de Cards, cada lista precisa ter uma key, ou seja, uma chave única. Ela pode ser textual ou numérica, desde que seja com valores únicos.

## Finalização

Na parte final do vídeo fizemos a criação de outras categorias (h2) com a lista (section) de vídeos.
Porém, de forma repetida. Isso é sinal de que teremos que refatorar. Faremos isso nas aulas seguintes.
