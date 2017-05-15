import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
tweets=[
  {text:"This is my legend tweets",author:"sudarshan ",image:"one.jpeg"},
  {text:"This is my legend2 tweets",author:"sudarshan ",image:"two.jpeg"},
  {text:"Another author  tweets",author:"Gleen ",image:"three.jpeg"},
]
  constructor() { }

  ngOnInit() {
  }

}
