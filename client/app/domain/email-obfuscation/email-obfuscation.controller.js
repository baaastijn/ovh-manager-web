import { EXCLUDED_CONTACTS } from './email-obfuscation.constant';

export default class DomainEmailObfuscationCtrl {
  /* @ngInject */
  constructor(
    $state,
    $stateParams,
    $translate,
    Alerter,
    OvhApiDomain,
    DOMAIN,
  ) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$translate = $translate;
    this.Alerter = Alerter;
    this.OvhApiDomain = OvhApiDomain;
    this.DOMAIN = DOMAIN;
  }

  $onInit() {
    this.domain = this.$stateParams.productId;
    this.parentState = this.$state.$current.parent.name;
    this.loading = {
      contacts: true,
    };
    this.contactsToRegenerate = [];

    return this.getObfuscationRules()
      .finally(() => {
        this.loading.contacts = false;
      });
  }

  getObfuscationRules() {
    return this.OvhApiDomain.Rules().EmailsObfuscation().v6()
      .query({
        serviceName: this.domain,
      }).$promise
      .then((contactTypes) => {
        this.contactTypes = contactTypes.filter(contact => !EXCLUDED_CONTACTS.includes(contact));
        return contactTypes;
      })
      .catch(() => this.Alerter.error('domain_email_obfuscation_error', this.DOMAIN.ALERTS.tabs));
  }

  updateRegeneration(regenerate, contact) {
    if (regenerate) {
      this.contactsToRegenerate.push(contact);
    } else {
      this.contactsToRegenerate = _.remove(this.contactsToRegenerate, contact);
    }
  }

  regenerateEmails() {
    this.loading.contacts = true;
    return this.OvhApiDomain.Configurations().ObfuscatedEmails().v6().refresh({
      serviceName: this.domain,
    }, {
      contacts: this.contactsToRegenerate,
    }).$promise
      .then(() => {
        this.Alerter.success(this.$translate.instant('domain_email_obfuscation_refresh_success'), this.DOMAIN.ALERTS.tabs);
        return this.$state.go('^.information', this.$stateParams);
      })
      .catch((error) => {
        this.Alerter.error(
          this.$translate.instant('domain_email_obfuscation_refresh_error', { message: _.get(error, 'message', '') }),
          this.DOMAIN.ALERTS.tabs,
        );
      })
      .finally(() => {
        this.loading.contacts = false;
      });
  }
}
