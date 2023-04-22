# Aula 07 Solução de mapeamento, export, import e escopo

Nesta aula vamos solucionar o desafio da aula anterior e trabalhar com uma refatoração para resolver um 'problema' de escopo.

* 00:00 Apresentação das tarefas do dia
* 00:15 Solução proposta pelo Almeida
* 00:45 Solução do desafio
* 03:00 Teste para ver se funcionou a refatoração
* 03:10 Comentários sobre a solução do usuário Almeida
* 04:57 'Problema' de escopo da const categories e function filterCategory
* 06:35 Solução do 'problema' de escopo
* 07:40 Solução dos 'erros' no arquivo index.js de Category
* 09:20 Solução do erro da const categories
* 10:40 Ajuste do import para receber a const e da function
* 11:10 Solução do erro da function filterCategory
* 11:45 Ajuste do import para receber a const e da function
* 12:25 'Erro' do import de vídeos em App.js
* 13:10 Finalização da aula

## Solução do desafio

1. Copie o código de uma das exibições do componente Category
2. Apague o restante do código repetido.
3. Faça o seguinte código:

~~~javascript

{ categories.map((category, index) => 
    <Category category={category} key={index} >
        { filterCategory(index).map(video => <Card id={video.id} key={video.id} /> )}
    </Category>
)}

~~~

### Props key em Category

> Usei nesse exemplo a props key dentro da tag do componente Category para que o React não exiba um erro.
> Assim como fizemos no Card para não 'dar erro', também temos que fazer em Category. Na vídeo aula eu não dei ênfase para isto, mas, você pode fazer.

## 'Problema' de escopo da const categories e function filterCategory

A const `categories` e a function `filterCategory` foram criadas dentro do App.js que equivale à nossa página Home.
Porém, o ideal é a const estar em um arquivo json e a function em outro local que seja do mesmo 'contexto' ou do mesmo domínio.
No caso, ambas, fazem parte do domínio 'Category'.

## Solução do 'problema' de escopo [06:35]

1. Recortar as linhas 9 até 19 que tem a const `categories` e a function `filterCategory`. Apague as linhas em branco.
2. Abra o arquivo index.js do componente Category
3. Cole as linhas abaixo do import do css, antes da function Category:

~~~javascript
export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ]

export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
}

~~~

## OBSERVAÇÃO
> Coloque a palavra export antes da const e da function para que possamos fazer o importe dela em outros arquivos.

4. No arquivo `App.js` selecione as linhas 17 até 21 do código que fizemos hoje como solução de mapeamento de categories e comente, para não ficar aparecendo erros.

### Resolvendo os 'erros' no arquivo index.js de Category e em App.js

1. Video is not defined: Faça o import de videos acima do import de styles

`import videos from "../../json/videos.json";`

2. No arquivo App.js descomente as linhas 17 a 21 para vermos se está funcionando.

2.1 Erro na palavra 'categories' que não pode ser mapeada: Temos que expor a const categories que está no componente Category

2.2 A solução é simples:
* Na linha 4 coloque a palavra `export` antes de `const categories`
* Na linha 12 faça o mesmo com a function: `export function filterCategory(id) {`

2.3 No arquivo App.js na linha 3 de import de Category faça o seguinte ajuste:
`import Category, { categories, filterCategory } from "./components/Category";`

3. 'Erro' do import de vídeos em App.js: Apague a linha 7 de importe de vídeos.

## Finalização

Na parte final do vídeo apresentei a solução proposta para o desafio da aula anterior e resolvemos o 'problema' de escopo da const `categories` e da function `filterCategory`.

