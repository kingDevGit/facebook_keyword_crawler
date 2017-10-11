const fetch = require('node-fetch');
const request = require('request');
const SavePost = require('./savepost');

/*
* This class is for getting page info by graph Api
* will add the page data to constructor later for selecting which page
*/
class PageInfo {
  constructor(fbApiKey,savePost) {
    console.log('[Save Page] Contructor ');

    this.savePost = savePost;
    this.apiKey = fbApiKey;
  }

    // Kinson
    fetchInfo(pageArray) {
      return new Promise((res,rej)=>{
        pageArray.map(pageName => {
          
         fetch(`https://graph.facebook.com/v2.10/${pageName}?access_token=${this.apiKey}&fields=fan_count,picture`)
         .then(res => res.text())
         .then(body => {this.savePageToDatabase(body, pageName)})
         
         

       })
        res()
      })


    }

    savePageToDatabase(postArray, name) {

      return new Promise((res,rej)=>{

        let postJSON = JSON.parse(postArray);
        postJSON.name = name;
        console.log("save page");

        this.savePost.savePage(postJSON)
        .then(()=>res());


      })
      

    }

  }

  module.exports = exports = PageInfo;
