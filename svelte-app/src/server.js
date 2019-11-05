const express = require('express')
const app = express()
const port = 3000
const App = require('./App.svelte').default

app.use('/public', express.static('public'));

const getScripts = () => {

    return ``;

    return `
       <script src="/public/components/client/0.index.js"></script>
       <script src="/public/components/client/1.index.js"></script>
       <script src="/public/components/client/2.index.js"></script>
`;
}

app.get('/', async (req, res) => {
  const {html} = await App.render();
  return res.send(`<!DOCTYPE html>
  <html lang="en">
   <head>
     <title>Node Workshop</title>
   </head>
   <body>
      <div id="root">
        ${html}
      </div>
       <script src="/public/components/client/index.js"></script>
       ${getScripts()}
       <script type="module" src="/public/bundle.js"></script>
   </body>
  </html>`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
