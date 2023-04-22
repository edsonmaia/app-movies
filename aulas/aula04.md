# Aula 04 Criar Componentes com props e children

Nesta aula vamos criar os componentes Banner e Container

## Tópicos da Aula 04 no vídeo do YouTube

* 00:00 Apresentação das tarefas da aula e layout básico no Figma
* 01:34 Revisão do que já fizemos até o momento
* 02:23 Ajustes no CSS do projeto, Footer
* 05:07 Ajustes no CSS do projeto, Header
* 09:23 Criar novos componentes
* 09:26 Criar componente Banner
* 10:40 Copiar imagens de banners para a pasta images dentro de public
* 11:30 Criar pastas e arquivos do componente
* 12:06 index.js do Banner
* 13:40 CSS do Banner
* 19:30 Criar componente Container
* 20:20 Criar pastas e arquivos do componente
* 22:03 Como colocar conteúdos nos componentes, usando props.children
* 23:09 Em App.js usar o componente Container e passar o children (h1 e p)
* 25:20 CSS do Container
* 29:30 Como dinamizar o Banner
* 31:45 Injetar style inline na tag de abertura
* 33:00 Retirar a propriedade background-image do CSS
* 34:02 Como dinamizar a informação sobre a imagem do Banner, usando props
* 36:25 Passar a props image no componente Banner

## Ajustes no CSS do Footer.module.css

Deixe o css da seguinte forma:

~~~css
.footer {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    border-top: 2px solid #f44336;
    padding-block: 0.5rem;
}

.footer h2 {
    font-size: 1rem;
    font-weight: 500;
}

~~~

Apague as propriedades:

~~~css
bottom: 0;
position: absolute;
~~~

Mude de padding para padding-block:
~~~css
padding-block: 0.5rem;
~~~

## Ajustes no CSS do Header.module.css

Apague as propriedades:
~~~css
top: 0;
font-size: 1rem;
~~~

Adicione
~~~css
height: 68px;
~~~

Mude o position absolute para fixed
Mude de padding para padding-block
padding-block: 0.75rem;

Mude o justify-content para space-around
justify-content: space-around;

Apague o seletor .header nav e suas formatações

Mude a unidade de medida do font-size para rem
font-size: 1.125rem; /* 18px */

O código deve ficar da seguinte forma:

~~~css
.header {
    background-color: #000000;
    border-bottom: 2px solid #f44336;
    position: fixed;
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header span {
    font-size: 2rem;
    color: #b71c1c;
    font-weight: 500;
}

.header a {
    text-decoration: none;
    color: #fff;
    padding-inline: 1rem;
    font-size: 1.125rem; /* 18px = 1.125rem; */
}

~~~

## Criar componente Banner

1. Dentro de components crie a pasta Banner
2. Dentro dela crie os arquivos index.js e Banner.module.css
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./Banner.module.css";

function Banner({ image }) {
    return(
        <div
            className={styles.banner}
            style={{ backgroundImage: `url('/images/banner-${image}.png')` }}
        ></div>
    );
}

export default Banner;

~~~

### props

> imagem é uma props ou propriedade, é um tipo de parâmetro genérico que usamos no React JS para passar informações para o componente funcional. Quando usamos entre { } estamos usando a desestruturação e definindo nomes para cada props.

### CSS inline

Dentro da div usamos o atributo style para definir o CSS inline. Nele nós passamos a props image para dinamizar o processo de troca de imagem do Banner. Se não usarmos esse atributo e CSS inline iríamos definir o background-image no CSS.

4. Faça o CSS do Banner.module.css

~~~css
.banner {
    width: 100%; /* 1920 x 347 px */
    height: 347px;
    //background-image: url('/public/images/banner-home.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 68px;
}

~~~

> Em resumo o componente Banner, usa a props image

5. Salve as alterações (CTRL + S).

## Como usar o componente Banner

1. Abra o arquivo App.js
2. Use a tag do componente `<Banner image="home" />` abaixo do Header
3. Faça o import do componente Banner
`import Banner from "./components/Banner";`

## Criar o componente Container

1. Dentro de components crie a pasta Container
2. Dentro dela crie os arquivos index.js e Container.module.css
3. Faça o seguinte código em index.js:

~~~javascript
import styles from "./Container.module.css";

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
}

export default Container;

~~~

### props.children

A props children serve para colocarmos qualquer texto, tags html e códigos JS dentro das tags do componente.

4. Faça o CSS do Container.module.css

~~~css
.container {
   width: 100%;
   height: 450px; /* 100% */
   background-color: #191919;
   color: #fff;
   padding-block: 1rem;
   text-align: center;
}

~~~

5. Salve as alterações (CTRL + S).

## Como usar o componente Container

1. Abra o arquivo App.js
2. Use a tag do componente `<Container>` abaixo do Banner

~~~javascript
<Container>
	<h1>Hello World!</h1>
    <p>Olá Mundo! Estou aprendendo React JS!</p>
</Container>
~~~

3. Faça o import do componente Container
~~~javascript
import Container from "./components/Container";
~~~

4. Salve as alterações e veja o resultado no browser.
