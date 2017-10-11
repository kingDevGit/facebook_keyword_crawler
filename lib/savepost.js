/**
Author: King Chan
Description: This is a sample Node.js module for peers to know how to implement a nodejs class.


*/
//Import library from NPM
const request = require('request'),
    _  = require("lodash");

//

class SavePost {
    constructor() {
        console.log('[Save Post] Contructor ');
        this.posts = [];
        this.pages = [];


    }


    savePage(page) {
        return new Promise((res,rej)=>{
            this.pages[page.id]={
                id:page.id,
                name:page.name,
                thumbnail:page.picture.data.url,
                fans_count:page.fan_count
            }
            res({success:true});

        })


    }
    savePost(post){

        return new Promise((res,rej)=>{

            let fbid = post.id.split("_");



            let page = this.pages[fbid[0]];


            let page_img = page?page.thumbnail:null

            this.posts.push({

                id:fbid[1],
                pageid:fbid[0],
                message:post.message?post.message:"",
                thumbnail:page_img,
                pagename:post.name,
                timestamp:post.created_time,
                comment_count:post.comment_count,
                reactions_count:post.reactions_count,
                shares_count:post.shares_count,
                picture:post.picture?post.picture:null,
                full_picture:post.full_picture?post.full_picture:null,
                score:post.comment_count+post.reactions_count+post.shares_count


            })

            res({success:true})

        })
    }

    searchPost(queryText){
        console.log("[Search] QueryText",queryText)



        return new Promise((res,rej)=>{

           let posts = this.posts;

            let resultArr = [];

            posts.forEach((s)=>{


                if(s.message.indexOf(queryText)!= -1 ){
                    resultArr.push(s);

                }
            })

            resultArr = _.sortBy(resultArr,['score']).reverse();


            let result = {
                result:resultArr,
                count:resultArr.length,
                from:this.posts.length

            }

            res(result);
        })
       
    }




}

module.exports = exports = SavePost;
