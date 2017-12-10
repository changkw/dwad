import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
