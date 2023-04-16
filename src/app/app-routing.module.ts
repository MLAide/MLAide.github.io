import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HomeComponent } from "./components/home/home.component";
import { ImprintComponent } from "./components/imprint/imprint.component";
import { LicenseComponent } from "./components/license/license.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "license", component: LicenseComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      initialNavigation: "enabled",
      useHash: true,
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
