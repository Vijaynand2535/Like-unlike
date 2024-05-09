import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() isLike ! : boolean
  @Input() isDislike ! : boolean
  
  @Output() emmitLikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() emmitDislikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
  
  
  constructor() { }

  ngOnInit(): void {
  }
  // onLikeDislike(){
  //   this.isLike = !this.isLike
  //   this.emmitLikeStatus.emit(this.isLike)
  // }
  onLike(){
    this.isLike =! this.isLike
    this.emmitLikeStatus.emit(this.isLike)
  }
  onDislike(){
    this.isDislike = ! this.isDislike
    this.emmitDislikeStatus.emit(this.isDislike)
   
  }



}
