# Aula 14 Criar componente Carousel React Slick

Nesta aula vamos aprender como criar o componente Carousel React Slick

[34:39]

Criar componente Carousel React Slick
[ Atualização da lista de videos.json ]
1. Usar lib React Slick para criar Carousel dos cards
2. Instalar o react-slick
3. Importar o CSS do react-slick
4. Criar componente Carousel personalizado usando o React Slick
5. Usar o Carousel na page Home
5. Ajustes no CSS dos componentes: Container, Category, Card e Carousel(carousel.css)

## Apresentação das tarefas do dia [00:00]

Vamos criar um Carrossel utilizando uma lid de terceiros. Mas, antes vamos atualizar nossa listagem de vídeos do arquivo json.

## Atualizar arquivo videos.json [01:11]

Copie o arquivo videos.json para a sua pasta json.
<https://drive.google.com/file/d/1x9nl8ROVYEp3UNQ3Xwva4A1hE8muPe5V/view>

## Link da documentação do Carousel React Slick

<https://react-slick.neostack.com/docs/get-started/>

## Criar componente Carousel [02:21]

### Instalar a lib react-slick [02:55]

1. Abra o terminal CTRL + J ou CTRL + '
2. Abra um 'novo' terminal CTRL + SHIFT + N
3. Digite o comando:

`npm install react-slick`

4. Após a instalação feche o 'novo' terminal

### Import do CSS [04:00]

1. Copie as urls ou faça instale via terminal e faça os imports no arquivo.
2. Copie os links do css que está em um CDN:
~~~html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
~~~
3. No nosso projeto acesse a pasta `public` e abra o arquivo `index.html`
4. Na área da head cole os dois links do CSS. Eu colei abaixo da meta theme color.
5. Salve e feche o arquivo.

> SHIFT + ALT + F serve para Formatar o documento. Ele corrige espaçamentos, indentações, etc.


## Criar componente Carousel [05:20]

1. Dentro da pasta `components` crie a pasta `Carousel` [06:00]
2. Dentro de `Carousel` crie os arquivos `index.js` e `carousel.css`
3. Faça o seguinte código em index.js:

~~~javascript
import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {

    const settings = {
        dots: false,
        infinite: false, // true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 5,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider {...settings} >
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;

~~~

### Settings do Carousel

Precisamos criar um objeto que as propriedades, que serão as configurações do nosso Carrossel, basta ler na documentação para que serve cada uma. No link API da documentação tem a listagem de todas as configurações e em Examples tem os exemplos de tipos de Carousel em cada um vem os seus tipos de propriedades. 

## Como usar o Carousel [14:33]

1. Abra o arquivo index.js da page Home
2. Da linha 16 até 20 está o nosso map das categories. Mas, as listas de vídeos por categorias são geradas na linha 18 onde está o nosso filter
3. Coloque a linha do filter entre o nosso componente Carousel:
~~~javascript
    {categories.map((category, index) =>
      <Category category={category} key={index} >
        <Carousel>
          {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
        </Carousel>
      </Category>
    )}
~~~
4. Faça o import do componente Carousel:
`import Carousel from "../../components/Carousel";`

## Testando o Carousel [15:55]

Veja o resultado no browser, ainda não está funcionando, mas, não se preocupe só faltam alguns ajustes.

## Ajustes no CSS [16:20]

Vamos fazer ajustes no Container, Card e no CSS global

## CSS do Container [16:45]

Já fizemos os ajustes nas instruções das aulas anteriores. Os ajustes de hoje são:
1. Mudar o padding-block para padding-bottom, a altura tem que ser min-height: 100vh.
2. Mudei o padding-inline de 1 para 1.5rem
3. Acrescentamos overflow hidden para esconder a barra de rolagem.

~~~css
.container {
    width: 100%;
    min-height: 100vh; /* aula 14 */
    background-color: #191919;
    color: #fff;
    padding-bottom: 1.5rem; /* aula 14 */
    text-align: center;
    padding-inline: 1.5rem; /* aula 14 */
    overflow: hidden; /* aula 14 */
}

~~~

> Sei que o CSS do Container já foi 'remendado' várias vezes.

## CSS do Category [19:40]

1. Adicionamos propriedades de largura, altura, margem e e alinhamentos.
2. Apaguei o flex-wrap de .category div.
3. Mudei o justify-content para flex-start.

Abaixo segue o código completo do CSS:

~~~css
.category {
    display: flex;
    flex-direction: column;
    /* aula 14 */
    min-width: 280px;
    max-width: 1200px;
    margin: 0 auto;
}

.category div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    /* aula 14 */
    width: 100%;
    height: 150px;
    align-items: center;
}

.category h2 {
    padding-block: 1rem;
}

~~~

## CSS do Card [26:00]

### Antes no index.js de Card adicione a className styles.capa na tag img

~~~javascript
<img
    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
    alt="Capa"
    className={styles.capa}
/>
~~~

Agora sim no Card.module.css aplicar efeitos de hover no card

~~~css
.card {
    display: flex;
}

.capa {
    width: 225px;
    border-radius: 8px;
}

/* aula 14 */
.capa:hover {
    transform: scale(1.15);
    border-radius: 10px;
    box-shadow: 0 0 10px #222;
}

~~~

## Ajuste no CSS do Header [28:20]

Após colocar os Carrosseis, eles passam por cima da Header, só que ela deve ficar sempre acima de tudo.
1. Abra o CSS do Header, na class .header adicione no final a propriedade:
~~~css
    z-index: 9999;
~~~

> Quando maior for o número mais o elemento fica na frente. Quando menor, mais o objeto fica para baixo.

## Revisão dos Ajustes do CSS [29:50]

Salve e feche todos os arquivos CSS

## Formatar CSS setas do Carousel [30:15]

1. Abra o arquivo `carousel.css` que está na pasta `Carousel`
2. Faça o seguinte código:

~~~css
.slick-prev:before,
.slick-next:before {
    /* color: red; */
    font-size: 2rem;
}

~~~

> As classes `.slick-prev` e `.slick-next` são dos botões de navegação do nosso Carousel.

3. Salve as alterações, feche o arquivo e veja o resultado no browser.

## Finalização [33:00]

Nesta aula fizemos um novo componente Carousel utilizando a lib React Slick. Ela não é tão moderna quanto outras, mas é bem simples de ser implementada nos projetos.
Vimos também ajustes no CSS para funcionar o Carousel e as consequências de utilização dele, como ter que ocultar barra de rolagem do Container e definir z-index para o Header.

## Formatar Barra de Rolagem [33:10]

1. Abra o arquivo `index.css` que está dentro de `src`
2. Pode apagar as linhas 20 até 27 que tinhamos de formatação genérica da section .cards.
3. Faça a partir da linha 20 o seguinte código:

~~~css
/* formatacao da barra de rolagem */
body::-webkit-scrollbar {
  width: 12px;                /* largura da barra de rolagem */
  background-color: #222;
}

body::-webkit-scrollbar-track {
  background: #222;           /* cor de fundo da barra de rolagem */
}

body::-webkit-scrollbar-thumb {
  background-color: #b71c1c;  /* cor do scroll (thumb) da barra de rolagem */
  border-radius: 20px;        /* arredondar o scroll (thumb) */
  border: 3px solid #222;     /* criar um espaco em volta do scroll */
}

~~~

4. Salve as alterações, feche o arquivo e veja o resultado no browser.

> As formatações que fizemos da barra só funcionam em navegadores que usam o motor 'webkit'.

Salve Devs, até a próxima!
