import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostUpdateComponent } from './components/posts/post-update/post-update.component';
import { PostDeleteComponent } from './components/posts/post-delete/post-delete.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostAddComponent,
    PostDetailComponent,
    PostUpdateComponent,
    PostDeleteComponent,
    NotFoundComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCommonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
