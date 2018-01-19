import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginingRoutingModule } from './logining-routing.module'
import { LoginingComponent } from './logining/logining.component';

@NgModule({
  imports: [
    SharedModule,
    LoginingRoutingModule
  ],
  declarations: [LoginingComponent]
})
export class LoginingModule { }
