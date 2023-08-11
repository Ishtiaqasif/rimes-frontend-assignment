import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostDeleteComponent } from './components/posts/post-delete/post-delete.component';
import { PostUpdateComponent } from './components/posts/post-update/post-update.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post-detail', component: PostDetailComponent },
  { path: 'post-add', component: PostAddComponent },
  { path: 'post-detail', component: PostDetailComponent },
  { path: 'post-update', component: PostUpdateComponent },
  { path: 'post-delete', component: PostDeleteComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
