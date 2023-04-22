# Aula 03 Criar componentes Header e Footer

## Componentes

Componente são elementos visuais a serem renderizados em tela. Tudo em uma página ou aplicação que repete, que pode ser reaproveitado, pode se tornar um componente. Ex.: Títulos, Botões, Formulários, inputs, Cabeçalhos, Rodapés, links, banners, cards, etc.

Nesta aula vamos criar os componentes Cabeçalho = Header e Rodapé = Footer

## Tópicos da Aula 03 no vídeo do YouTube

* 00:00 Apresentação do layout de referência inicial e tarefas da aula
* 01:30 O que são Componentes e motivação de criar deles
* 02:17 Criação do primeiro componente Cabeçalho = Header
* 02:50 Criar componente Header
* 03:50 Criar arquivos index.js e Header.module.css
* 04:40 CSS Module
* 04:53 index.js (Header) Criar o componente funcional Header
* 06:15 O que é JSX
* 08:15 npm start
* 08:25 Formatação CSS do Header
* 09:35 Uso do className para CSS Module usando styles
* 10:30 Fazer import do css
* 11:18 Continuar a Formatação CSS do Header
* 12:40 Como usar o Componente Header na nossa aplicação
* 13:16 Colocar Header em App.js
* 13:45 Importar o componente Header
* 14:50 até 20:33 Continuar as formatações CSS
* 20:34 Revisão da estrutura do componente Header
* 22:13 Criar componente Footer
* 29:55 Resumo final
* 31:09 até 33:33 Arquivo index.html
* 33:34 Finalização

## Criação dos componentes

1. Dentro src crie a pasta components

## Componente Header

1. Crie a pasta Header
2. Crie os arquivos: index.js e Header.module.css
3. No arquivo index.js faça o seguinte código:

~~~javascript
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<span>MaiaFlix</span>
			<nav>
				<a href="#">Home</a>
				<a href="#">Assistir</a>
			</nav>
		</header>
	);
}

export default Header;

~~~

> Nesta aula estamos usando tag a para fazer links, mas, depois iremos mudar para um componente.

### Como usar o componente Header

1. Abra o arquivo App.js
2. Importar o componente Header com a seguinte linha:

`import Header from "./components/Header"`

3. Dentro do fragment acima da tag h1, vamos usar o nosso componente <Header />
Ele é como uma tag com nome do componente.

~~~javascript
<>
	<Header />
	<h1>Hello World!</h1>
	<p>Olá Mundo! Estou aprendendo React JS!</p>
</>
~~~

4. Salve as alterações e veja o resultado no browser.

5. Depois altere o CSS no arquivo Header.module.css

~~~css
.header {
	background-color: #000;
	border-bottom: 2px solid #f44336;
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	padding: 0.75rem;
	font-size: 1.5rem;
	align-items: center;
	justify-content: space-between;
}

.header span {
	font-size: 2rem;
	color: #b71c1c;
	font-weight: 500;
}

.header nav {
	margin-right: 1rem;  
}

.header a {
	text-decoration: none;
	color: #fff;
	padding-inline: 0.5rem;
}

~~~

> O CSS dos componentes vai ser alterados ao longo das aulas.

## Criar componente Footer
 
1. Dentro de components crie uma nova pasta Footer
2. Dentro de Footer crie os 2 arquivos: index.js e Footer.module.css
3. No arquivo index.js faça o seguinte código:

~~~javascript
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>MaiaFlix &copy; Desenvolvido por Edson Maia 2023</h2>
		</footer>
	);
}

export default Footer;

~~~

### Importar e usar o componente Footer no arquivo App.js

1. Faça o import do Footer em App.js:

`import Footer from "./components/Footer"`

2. Abaixo do p coloque o nosso componente `<Footer />`

~~~javascript
<>
	<Header />
	<h1>Hello World!</h1>
	<p>Olá Mundo! Estou aprendendo React JS!</p>
	<Footer />
</>
~~~

3. Salve as alterações e veja o resultado no browser.

7. Depois altere o CSS no arquivo Footer.module.css

~~~css
.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;
	color: #fff;
	border-top: 2px solid #f44336;
	padding: 0.5rem;
}

.footer h2 {
	font-size: 1rem;
	font-weight: 500;
}

~~~

> O CSS dos componentes vai ser alterados ao longo das aulas.

## Resumo final [29:55]

## Mudar o favicon e título da página [31:09 até 33:33]

1. Abra o arquivo index.html 
2. Copie os arquivo favicon.png para a pasta public
3. Apague o favicon.ico
4. No arquivo index.html modifique a extensão do ícone, de ico mude para png

> Windows . para abrir teclado de Emojis
> procure por rolo de filmes e coloque no título
> 🎞 App Movies 🎞

5. Salve e atualize a página.

## Finalização [33:34]

### O que são componentes?

Componente são elementos visuais a serem renderizados em tela. Tudo em uma página ou aplicação que repete, que pode ser reaproveitado, pode se tornar um componente. Ex.: Títulos, Botões, Formulários, inputs, Cabeçalhos, Rodapés, links, banners, cards, etc.

### Componentes funcionais e Componentes de classe

#### Componentes funcionais (mais atual)
~~~javascript
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>MaiaFlix &copy; Desenvolvido por Edson Maia 2023</h2>
		</footer>
	);
}

export default Footer;

~~~

#### Componentes de classe (encontrado em códigos anteriores)

~~~javascript
class Contador extends React.Component{
       state = {
         contador:0
       }

       constructor(props){
          super(props)
          this.handleClick = this.handleClick.bind(this)
       }

       handleClick(){
          this.setState({contador: this.state.contador + 1})
       }

       render(){
          return (
             <div>
                 <p>
              contador: {this.state.contador}
                 </p>
                 <button onClick={this.handleClick}>
                      Incrementar
                 </button>
            </div>
          )
       }
}
~~~

Referência do exemplo de Componentes de classe:
<https://www.alura.com.br/artigos/boas-praticas-escrever-codigo-react-js>
