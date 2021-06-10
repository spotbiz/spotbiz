import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { TopHeaderComponent } from './components/layouts/top-header/top-header.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';
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
import { SouzaComponent } from './components/pages/souza/souza.component';
import { TattoosaComponent } from './components/pages/tattoosa/tattoosa.component';
import { BimegahComponent } from './components/pages/bimegah/bimegah.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { ServicosComponent } from './components/pages/servicos/servicos.component';
import { MarketingDigitalComponent } from './components/pages/marketing-digital/marketing-digital.component';
import { LogoIdentidadeComponent } from './components/pages/logo-identidade/logo-identidade.component';
import { SitesLojasComponent } from './components/pages/sites-lojas/sites-lojas.component';
import { TiComponent } from './components/pages/ti/ti.component';
import { ConsultoriaComponent } from './components/pages/consultoria/consultoria.component';
import { SeoAdsComponent } from './components/pages/seo-ads/seo-ads.component';
import { SegurancaComponent } from './components/pages/seguranca/seguranca.component';
import { CrmComponent } from './components/pages/crm/crm.component';
import { RedesSociaisComponent } from './components/pages/redes-sociais/redes-sociais.component';
import { DesignerGraficoComponent } from './components/pages/designer-grafico/designer-grafico.component';
import { SolucoesComponent } from './components/pages/solucoes/solucoes.component';
import { CopywritingComponent } from './components/pages/copywriting/copywriting.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { PacotesComponent } from './components/pages/pacotes/pacotes.component';
import { AspotbizComponent } from './components/pages/aspotbiz/aspotbiz.component';
import { RedesSociaisPizzariaComponent } from './components/pages/redes-sociais-pizzaria/redes-sociais-pizzaria.component';
import { PoliticaDePrivacidadeComponent } from './components/pages/politica-de-privacidade/politica-de-privacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeOneComponent,
    TopHeaderComponent,
    NavbarComponent,
    HomeTwoComponent,
    FooterComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    SubscribeComponent,
    ContactComponent,
    TeamComponent,
    AboutComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesDetailsComponent,
    ProjectsOneComponent,
    ProjectsTwoComponent,
    ProjectsDetailsComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogDetailsComponent,
    ErrorComponent,
    PricingComponent,
    SouzaComponent,
    TattoosaComponent,
    BimegahComponent,
    ProjetosComponent,
    ServicosComponent,
    MarketingDigitalComponent,
    LogoIdentidadeComponent,
    SitesLojasComponent,
    TiComponent,
    ConsultoriaComponent,
    SeoAdsComponent,
    SegurancaComponent,
    CrmComponent,
    RedesSociaisComponent,
    DesignerGraficoComponent,
    SolucoesComponent,
    CopywritingComponent,
    ContatoComponent,
    BlogComponent,
    PacotesComponent,
    AspotbizComponent,
    RedesSociaisPizzariaComponent,
    PoliticaDePrivacidadeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
