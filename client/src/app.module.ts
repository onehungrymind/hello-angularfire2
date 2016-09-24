import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app';
import { Container } from './container/container.component';
import { Items } from './items/items.component';
import { ItemsList } from './items/items-list.component';
import { ItemDetail } from './items/item-detail.component';
import { routing, appRoutingProviders } from './app.routing';
import { ItemsService } from './items/items.service';

@NgModule({
  declarations: [
    App,
    Items,
    ItemsList,
    ItemDetail,
    Container
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ItemsService,
  ],
  bootstrap: [App]
})
export class AppModule {
}
