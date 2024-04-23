import { Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Photos } from '../post';
  
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  
  posts: Photos[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Photos[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}