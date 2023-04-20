# Aula 20 Criar componente Loader

## Component Loader

1. Dentro de `components` crie a pasta `Loader`
2. Dentro do Loader crie os arquivos `index.js` e `Loader.module.css`
3. Em index.js faça o seguinte código:

~~~javascript
import styles from "./Loader.module.css";

function Loader() {
    return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    );
  };
  
  export default Loader;

~~~

# CSS de Loader

~~~css
.container {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    border: 5px solid #f3f3f3;     /* cor do border */
    border-top: 5px solid #b71c1c; /* cor do border quando em rotação */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    text-align: center;
}
  
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

~~~

## Como usar o Loader

1. Abra o `index.js` de `SearchVideoList`
2. Abaixo das linhas dos states crie o seguinte código:

~~~javascript
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, []);
~~~

3. Faça o import de useEffect do react:
`import { useEffect, useState } from "react";`

> Criamos um state para guardar o estado do nosso Loader
> Trabalhos com o hook useEffect porque temos um contador de tempo
> Após o tempo em milissegundos o setLoading recebe false
> e neste estado podemos fazer a renderização de outra parte da aplicação.

### Renderização condicional

1. O nosso componente VideoList só poderá ser renderizado após a exibição do Loader
2. Mude o código dele para o seguinte:

~~~javascript

{ loading ? <Loader /> :
    <VideoList
        videos={foundVideos}
        emptyHeading={`Sem vídeos sobre "${searchText}"`}
    />
}

~~~

3. Faça o import do Loader:
`import Loader from "../../components/Loader";`

> A renderização será condicional.
> O React vai avaliar se loading for true então ele irá carregar o Loader,
> senão, ele irá carregar o componente VideoList

## Agora podemos testar

Ao abrir a rota Pesquisar irá aparecer o Loader por 500 milissegundos e depois será renderizada a listagem de vídeos.

Salve Devs, até a próxima!
