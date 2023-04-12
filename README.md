# Descrição do Código

Este é um código Node.js que utiliza a biblioteca Puppeteer para realizar web scraping em uma página de notícias do site G1 (https://g1.globo.com/sp/sao-paulo/noticia/2021/03/02/estado-de-sp-tem-468-mortes-por-covid-19-em-24h-maior-numero-desde-o-inicio-da-pandemia-e-ultrapassa-marca-de-60-mil-obitos.ghtml). O código cria um servidor Express que escuta na porta 3000 e possui uma rota GET para a raiz ("/") que realiza a raspagem dos dados da página usando o Puppeteer e retorna os dados obtidos em formato JSON.

# Requisitos

- Node.js instalado na máquina.
- Pacotes npm instalados: express e puppeteer.

# Como executar

1. Instale as dependências do projeto usando o npm. No diretório do projeto, execute o seguinte comando no terminal:

```
npm install express puppeteer
```
2. Após a instalação das dependências, você pode executar o código com o seguinte comando:

```
node <nome_do_arquivo>.js
```

3.  O servidor Express irá iniciar e estará ouvindo na porta 3000.

4. Acesse o navegador e vá para http://localhost:3000/ para obter os dados raspados da página do G1 em formato JSON.

# Funcionamento do Código

1. O código utiliza o Express para criar um servidor HTTP que escuta na porta 3000.

2. Quando uma requisição GET é feita para a rota raiz ("/"), o código utiliza o Puppeteer para iniciar um navegador, abrir uma nova página e navegar para a URL da página de notícias do G1.

3. Em seguida, o código utiliza a função page.evaluate() do Puppeteer para executar uma função de avaliação no contexto da página. Essa função de avaliação extrai os dados da página, incluindo o título, subtítulo e conteúdo da notícia, utilizando seletores CSS para identificar os elementos desejados.

4. Os dados extraídos são armazenados em um objeto pageData.

5. O navegador é fechado usando a função browser.close() do Puppeteer.

6. Os dados obtidos são então enviados como resposta em formato JSON para o cliente que fez a requisição.

# Nota de Atenção

É importante notar que fazer web scraping pode violar os termos de uso de um site e é necessário garantir que você está cumprindo com as políticas do site que está sendo analisado. Sempre verifique as políticas de uso do site antes de realizar qualquer tipo de web scraping. Além disso, sites podem mudar sua estrutura e layout a qualquer momento, o que pode fazer com que o código de web scraping pare de funcionar corretamente. É importante estar ciente dessas limitações e atualizar o código de acordo, se necessário.
