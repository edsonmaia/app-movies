# Aula 06 Criar Componente Category e filtrar vídeos por categoria

Nesta aula vamos criar o componente Category e filtrar vídeos por categoria.

* 00:00 Apresentação das tarefas do dia
* 00:50 Novo arquivo JSON, videos.json
* 02:00 Atualizar o import de mapeamento dos vídeos
* 02:50 Motivação da criação de novo componente Category
* 03:10 Criar componente Category
* 08:50 Usar o componente Category
* 11:18 CSS de Category
* 13:35 Preparação para filtrar vídeos por categoria
* 14:30 Criar a const cateogories
* 15:30 Apague código anterior que estava comentado e comente o atual
* 16:00 Filtrar vídeos por categoria
* 16:20 Criar função filterCategory
* 18:39 Como usar a função filterCategory
* 19:40 Copie a estrutura de Category para fazer as outras categorias
* 22:10 Finalização da aula
* 23:35 Desafio para a próxima aula

## Atualizar o arquivo JSON

Copie o arquivo videos.json para a pasta json. Ele está na descrição do vídeo.
Ele tem mais vídeos e uma propriedade chamada category.

### Atualize o importe de mapeamento dos vídeos

`import videos from "./json/videos.json;`

## Criar componente Category

1. Dentro de components crie a pasta Category
2. Dentro dela crie os arquivos index.js e Category.module.css
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./Category.module.css";

function Category({ title, children }) {
    return(
        <section className={styles.category}>
            <h2>{title}</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;

~~~

4. Faça o CSS do Category.module.css

~~~css
.category {
    display: flex;
    flex-direction: column;
}

.category div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
}

~~~

5. Salve as alterações (CTRL + S).

## Como usar o componente Category

1. Abra o arquivo App.js
2. Selecione o código da aula anterior que está no Container e faça um comentário
3. Dentro do Container use a tag do componente:
~~~javascript
<Category category="Geografia">
    { videos.map(video => <Card id={video.id} key={video.id} /> )}
</Category>
~~~

4. Faça o import do componente Category
`import Category from "./components/Category";`

## Preparação para filtrar vídeos por categoria

1. Dentro do arquivo App.js crie a `const category`
OBS.: Pode ser fora ou dentro da função App

~~~javascript
const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
]
~~~

2. Limpar o código para focar no filtro por categoria:
2.1 Apague as linhas comentadas do código feito na aula anterior.
2.2 Comente as linhas de código que fizemos o teste do componente Category

## Filtrar vídeos por categoria

1. Criar uma função `filterCategory`, abaixo da const `categories`
OBS.: Pode ser criada fora da função App ou dentro dela

~~~javascript

function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
}

~~~

2. Usar a função filterCategory
2.1 Descomente os códigos:
~~~javascript
<Category category="Geografia">
    { videos.map(video => <Card id={video.id} key={video.id} /> )}
</Category>
~~~

2.2 Substitua videos por filterCategory(0)

3. Copie a estrutura de Category para fazer as outras categorias
OBS.: Vemos que terá muita repetição de código, mas, vamos refatorar na próxima aula.

~~~javascript
<Category category="Geografia">
    { filterCategory(0).map(video => <Card id={video.id} key={video.id} /> )}
</Category>

<Category category="Como fazer e usar">
    { filterCategory(1).map(video => <Card id={video.id} key={video.id} /> )}
</Category>

<Category category="Astronomia e Geografia">
    { filterCategory(2).map(video => <Card id={video.id} key={video.id} /> )}
</Category>

~~~

## Finalização

Na parte final do vídeo fizemos a criação de outras categorias com a lista de vídeos.
Porém, de forma repetida. Isso é sinal de que teremos que refatorar. Vamos fazer isso na próxima aula.

## Desafio da aula
Aos 23:35 do vídeo eu mostro como pegar o título a partir da const `categories`. Isto, vai facilitar o processo de refatoração da exibição das listagem de categorias que iremos implementar na próxima aula, mas que deixo como desafio para vocês.

### Ajustar a props category [24:20]

Passe dentro da props category a informação sobre a categorie[indice]

~~~javascript
<Category category={categories[0]}>
    { filterCategory(0).map(video => <Card id={video.id} key={video.id} /> )}
</Category>

<Category category={categories[1]}>
    { filterCategory(1).map(video => <Card id={video.id} key={video.id} /> )}
</Category>

~~~

## DESAFIO

Refatore o código para que não tenhamos que repetir a utilização do componente Category.
Implemente uma funcionalidade que consiga exibir todas as listas de vídeos de acordo com cada category que temos no arquivo video.json
