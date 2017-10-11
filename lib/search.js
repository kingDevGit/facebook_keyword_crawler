/**
Author: King Chan
Description: This is a sample Node.js module for peers to know how to implement a nodejs class.


*/
//Import library from NPM
const _  = require("lodash");
//

class Search {
    constructor(firebase) {
        console.log('[Save Post] Contructor ');
        this.firebase = firebase;

    }



    searchpost(queryText){
        console.log("[Search] QueryText",queryText)

        return new Promise((res,rej)=>{

         this.firebase.database()
         .ref('posts')
         .orderByChild('commentcount')
         .once("value",(snap)=>{

            let resultArr = [];

            snap.forEach((s)=>{


                if(s.val().message.indexOf(queryText)!= -1 ){
                    resultArr.push(s.val());

                }
            })

            resultArr = _.sortBy(resultArr,['score']).reverse();


            let result = {
                result:resultArr,
                count:resultArr.length

            }

            res(result);
        })
     })
    }

    setIndex(){


        
    }

}

module.exports = exports = Search;
