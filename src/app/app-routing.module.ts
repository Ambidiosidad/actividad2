import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JustificationComponent } from './justification/justification.component';
import { InstallationComponent } from './installation/installation.component';
import { FirstStepsComponent } from './first-steps/first-steps.component';
import { UsageComponent } from './usage/usage.component';
import { FrameworkExplanationComponent } from './framework-explanation/framework-explanation.component';
import { ConclusionsComponent } from './conclusions/conclusions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'justification', component: JustificationComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'first-steps', component: FirstStepsComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'framework-explanation', component: FrameworkExplanationComponent },
  { path: 'conclusions', component: ConclusionsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
