const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://g1.globo.com/sp/sao-paulo/noticia/2021/03/02/estado-de-sp-tem-468-mortes-por-covid-19-em-24h-maior-numero-desde-o-inicio-da-pandemia-e-ultrapassa-marca-de-60-mil-obitos.ghtml');
  
 const pageData = await page.evaluate(() => {
    return {
      title: document.querySelector('.title').innerText,
      subtitle: document.querySelector('.content-head__subtitle').innerText,
      content: document.querySelector('.content-text__container').innerText,
    };
  });

  await browser.close();

  res.send({
    "title": pageData.title,
    "subtitle": pageData.subtitle,
    "content": pageData.content,
  })
});


app.listen(3000);