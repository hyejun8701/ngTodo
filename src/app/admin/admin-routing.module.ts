import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { ViewComponent } from "./news/view/view.component";
import { WriteComponent } from "./news/write/write.component";

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent, children:[
      // 쿼리 파라미터방식
      //{ path: 'view?news_id', component: ViewComponent},
      
      // uri 파라미터방식
      { path: 'view/:news_id', component: ViewComponent},
      { path: 'write', component: WriteComponent},
    ]},
    ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
