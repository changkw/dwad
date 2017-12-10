import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Post = {
    id: '',
    title: '',
    content: '',
    author_id: '',
    author_name: '',
    date_created: new Date()
  }
  isUpdate: boolean = false;
  posts: Post[];
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,    
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.postService.getPost(id)
      .subscribe(post => this.post = post);
    }
    this.getPosts();
    this.authService.authState.subscribe((user) => {
      this.user =user;
      this.loggedIn = (user != null);
    })
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);

  }

  add(post: Post): void {
    if (!post) { return; }
    post.author_id = this.user.id;
    post.author_name = this.user.name;
    this.postService.addPost(post)
      .subscribe(post => {this.posts.push(post); 
                          this.router.navigateByUrl("/");});
  }

  update(post: Post): void {
    if (!post) { return; }
    this.postService.updatePost(post)
    .subscribe(post => {this.router.navigateByUrl("/");});
    
  }
  

}
