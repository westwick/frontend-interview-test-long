import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsService } from "./services/posts.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    PostsComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
