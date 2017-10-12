
const fbCrawl = require('./index');

let token = "FB_TOKEN"
let fb = new fbCrawl(token)

fb.setPage(["100most"]);
fb.crawl()
.then(()=>{
fb.search("keyword").then((result)=>{


	console.log("Success",result)
})
})