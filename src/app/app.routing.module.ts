import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'


const routes: Routes = [
    {
        path:'',
        loadChildren:'./public/public.module#PublicModule'     
    },
    {
        path:'authenticatedUser',
        loadChildren:'./private/private.module#PrivateModule'     
    }
];   

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }