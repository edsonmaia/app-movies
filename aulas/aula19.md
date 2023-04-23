# Aula 19 Receber dados do Formulário, processar e validar form

Nesta aula vamos aprender como pegar os dados do formulário, processar eles, usando states, criando objeto, usando localStorage e fazer por fim as validações sem o uso de libs de terceiros.

[38:53]

* 00:03 Apresentação do Formulário
* 03:02 Receber ou Pegar dados do Form
* 07:17 Processar dados do Form
* 07:53 Função onSave chamada no evento onSubmit do Form
* 08:10 Criar função onSave
* 11:12 Criar estados para guardar dados do Form
* 11:50 Criar estados para guardar erros
* 12:40 Criar const para guardar url e category em objeto
* 15:30 Persistência de Dados localStorage 
* 18:52 Resetar estados e inputs
* 21:40 Início da validação
* 22:48 Tratamento de Erros
* 24:30 Validação da Category
* 26:53 Validação de URL
* 28:20 Exibir Erros
* 29:39 Validação de URL
* 34:13 1ª Mudança na ordem de validações
* 36:42 2ª Mudança na ordem de validações
* 37:13 Testes das validações
* 37:54 Considerações finais sobre validações

## Apresentação do Formulário [00:03]

Reapresentação do formulário de cadastro que fizemos na aula anterior. E detalhes sobre como vamos fazer para manipular os dados.

## Receber dados do Form [03:02]

1. Abra o arquivo index.js de Form
2. Crie um state para cada campo do formulário:

~~~javascript
    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
~~~

3. Faça o import do useState do react:
`import { useState } from "react";`

4. Em cada input passe o state no value e defina no método onChange o set dos states:

~~~javascript
<div>
    <label>URL do vídeo</label>
    <input
        type="text"
        placeholder="Digite a URL do vídeo"
        required="required"
        value={url}
        onChange={ e => setUrl(e.target.value) }
    />
</div>
<div>
    <label>Categoria</label>
    <select
        required="required"
        value={category}
        onChange={ e => setCategory(e.target.value) }
    >
        <option value="-">Selecione uma categoria</option>
        { categories.map(item => {
            return <option key={item} value={item}>{item}</option>
        }) }
    </select>
</div>

~~~

> Os states vão servir para pegarmos os valores digitados nos campos de input e a escolha do select.

## Processar dados do Form [07:17]

1. Na tag de abertura do `form` use o evento `onSubmit` e passe a função `onSave`
`<form onSubmit={onSave} >`

> A função onSave nós vamos criar para pegar os dados dos campos do formulário e processá-los.

2. Antes do return abaixo dos states crie a função `onSave`:

~~~javascript
function onSave(e) {
    e.preventDefault()
    console.log(url, category)
}

~~~

## Testar a função onSave [09:50]

1. No browser, use F12 para abrir o Console
2. Digite um texto em url, escolha uma categoria e clique em Cadastrar.

## Processamentos dos dados recebidos [10:45]

O processamento envolve algumas tarefas, pegar os dados, armazenar eles, validar e salvar de forma persistente se for necessário.

1. Criar estados para guardar dados do Form [11:12]
Abaixo dos estados que criamos no início, crie os seguintes:
~~~javascript
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')
~~~

> Criamos também o state para guardar erros [11:50]

## Vamos criar const, usar os sets e guardar [12:30]

1. Abaixo do console.log faça o restante do código:

~~~javascript
function onSave(e) {
    e.preventDefault()
    console.log(url, category)
    // guardar a url e a category
    const newVideo = {url, category}
    setVideos([...videos], newVideo)
    console.log(videos)
}

~~~

## Testar o que fizemos [14:25]

1. No browser, limpe o console (CTRL + L)
2. Cole uma url, escolha uma categoria e veja os resultados no console.

> Mesmo que tenha aparecido um array vazio, o que fizemos está funcionando.
> Pode apagar o console.log da linha 18, abaixo do setVideos.

## Persistência de Dados localStorage [15:30]

Vamos usar o localStorage
1. Abaixo do setVideos, digite o seguinte código:
~~~javascript
localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
~~~

* localStorage é o objeto
* .setItem é o método usado para criar uma nova chave/valor. 
* 'videos' foi o nome que usamos para a nossa chave
* Após a vírgula declaramos o valor a ser armazenado. No caso usamos um array e para armazenar ele temos que usar o método JSON.stringify.

## Teste do localStorage [17:50]

1. No browser, atualize a página
2. Cole uma url, escolha uma categoria e veja os resultados no console.
3. Clique no botão `>> mais guias` e escolha Aplicativo (Application)
4. Em Armazenamento (Storage), clique em Armazenamento local (local storage)
5. Veja que foi criada a chave videos e o valor são os dados que digitamos no form.

> Durante os testes, você pode apagar a chave que foi criada, clique nele e use DELETE.

## Resetar estados e inputs [18:52]

Para limpar os dados que digitamos nos campos
1. Abaixo do código do localStoragem digite o seguinte:
~~~javascript
// limpar o form
setUrl('')
setCategory('')
~~~

> Para limpar declaramos o set de cada state como vazio ''

## OBSERVAÇÃO [20:30]

* O nosso novo objeto newVideo está sendo acrescentado no final do nosso state videos que sempre começa com um array vazio. Fazemos o setVideos pegando o state inicial e acrescentando newVideos no final.
* Isto significa que toda vez que abrirmos a página do form o nosso state inicialmente é uma lista vazia de vídeos. Logicamente, isso é um problema.
* A gente poderia já declarar dentro do state um lista inicial de vídeos e ir acrescentando a cada cadastro. O localStorage não é melhor forma de guardar os nossos dados.

## Início da validação e tratamento de erros [21:40]

1. No input adicione as propriedades, maxLenght e minLenght
~~~javascript
<input
    type="text"
    placeholder="Digite a URL do vídeo"
    required="required"
    value={url}
    onChange={ e => setUrl(e.target.value) }
    minLength="43"
    maxLength="43"
/>
~~~

> A URL padrão de vídeos do YouTube tem 43 caracteres.

### Validação da Category [24:30]

1. Na função onSave vamos validar a category, antes de guardar os dados:
~~~javascript
// validar category
if(!category || category === '-') {
    console.log('Escolha uma categoria')
    setErrors('ERRO: Escolha uma categoria!')
    return
} else {
    setErrors('')
}
~~~

> Se não tem category, se ela for nula, undefined, vazia ou se for -
> setErrors com a mensagem e faça o return
> senao setErrors é vazio
> Depois de testar pode apagar a linha de console.log da validação de category

### Exibir Erros [28:20]

Após utilizar o setErrors podemos exibir os erros em tela.
1. Abaixo da div do button no nosso Form acrescente o seguinte código:
~~~javascript
<div>
    { errors }
</div>
~~~

> Nesta div será exibido o state errors. No início ele é vazio, mas quando for 'setado' um texto para ele, será exibido. Pode fazer os testes no browser.


#### Para formatar os errors

1. Dentro da tag div de erros do Form acrescente uma div com a className error e faça uma formatação condicional
~~~javascript
<div>
    { errors && <div className={styles.error}>{ errors }</div> }
</div>
~~~

> Na formatação condicional se tiver erros exibe a div com a className error senão não exibe nada.

2. No final do CSS do Form acrescente:

~~~css
/* aula 19 */
.error {
    margin-top: 1.5rem;
    background-color: #b71c1c;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
}

~~~

### Validação de URL [29:39]

A ordem das validações é você quem define, pense logicamente qual cenário é o mais fácil ou menos difícil. Durante os testes podemos mudar.
No vídeo eu coloquei a validação da url antes de category.

### Função de validação de url [30:30]

Antes da função onSave faça a função valideUrl:

~~~javascript
function valideUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

    if(!regex.test(url) || url.length < 43) {
        setErrors('ERRO: URL inválida!')
        return false
    } else {
        return url.substring(32, 43) // id do video
    }
}

~~~

> Nela recebemos uma url, dentro fazemos a comparação da url recebida com a const regex. Por meio da função test teremos a respostas true ou false.
> Se for true significa url válida, senão url inválida.
> Se for inválida (false) setErrors e return false
> Se for válida (true) return a substring que pega só o id da url do YouTube

### Validar URL dentro do onSave

~~~javascript
// validar url
const urlVideo = valideUrl(url)
if(urlVideo && category) {
    // guardar a url e a category
    const newVideo = { url, category }
    setVideos([...videos, newVideo])
    localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
    // limpar o form
    setUrl('')
    setCategory('')
} else {
    setErrors('ERRO: URL inválida!')
}

~~~

> 1ª Mudança na ordem de validações [34:13] nessa mudança eu recorte as linhas de códigos que criamos para guardar url e a category até limpar o form e colocamos dentro do if de validação da url.

> 2ª Mudança na ordem de validações [36:42] mudamos a posição de validação de category. Colocamos ela acima da validação da url.

## Código completo do index.js de Form (94 linhas)

~~~javascript
import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
    
        if(!regex.test(url) || url.length < 43) {
            setErrors('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43) // id do video
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        // validar category
        if(!category || category === '-') {
            console.log('Escolha uma categoria')
            setErrors('ERRO: Escolha uma categoria!')
            return
        } else {
            setErrors('')
        }

        // validar url
        const urlVideo = valideUrl(url)
        if(urlVideo && category) {
            // guardar a url e a category
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // limpar o form
            setUrl('')
            setCategory('')
        } else {
            setErrors('ERRO: URL inválida!')
        }

    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={ e => setUrl(e.target.value) }
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(item => {
                            return <option key={item} value={item}>{item}</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { errors && <div className={styles.error}>{ errors }</div> }
                </div>
            </form>
           
        </section>
    );
}

export default Form;

~~~

## Testes das validações [37:13]

## Considerações finais sobre validações [37:54]

Vimos nesta aula como processar os dados do form, pegar eles, guardar em states, criar objeto, trabalhar com localStorage para guardar os dados. E por fim, de forma 'sofrida' sem uso de libs de terceiros fizemos validações dos dados.

Salve Devs, até a próxima!
