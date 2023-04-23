# Aula 17 API Context do React e Hook Personalizado

Nesta aula vamos aprender como criar contextos e hook personalizado.

[35:16]

1. Criar contexts
2. Criar FavoriteContext
3. Criar Hook Personalizado para controlar estado do contexto
4. Ajustes nas rotas
5. Ajustes nos Cards

## Instalar a extensão React Context DevTool para Chrome [00:12]

1. Acesse o link:

<https://chrome.google.com/webstore/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf>

2. Clique no botão azul `Usar no Chrome`
3. Confirme no botão `Adicionar extensão`

## Projeto no Figma [00:58]

1. Acesse o projeto no link:

<https://www.figma.com/file/1Tbq4kboT998Z9AK2Vw4G6/app-movies?node-id=0%3A1&t=0YSUowbGYjmVb3RC-0>

2. Ele não está completo, mas tem imagens que você pode salvar e os prints de telas da funcionalidade de Favoritos que estamos desenvolvendo.

## Motivo de usar Contexto para poder armazenar lista de Favoritos [01:30]

> Context é um estado global que pode ser acessado por qualquer componente. Na prática a gente passa através de props informações de um componete pai para o um componente filho. Mas, entre componentes uma das formas é o uso de Context. Existe também o Redux que trabalha com a criação de Contextos.

Usando o ContextAPI para compartilhar globalmente estados entre rotas diferentes, dois ou mais componentes individuais.
Exemplo: Na lista de vídeos da página Home, marcar um vídeo como Favorito para criar a lista de Favoritos.

## Criar Context com a API Context do React [02:15]

1. Criar pasta `contexts` dentro de `src`
2. Crie o arquivo `Favorites.js`
3. Com o seguinte código:

~~~javascript
import { createContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
	const [ favorite, setFavorite ]	= useState([]);

	return (
		<FavoritesContext.Provider
			value={{favorite, setFavorite}} >
			{ children }
		</FavoritesContext.Provider>
	);
}

~~~

## Como usar o Contexto [06:50]

1. Abra o arquivo `routes.js`
2. Use `FavoriteProvider` para envolver as tags `Routes`
3. Faça o seguinte ajuste:

~~~javascript
<FavoritesProvider>
	<Routes>
		<Route path="/" element={<Home />}></Route>
		<Route path="/watch/:id" element={<Watch />}></Route>
		<Route path="/search" element={ <Search /> } ></Route>
        <Route path="*" element={ <PageNotFound /> } ></Route>
	</Routes>
</FavoritesContext>

~~~
4. Faça o importe do FavoriteProvider
`import FavoritesProvider from "./contexts/Favorites";`

5. Salve e feche o arquivo routes.js

## Usar a extensão para ver o Contexto que foi definido [07:55]

1. No browser use F12 para acessar as ferramentas de desenvolvedor.
2. Clique no botão >> `Mais guias` e escolha `React Context`
3. Atualize a página (F5), veja que temos um contexto chamado `MyFavorites`

> Nosso contexto é um (state global) array que por enquanto está vazio.

## Para adicinar itens na lista de Favoritos [09:34]

### Implementar função Favoritar, Hook Personalizado [10:20]

1. No arquivo `Favorites.js`
2. Abaixo da função `Provider` faça o seguinte código:

~~~javascript
/* Hook personalizado */
export function useFavoriteContext() {
	const { favorite, setFavorite }	 = useContext(FavoritesContext);

	function addFavorite(newFavorite) {

		/* verificar se tem item favorito repetido */
		const repeatedFavorite = favorite.some(item => item.id === newFavorite.id);

		/* nova lista recebe lista anterior */
		let newList = [...favorite]

		/* verificar se nao tem repetido entao adicione o item na listsa de favoritos */
		if(!repeatedFavorite) {
			newList.push(newFavorite)
			return setFavorite(newList) /* atualizar a lista */
		}

		/* se for repetido ele vai ser tirado da lista */
		newList = favorite.filter((fav) => fav.id !== newFavorite.id)

		/* nova lista atualizada */
		return setFavorite(newList)

	}

	return {
		favorite,
		addFavorite
	}

}

~~~

3. Não se esqueça do import do useContext [20:10]:
`import { createContexts, useState, useContext } from "react";`

## Aplicar Hook Personalizado no Card de Vídeo [20:40]

1. Abra o arquivo `index.js` do componente `Card`
2. Dentro da function, antes do return faça o seguinte código:

~~~javascript
    const { favorite, addFavorite } = useFavoriteContext()

~~~
3. Faça o import do hook [22:06]:
`import { useFavoriteContext } from "../../contexts/Favorites";`

> Estes códigos são para usarmos nosso Hook personalizado.

4. E abaixo do link crie a tag figure com img e no evento onClick adicionarmos Favorito:
~~~javascript
    <figure className={styles.icon}>
        <img
            src={iconeFavorite}
            alt="Ícone"
            onClick={() => addFavorite({id})}
        />
    </figure>
~~~

O código completo deverá ficar assim:

~~~javascript
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";     /* branco */
import iconUnfavorite from "./unfavorite.png"; /* vermelho */
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

	const { favorite, addFavorite } = useFavoriteContext()

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </Link>
            <<figure className={styles.icon}>
                <img
                    src={iconFavorite}
                    alt="Ícone"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );
}

export default Card;

~~~

## Testar se está funcionando [23:46]

1. Acesse em F12
2. Mais guias
3. React Context
4. Ao clicar no coração branco do Card, veja como será adicionado item no nosso MyFavorites
5. Um segundo clique no mesmo Card, retira ele da lista de favoritos.

## Controle visual dos ícones de Favoritar e Desfavoritar [25:15]

1. Abaixo da linha do nosso useFavoriteContext crie as seguintes linhas:
~~~javascript
	const isFavorite = favorite.some((fav) => fav.id === id)
	const icone = isFavorite ? iconUnfavorite : iconFavorite
~~~

2. A const `isFavorite` (é favorito?) avalia o seguinte:
o nosso state global favorite tem 'pelo menos um' elemento com id igual ao id do nosso card. Se tiver, é porque já está na lista de favorito.

3. A const `icone` serve para mudarmos o ícone do coração de acordo com a situação ou estado do vídeo. Se o card é de um vídeo que ainda não é favorito, tem que mostrar o coração branco, se for de um vídeo que está em favorito, tem que mostrar o coração vermelho.

> Sei que essa parte durante o vídeo ficou um pouco confusa, por causa dos nomes em inglês que eu utilizei.

* favorite.png -> ícone branco (favoritar)
* unfavorite.png -> ícone vermelho (desfavoritar)

### Mude o src da img para icone [28:10]

~~~javascript
    <figure className={styles.icon}>
        <img
            src={icone}
            alt="Ícone"
            onClick={() => addFavorite({id})}
        />
    </figure>
~~~

> A const icone irá mudar a imagem de acordo com a situação do vídeo. Se não for favorito (coração branco), se for favorito (coração vermelho).

### Outra forma de expressar o icone [28:32]

~~~javascript
    const icone = !isFavorite ? iconFavorite : iconUnfavorite
~~~

> A outra forma usa a negação !isFavorite
> Se não for favorito exiba iconFavorite senão iconUnfavorite

## Código completo de Card (34 linhas)

~~~javascript
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";     /* branco */
import iconUnfavorite from "./unfavorite.png"; /* vermelho */
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconFavorite : iconUnfavorite

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
                <img
                    src={icone}
                    alt="Ícone"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );
}

export default Card;

~~~

Salve e feche o arquivo index.js de Card.

## Finalizando [29:11]

## Listar dinamicamente a lista de Favoritos [30:05]

1. No `index.js` da page `Favorites`
2. Troque o texto Lista de Favoritos por:

~~~javascript
    { <VideoList videos={favorite} emptyHeading="Sem favoritos" /> }
~~~

3. Faça o import de VideoList:
`import VideoList from "../../components/VideoList";`

## Chame o nosso Contexto [31:45]

1. Antes do return dentro de Favorites chame o `useFavoriteContext`:

~~~javascript
const { favorite } = useFavoriteContext()
~~~

2. Faça o importe dele:
`import { useFavoriteContext } from "../../contexts/Favorites";`

> Com o context `favorite` que usa o contexto que criamos, teremos acesso à nossa lista de vídeos favoritos. Ela sera usada pelo nosso VideoList.

3. Veja o código completo do index.js de Favorites (27 linhas):

~~~javascript
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    { <VideoList videos={favorite} emptyHeading="Sem favoritos" /> }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;

~~~

## Testando a adição de vídeos em Favoritos [32:55]

1. No browser, na página inicial ou na página de pesquisa clique no coração para favoritar um ou mais vídeos.
2. Depois vá para a página Favoritos, veja lá os vídes que você favoritou.
3. Inclusive, você pode desfavoritar eles nessa ou em outras páginas.

## Exibir mensagem na page Favoritos [34:05]

Com a props emptyHeading do nosso VideoList podemos exibir uma mensagem indicando que não tem vídeos em favoritos.
> Se você quiser, pode usar emojis junto com a mensagem `emptyHeading="🤔 Sem favoritos 🤔"`

## Finalizando [34:50]

Vimos nesta aula como criar um contexto usando a API Context do React, para armazenar uma lista de vídeos favoritos. Usamos esse contexto para favoritar vídeos nas páginas Home e Search, para vermos a lista de favoritos na page Favorites.

Salve Devs, até a próxima!
