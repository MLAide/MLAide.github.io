import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./components/home/home.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatCardModule } from "@angular/material/card";

import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig,
} from "ngx-cookieconsent";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LicenseComponent } from "./components/license/license.component";
import { ImprintComponent } from "./components/imprint/imprint.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import {environment} from "../environments/environment";

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain, // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: "#000",
    },
    button: {
      background: "#195cc1",
    },
  },
  theme: "edgeless",
  type: "opt-in",
  layout: "my-custom-layout",
  layouts: {
    "my-custom-layout": "{{messagelink}}{{compliance}}",
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}">{{privacyPolicyLink}}</a> and our
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message:
      "We use cookies to ensure you get the very best experience on our website. For further information please check our ",

    cookiePolicyLink: "Cookie Policy",
    cookiePolicyHref: "privacy#cookies",

    privacyPolicyLink: "Privacy Policy",
    privacyPolicyHref: 'privacy"',

    tosLink: "License",
    tosHref: "license",
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LicenseComponent,
    ImprintComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    MatCardModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
