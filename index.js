const request = require('request');
const SavePost = require('./lib/savepost');
const Search = require('./lib/search');
const PageInfo = require('./lib/pageinfo');
const PostCrawler = require('./lib/postcrawler');
class facebookKeyword {
	constructor(fbToken) {
		this.fbToken = fbToken;    
		this.savePost =new SavePost();
		this.pageArr = [];
	}

	setPage(pageArray){

		this.pageArr = pageArray;
		console.log("[MODULE] Set Page", this.pageArr)
	}

	crawl(){		

		return new Promise((res,rej)=>{
			let pageArr = this.pageArr;
			console.log("CRAWL",pageArr)


			const pageInfo = new PageInfo(this.fbToken,this.savePost);
			const result = new PostCrawler(this.fbToken,this.savePost);
			pageInfo.fetchInfo(pageArr)
			.then(()=>result.fetchPost(pageArr))
			.then(()=>{
				console.log("Done Crawl")
				res("Done")});

		})
	}

	search(queryText){
		console.log("Search Post")

		return new Promise((res,rej)=>{
			this.savePost.searchPost(queryText)
			.then((result)=>{
				console.log(result);
				res(result);

			})


		})
		



	}




}


module.exports = exports = facebookKeyword;
