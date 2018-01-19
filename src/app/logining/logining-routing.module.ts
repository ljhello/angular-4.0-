import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginingComponent } from './logining/logining.component'

const routes: Routes = [
  { path: 'logining', component: LoginingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginingRoutingModule {}
