import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DigitalProgramComponent } from './digital-program/digital-program.component';
import { AcceleratorProgramComponent } from './accelerator-program/accelerator-program.component'
import { CorporateTrainingComponent} from './corportate-training/corportate-training.component'
const routes: Routes = [
  // {
  //   path : '',
  //   component: AboutusComponent
  // },

  { 
    path: '', 
    redirectTo: '/about', 
    pathMatch: 'full' 
  },
  {
    path:'ctp',
    component : CorporateTrainingComponent
  },
  {
    path: 'tap', 
    component: AcceleratorProgramComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'dp',
    component: DigitalProgramComponent
  },
  {
    path: 'cep',
    component: CepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
