async function apiCaller(url) {
   const request = await fetch(url)
   const response = await request.json()
   const data = response.data ?? []
}

apiCaller("https://json.placeholder.com/api/todos").then(console.log).catch(console.error)