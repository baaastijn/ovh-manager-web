export const ALERTS = {
  tabs: 'domain_alert_tabs',
};

export const whoIsStatus = {
  PENDING: 'pending',
  INVALID_CONTACT: 'Invalid contact number',
};

export const WHOIS_ALL_CONTACT_OPTIN_RULE = [
  'domain',
];

export default {
  ALERTS,
  whoIsStatus,
  WHOIS_ALL_CONTACT_OPTIN_RULE,
};

angular.module('App').constant('DOMAIN', {
  ALERTS,
  whoIsStatus,
});
