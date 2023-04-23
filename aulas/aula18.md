# Aula 18 Criar componente Formulário e página com rota

Nesta aula vamos aprender como criar componente Formulário e página com rota

[18:23]

1. Criar componente Form, index e css
2. Criar page VideoCadastre
3. Criar rota para acessar page VideoCadastre

## Motivo de criar o formulário [00:15]

> Nosso formulário irá cadastrar novos vídeos, iremos informar a URL do vídeo (do YouTube) e escolher a categoria.

## Criar componente Form [01:12]

1. Dentro de `components` crie a pasta `Form`
2. Crie os arquivos `index.js` e `Form.module.css`
3. No `index.js` faça o seguinte código:

~~~javascript
import styles from "./Form.module.css";

function Form() {
   
    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select>
                        <option value="-">Selecione uma categoria</option>

                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
           
        </section>
    );
}

export default Form;

~~~

## CSS do Form [06:23]

O código CSS do nosso formulário:

~~~css
.container {
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
}

.container h2 {
    margin-bottom: 1rem;
}

.container form {
    width: 100%;
    max-width: 90%;
    background-color: #333333;
    border-radius: 20px;
    padding: 36px 64px;
}

.container div {
    margin-bottom: 1rem;
}

.container label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

.container input, .container select {
    background-color: #FFF;
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 0.5rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.125rem;
}

.container button {
    background-color: #b71c1c;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 24px 28px;
    border: none; 
    cursor: pointer;
    color: #FFF;
    margin-top: 0.5rem;
}

.container button:hover {
    background-color: #f44336;
}

~~~

# Criar page VideoCadastre [07:45]

Vamos criar uma page para Cadastrar Vídeo

1. Dentro de `pages` crie a pasta `VideoCadastre`
2. Crie os arquivos `index.js`. Não vamos fazer o CSS para ele.
3. No `index.js` faça o seguinte código:

~~~javascript
import Header from "../../components/Header";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

function VideoCadastre() {

    return (
        <>
            <Header />
            <Container>
                <Form />
            </Container>
            <Footer />
        </>
    );
}

export default VideoCadastre;

~~~

4. Faça o import de todos os componentes da page.

## Criar rota para page VideoCadastre [10:55]

1. Abra o arquivo routes.js
2. Duplique a rota de favorites e faça a seguinte alteração:
`<Route path="/cadastre" element={<VideoCadastre />} ></Route>`
3. Faça o import da page VideoCadastre:
`import VideoCadastre from "./pages/VideoCadastre";`

O código completo de routes.js:

~~~javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/watch/:id" element={<Watch />} ></Route>
                    <Route path="/search" element={<Search />} ></Route>
                    <Route path="/favorites" element={<Favorites />} ></Route>
                    <Route path="/cadastre" element={<VideoCadastre />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;

~~~

4. Salve as alterações e feche o arquivo routes.js

## Testando o formulário [12:41]

1. Acesse no browser o seguinte endereço:
`localhost:3000/cadastre`

## Gerar a lista de categorias no select [13:40]

> Para preencher dinamicamente a listagem de categorias (categories) no nosso campo select, temos estas informações na const `categories` que está no arquivo `index.js` de `Category`

1. No index.js do Form
2. Faça o import da const categories de Category:
`import { categories } from "../Category";`
3. No return dentro do select abaixo do option que criamos faça os seguinte código:
~~~javascript
{ categories.map(item => {
    return <option key={item} value={item}>{item}</option>
}) }
~~~

> Da const categories vamos mapear cada elemento como item e retornar uma option passando na key, no value e no conteúdo o item, que é a categoria.

## Testando o formulário [17:10]

Veja no browser que o nosso select agora exibe dinamicamente a listagem de categorias.

## Finalizando [18:35]

Vimos nesta aula como criar um componente Form, uma page VideoCadastre, uma rota `/cadastre` para acessar a page. E por fim, vimos como gerar dinamicamente a listagem de categorias no nosso campo select.
Na próxima aula veremos como manipular e validar os dados do formulário.

Salve Devs, até a próxima!
