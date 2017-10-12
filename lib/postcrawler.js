
const fetch = require('node-fetch');
const request = require('request');
const SavePost = require('./savepost');

/*
* This class is for crawlign page post by graph Api
* will add the page data to constructor later for selecting which page
*/
class postCrawler {

    constructor(fbApiKey,savePost) {

      console.log('[Post Crawler]API KEY',fbApiKey.substring(0,10));
      this.savePost = savePost;
      this.apiKey = fbApiKey;

    }

    // Stanley - not ready yet, need to connect with database
    fetchPost(pageArray) {
      console.log("Fetch Post")
      let finishCount = 0;
return new Promise((res,rej)=>{
   pageArray.map(pageName => {

          return fetch(`https://graph.facebook.com/v2.10/${pageName}/feed?access_token=${this.apiKey}&limit=100&fields=message,created_time,picture,full_picture,reactions.limit(0).summary(total_count),shares,comments.limit(0).summary(total_count)`)
            .then(res => res.text())
            .then(body =>{this.seperatePostToDatabase(body, pageName);
              finishCount++;

              if(finishCount == pageArray.length){

                res()
              }
            })
            .catch((e)=>console.log("[Fetch Post]",e));
       

        })


})
     
    }

    seperatePostToDatabase(postArray, pageName) {

      const postJSON = JSON.parse(postArray);
      postJSON.data.map(data => {
        try {
          let thisCommentCount = 0;
          data.name = pageName;
          data.comment_count = data.comments.summary.total_count;
          data.reactions_count = data.reactions.summary.total_count;
          data.shares_count = data.shares.count;
          data.picture = data.picture?data.picture:null;
          data.full_picture = data.full_picture?data.full_picture:null;
          // console.log(data.picture);
          this.savePost.savePost(data);
        } catch ($e) {
          
        }
      })
    }
}

module.exports = exports = postCrawler;
