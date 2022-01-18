import {
  Component,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import * as FontAwesomeBrands from "@fortawesome/free-brands-svg-icons";
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent,
} from "ngx-cookieconsent";
import { Subscription } from "rxjs";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

type NewType = Injector;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  faGithub = FontAwesomeBrands.faGithub;
  faLinkedin = FontAwesomeBrands.faLinkedin;

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(
    private ccService: NgcCookieConsentService,
    private readonly injector: Injector,
    @Inject(PLATFORM_ID) private platformId
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.injector.get(NgcCookieConsentService);
    }
  }

  //TODO: https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // subscribe to cookieconsent observables to react to main events
      this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
        // you can use this.ccService.getConfig() to do stuff...
      });

      this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
        // you can use this.ccService.getConfig() to do stuff...
      });

      this.initializeSubscription = this.ccService.initialize$.subscribe(
        (event: NgcInitializeEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        }
      );

      this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
        (event: NgcStatusChangeEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        }
      );

      this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
        () => {
          // you can use this.ccService.getConfig() to do stuff...
        }
      );

      this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
        (event: NgcNoCookieLawEvent) => {
          // you can use this.ccService.getConfig() to do stuff...
        }
      );
    }
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    if (this.popupOpenSubscription) {
      this.popupOpenSubscription.unsubscribe();
    }

    if (this.popupCloseSubscription) {
      this.popupCloseSubscription.unsubscribe();
    }
    if (this.initializeSubscription) {
      this.initializeSubscription.unsubscribe();
    }
    if (this.statusChangeSubscription) {
      this.statusChangeSubscription.unsubscribe();
    }
    if (this.revokeChoiceSubscription) {
      this.revokeChoiceSubscription.unsubscribe();
    }
    if (this.noCookieLawSubscription) {
      this.noCookieLawSubscription.unsubscribe();
    }
  }
}
