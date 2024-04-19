import { Component } from '@angular/core';
  
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photos } from '../post';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html'
})
export class ViewComponent {
  
  id!: number;
  post!: Photos;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
          
    this.postService.find(this.id).subscribe((data: Photos)=>{
      this.post = data;
    });
  }
  
}