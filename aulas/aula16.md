# Aula 16 Criar Page e Route Favorites

## Criação de página Favoritos

1. Criar page `Favorites`
2. Criar `index.js` e `Favorites.module.css`
3. Código do `index.js` de Favorites:

~~~javascript
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";

function Favorites() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    Lista de Favoritos
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;

~~~

## CSS da page Favorites

~~~css
.favorites {
    padding-top: 88px;
    
}

~~~

## Refatorar componente Header

Retirar o link Assistir e criar link para Favoritos

~~~javascript
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>MaiaFlix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
            </nav>
        </header>
    )
}

export default Header;

~~~

## Criar Rota de Favoritos

1. Abra o arquivo routes.js
2. Crie uma nova rota para /favorites que abra a page Favorites
3. Faça o import da page Favorites

~~~javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Favorites from "./pages/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/watch/:id" element={ <Watch /> } ></Route>
                <Route path="/search" element={ <Search /> } ></Route>
                <Route path="/favorites" element={ <Favorites /> } ></Route>
                <Route path="*" element={ <PageNotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

~~~

## Refatorar Card para exibir ícone Favoritar

1. Abra o arquivo index.js de Card
2. Copie as imagens favorite.png e unfavorite.png para a pasta Card

> As imagens estão no figma, no repositório do drive e na descrição do vídeo
<https://www.figma.com/file/1Tbq4kboT998Z9AK2Vw4G6/app-movies?node-id=0%3A1&t=0YSUowbGYjmVb3RC-0>

3. Faça o import das imagens de favoritos
~~~javascript
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
~~~

4. Abaixo de Link crie a tag figure e dentro dela coloque a img do ícone
5. Refatorar o CSS para exibir o ícone Favoritar e formatar img da capa usando className capa

/* index.js de Card */

~~~~javascript
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";

function Card({ id }) {

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt="Capa"
                    className={styles.capa}
                />
            </Link>
            <figure className={styles.icon}>
                <img src={iconFavorite} alt="Ícone" />
            </figure>
        </section>
    );
}

export default Card;

~~~

/* Card.module.css de Card */
~~~css
.card {
    display: flex;
    /* aula 16 */
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
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

/* aula 16 */
.icon {
    width: 30px;
    height: 30px;
    background-color: #00000050;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-right: 5px;
    margin-bottom: 10px;
}

.icon:hover {
    cursor: pointer;
    background-color: #000000;
}

~~~

Na próxima aula vamos implementar as funcionalidades de Contexto para criar nossa lista de favoritos.

Salve Devs, até a próxima.
