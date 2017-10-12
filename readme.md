Facebook Keyword Crawler
====================
A Simple node module for crawling facebook post within the page you are interested.

*Disclaimer*
Please use this module with appropriate interval.  You have my warn.  

Installation
--------------------

Easy enough
```
npm install facebook
```

Basic Usage
-------------------


```
//Import the package
const FacebookKeywordCrawler = require('facebook-keyword-crawler');

//Initialize
let fbCrawler = new FacebookKeywordCrawler(FACEBOOK_API_TOKEN);

//Set Page Array 
let pageArray = ['FacebookHK','thebeatles','124298817619313'];

fbCrawler.setPage(PAGE_ID_ARRAY);

//Crawl
fbCrawler.crawl().then(()=>{
  fbCrawler.search(QUERY_TEXT).then((result)=>{
    console.log(result);
  })
});




    ```


