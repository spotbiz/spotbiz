import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TeamComponent } from './components/pages/team/team.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsOneComponent } from './components/pages/projects-one/projects-one.component';
import { ProjectsTwoComponent } from './components/pages/projects-two/projects-two.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-2', component: HomeTwoComponent},
    {path: 'home-3', component: HomeThreeComponent},
    {path: 'home-4', component: HomeFourComponent},
    {path: 'home-5', component: HomeFiveComponent},
    {path: 'home-6', component: HomeSixComponent},
    {path: 'team', component: TeamComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services-1', component: ServicesOneComponent},
    {path: 'services-2', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects-1', component: ProjectsOneComponent},
    {path: 'projects-2', component: ProjectsTwoComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'blog-1', component: BlogOneComponent},
    {path: 'blog-2', component: BlogTwoComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }