import { Component, NgModule } from '@angular/core';
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
import { ServicosComponent } from './components/pages/servicos/servicos.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { LogoIdentidadeComponent } from './components/pages/logo-identidade/logo-identidade.component';
import { SitesLojasComponent } from './components/pages/sites-lojas/sites-lojas.component';
import { SolucoesComponent } from './components/pages/solucoes/solucoes.component';
import { ConsultoriaComponent } from './components/pages/consultoria/consultoria.component';
import { SeoAdsComponent } from './components/pages/seo-ads/seo-ads.component';
import { SegurancaComponent } from './components/pages/seguranca/seguranca.component';
import { CrmComponent } from './components/pages/crm/crm.component';
import { RedesSociaisComponent } from './components/pages/redes-sociais/redes-sociais.component';
import { DesignerGraficoComponent } from './components/pages/designer-grafico/designer-grafico.component';
import { MarketingDigitalComponent } from './components/pages/marketing-digital/marketing-digital.component';
import { ProjectsOneComponent } from './components/pages/projects-one/projects-one.component';
import { ProjectsTwoComponent } from './components/pages/projects-two/projects-two.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { SouzaComponent } from './components/pages/souza/souza.component';
import { TattoosaComponent } from './components/pages/tattoosa/tattoosa.component';
import { BimegahComponent } from './components/pages/bimegah/bimegah.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { CopywritingComponent } from './components/pages/copywriting/copywriting.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { PacotesComponent } from './components/pages/pacotes/pacotes.component';
import { AspotbizComponent } from './components/pages/aspotbiz/aspotbiz.component';
import { RedesSociaisPizzariaComponent } from './components/pages/redes-sociais-pizzaria/redes-sociais-pizzaria.component';

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
    {path: 'servicos', component: ServicosComponent},
    {path: 'services-2', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'marketing-digital', component: MarketingDigitalComponent},
    {path: 'logo-identidade', component: LogoIdentidadeComponent},
    {path: 'sites-lojas', component: SitesLojasComponent},
    {path: 'solucoes', component: SolucoesComponent},
    {path: 'consultoria', component: ConsultoriaComponent},
    {path: 'seo-ads', component: SeoAdsComponent},
    {path: 'seguranca', component: SegurancaComponent},
    {path: 'crm', component: CrmComponent},
    {path: 'redes-sociais', component: RedesSociaisComponent},
    {path: 'designer-grafico', component: DesignerGraficoComponent},
    {path: 'solucoes', component: SolucoesComponent},
    {path: 'projects-1', component: ProjectsOneComponent},
    {path: 'projects-2', component: ProjectsTwoComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'souza', component: SouzaComponent},
    {path: 'tattoosa', component: TattoosaComponent},
    {path: 'bimegah', component: BimegahComponent},
    {path: 'blog-1', component: BlogOneComponent},
    {path: 'blog-2', component: BlogTwoComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'copywriting', component: CopywritingComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'pacotes', component: PacotesComponent},
    {path: 'aspotbiz', component: AspotbizComponent},
    {path: 'redes-sociais-pizzaria', component: RedesSociaisPizzariaComponent},

    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }