import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccelerationProgramComponent } from './acceleration-program/acceleration-program.component';
import { DigitalProgramComponent } from './digital-program/digital-program.component';
import { AcceleratorProgramComponent } from './accelerator-program/accelerator-program.component';
import { CorporateTrainingComponent } from './corportate-training/corportate-training.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    AccelerationProgramComponent,
    DigitalProgramComponent,
    AcceleratorProgramComponent,
    CorporateTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
