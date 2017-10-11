
const fbCrawl = require('./index');

let token = "EAAKxvvKIKZBEBAFjAsNzwP8TOZCseL8zI4efdvKNBIgc2qTYkaKrRwZBfMKQNmFw6RlHKj8EWkyRPPvJZA4MXiu1scZC29D350XBqXQ4jaEZAIl6QgJCKxaZARMRIBFJvP1YWSfqtJNyVAVj0jflQQmIhucPOzfpPePXZC1wuZCqLKz2Lzlay1YeBKTAUXOZBhXaBmqxly4r9Q2gZDZD"
let fb = new fbCrawl(token)

fb.setPage(["100most","poonchoiyingchi"]);
fb.crawl()
.then(()=>{
fb.search("小朋友").then((result)=>{


	console.log("Success",result)
})
})