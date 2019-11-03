const express = require('express')
const app = express()
const port = 3000
const App = require('./App.svelte').default

app.use('/public', express.static('public'));

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
       <script type="module" src="/public/bundle.js"></script>
   </body>
  </html>`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))