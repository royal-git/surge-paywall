let body = $response.body
alert("hello, world")
if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `

<script>
const elecJSPack = function(){let body = document.querySelector('body');
  if (body)
    body.setAttribute('style', 'position:relative !important;');
$done()}()</script></body>`)

  console.log('Success')
}

$done({ body })
