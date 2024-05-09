import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';

like = {
  title : "Lorem Epsum 1",
  likeCount : 1234,
  isLike : true,
  id : 123
}


  reelsArr = [
    {
      title : "Lorem Epsum 1",
      likeCount : 7234,
      isLike : true,
      id : 123
    },
    {
      title : "Lorem Epsum 2",
      likeCount : 8567,
      isLike: false,
      id : 124
    },
    {
      title : "Lorem Epsum 3",
      likeCount : 5264,
      isLike : true,
      id : 125
    },
  ]

  getLikeStatus(likeStatus : boolean, reelId : number){
    console.log(likeStatus);
    this.reelsArr.forEach(reel => {
      if(reel.id === reelId){
        if (likeStatus) {
          reel.likeCount++;
         
        } 
        // else {
        //   reel.likeCount--;
          
        // }
      }
    }
  )
  }
  getDislikeStatus(DislikeStatus : boolean, reelId : number){
    console.log(DislikeStatus);
    this.reelsArr.forEach(reel => {
      if(reel.id === reelId){
        if (DislikeStatus) {
          reel.likeCount--;
        
         
        } 
        // else {
        //   reel.likeCount++;
        //   reel.isLike = false;
        //   reel.isLike = false;
        // }
        
      }
    }
  )
  }

  


}
