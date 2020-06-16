import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxCarouselModule } from 'igniteui-angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNewestMoviesComponent } from './page-newest-movies/page-newest-movies.component';
import { NewestDetailComponent } from './newest-detail/newest-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
