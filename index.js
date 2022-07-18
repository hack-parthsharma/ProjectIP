addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
 return new Response(request.headers.get("cf-connecting-ip") + '\n' ,{
  status: 200
  })
}
