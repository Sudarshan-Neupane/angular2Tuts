import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
tweets=[
  {text:"This is my legend tweets",author:"sudarshan ",image:"one.jpg","favorite":{"length":2},"retweets":["ram","shyam"]},
  {text:"This is my legend2 tweets",author:"sugan ",image:"two.jpg","favorite":{"length":1},"retweets":["ram","shyam"]},
  {text:"Another author  tweets",author:"Gleen ",image:"three.jpg","favorite":{"length":1},"retweets":["shyam"]},
]
  constructor() { }
  isUserInCollection(collection: string[],userId: string) : boolean{
    return collection.indexOf(userId)!=-1;
  }
  onFavorite(tweet){

    tweet.favorite.length++;
    // alert(tweet.favorite.length+1);
  }
  onRetweet(tweet){
    if(!this.isUserInCollection(tweet.retweets,"Glen")) {
      tweet.retweets.push("Glen");
      // alert(tweet.favorite.length+1);
    }

  }
  ngOnInit() {
  }

}
