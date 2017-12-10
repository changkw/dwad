import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: Post[] = [];
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit() {
    this.getPosts();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    })
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts)
  }

  addComment(post: Post, comment: string): void {
    if (!post) { return; }
    var date = new Date();
    post.comments.push({content: comment, date_created: date, author_name: this.user.name});
    this.postService.updatePost(post)
      .subscribe();
  }

  onDelete(post: Post): void{
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }
}
