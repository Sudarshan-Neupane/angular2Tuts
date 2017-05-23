import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  providers: [UserService],
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
tweets=[
  {text:"This is my legend tweets",author:"sudarshan ",image:"one.jpg","favorite":{"length":2},"retweets":["ram","shyam"]},
  {text:"This is my legend2 tweets",author:"sugan ",image:"two.jpg","favorite":{"length":1},"retweets":["ram","shyam"]},
  {text:"Another author  tweets",author:"Gleen ",image:"three.jpg","favorite":{"length":1},"retweets":["shyam"]},
]
  constructor(private userService: UserService) { }
  //binding module
  tweetText="";

  isUserInCollection(collection: string[],userId: string) : boolean{
    return collection.indexOf(userId)!=-1;
  }
  onFavorite(tweet){

    tweet.favorite.length++;
  }
  //append the user when user click the re-tweet user
  onRetweet(tweet){
    if(!this.isUserInCollection(tweet.retweets,this.userService.getCurrentUser())) {
      tweet.retweets.push(this.userService.getCurrentUser());
      // alert(tweet.favorite.length+1);
    }

  }
  onNewTweet(){
    this.tweets.unshift(
    {text:this.tweetText,author:"Sudarshan ",image:"sudarshan.jpeg","favorite":{"length":1},"retweets":["Sudarshan"]}
    );
    this.tweetText="";
  }
  ngOnInit() {
  }

}
