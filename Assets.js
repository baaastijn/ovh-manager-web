var glob = require("glob");
var _ = require("lodash");

module.exports = {
    src: {
        js: [
            "client/app/**/*.module.js",
            "client/app/**/*.constant.js",
            "client/app/components/**/**.js",
            "client/app/website/**/**.js",
            "client/app/domains/**/**.js",
            "client/app/domain/**/**.js",
            "client/app/domain-operation/**/**.js",
            "client/app/double-authentication/**/**.js",
            "client/app/email-domain/**/*.js",
            "client/app/hosting/**/**.js",
            "client/app/incident/**/*.js",
            "client/app/private-database/**/**.js",
            "client/app/dns-zone/**/**.js",
            "client/app/double-authentication/**/**.js",
            "client/app/feedback/**/**.js",
            "client/app/configuration/**/**.js",
            "client/app/*.js"
        ].concat(
            _.flatten(glob.sync("./node_modules/ovh-module-*-front/Assets.js").map(function (src) {
                "use strict";
                return require(src).src.js;
            }))
        ),
        jsES6: [
            "dist/app/**/*.module.js",
            "dist/app/**/*.constant.js",
            "dist/app/components/**/*.js",
            "dist/app/website/**/**.js",
            "dist/app/domains/**/**.js",
            "dist/app/domain/**/**.js",
            "dist/app/domain-operation/**/**.js",
            "dist/app/double-authentication/**/**.js",
            "dist/app/email-domain/**/*.js",
            "dist/app/hosting/**/**.js",
            "dist/app/incident/**/**.js",
            "dist/app/private-database/**/**.js",
            "dist/app/dns-zone/**/**.js",
            "dist/app/double-authentication/**/**.js",
            "dist/app/feedback/**/**.js",
            "dist/app/configuration/**/**.js",
            "dist/app/labs/**/*.module.js",
            "dist/app/labs/**/**.js",
            "dist/app/**/*.app.js",
            "dist/app/**/*.module.js",
            "dist/app/**/*.js",
            "dist/app/*.js"
        ].concat(
            _.flatten(glob.sync("./node_modules/ovh-module-*-front/Assets.js").map(function (src) {
                "use strict";
                return require(src).src.js.map(function (src) {
                    return "dist/client/" + src;
                });
            }))
        ),
        css: [].concat(
            _.flatten(glob.sync("./node_modules/ovh-module-*-front/Assets.js").map(function (src) {
                "use strict";
                return require(src).src.css;
            }))
        ),
        less: [
            "client/app/css/**/*.less"
        ],
        scss: [
            "client/app/css/**/*.scss"
        ]
    },
    EU: {
        // Note: you need to add to src.css too
        modules: [
            "ovh-module-office",
            "ovh-module-emailpro",
            "ovh-module-exchange",
            "ovh-module-sharepoint"
        ]
    },
    CA: {
        modules: [
            "ovh-module-exchange"
        ]
    },
    common: {
        js: [
            "node_modules/@bower_components/moment/min/moment-with-locales.min.js",
            "node_modules/@bower_components/jquery/dist/jquery.min.js",
            "node_modules/@bower_components/jquery.ui/ui/core.js",
            "node_modules/@bower_components/jquery.ui/ui/widget.js",
            "node_modules/@bower_components/jquery.ui/ui/mouse.js",
            "node_modules/@bower_components/jquery.ui/ui/draggable.js",
            "node_modules/@bower_components/jquery.ui/ui/droppable.js",
            "node_modules/@bower_components/jquery.ui/ui/resizable.js",
            "node_modules/@bower_components/angular/angular.min.js",
            "node_modules/@bower_components/angular-route/angular-route.min.js",
            "node_modules/@bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "node_modules/@bower_components/angular-sanitize/angular-sanitize.js",
            "node_modules/@bower_components/angular-cookies/angular-cookies.min.js",
            "node_modules/@bower_components/angular-messages/angular-messages.min.js",
            "node_modules/@bower_components/angular-resource/angular-resource.min.js",
            "node_modules/ovh-ui-angular/dist/oui-angular.min.js",
            "node_modules/@bower_components/lodash/lodash.min.js",
            "node_modules/@bower_components/jquery.scrollTo/jquery.scrollTo.min.js",
            "node_modules/@bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.js",
            "node_modules/@bower_components/angular-flash-alert/dist/angular-flash.min.js",
            "node_modules/@bower_components/chart.js/dist/Chart.min.js",
            "node_modules/@bower_components/chartjs-plugin-zoom/chartjs-plugin-zoom.min.js",
            "node_modules/@bower_components/jquery.cookie/jquery.cookie.js",
            "node_modules/@bower_components/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/@bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
            "node_modules/@bower_components/moment-picker/dist/angular-moment-picker.min.js",
            "node_modules/@bower_components/raphael/raphael-min.js",
            "node_modules/@bower_components/justgage/justgage.js",
            "node_modules/@bower_components/ovh-utils-angular/bin/ovh-utils-angular.min.js",
            "node_modules/@bower_components/ovh-utils-angular/lib/core.js",
            // "src/js/app/libs/ng-upload.min.js",
            "node_modules/@bower_components/punycode/punycode.min.js",
            "node_modules/@bower_components/uri.js/src/URI.min.js",
            "node_modules/@bower_components/URIjs/src/URI.min.js",
            "node_modules/@bower_components/ipaddr.js/ipaddr.min.js",
            "node_modules/@bower_components/filesize/lib/filesize.min.js",
            "node_modules/@bower_components/ovh-angular-pagination-front/dist/ovh-angular-pagination-front.min.js",
            "node_modules/@bower_components/angular-scroll-glue/src/scrollglue.js",
            "node_modules/@bower_components/ovh-angular-tail-logs/dist/ovh-angular-tail-logs.min.js",
            "node_modules/@bower_components/ovh-angular-proxy-request/dist/ovh-angular-proxy-request.min.js",
            "node_modules/@bower_components/ovh-auth-service/dist/ovh-auth.min.js",
            "node_modules/@bower_components/ovh-angular-doubleauth-backupcode/dist/ovh-angular-doubleauth-backupcode.min.js",
            "node_modules/@bower_components/ovh-angular-q-allsettled/dist/ovh-angular-q-allsettled.min.js",
            "node_modules/@bower_components/ovh-angular-http/dist/ovh-angular-http.js",
            "node_modules/@bower_components/df-tab-menu/build/df-tab-menu.min.js",
            "node_modules/@bower_components/ovh-angular-swimming-poll/dist/ovh-angular-swimming-poll.min.js",
            "node_modules/@bower_components/validator-js/validator.min.js",
            "node_modules/@bower_components/aapiV6-auth/dist/aapiV6Auth.min.js",
            "node_modules/@bower_components/ovh-angular-export-csv/dist/ovh-angular-export-csv.js",
            "node_modules/@bower_components/angular-vs-repeat/src/angular-vs-repeat.min.js",
            "node_modules/@bower_components/at-internet-smarttag-manager/dist/smarttag.js",
            "node_modules/@bower_components/ng-at-internet/dist/ng-at-internet.min.js",
            "node_modules/@bower_components/at-internet-ui-router-plugin/dist/at-internet-ui-router-plugin.min.js",
            "node_modules/@bower_components/randexp/build/randexp.min.js",
            "node_modules/@bower_components/ovh-angular-user-pref/dist/ovh-angular-user-pref.min.js",
            "node_modules/@bower_components/ng-file-upload/ng-file-upload.min.js",
            "node_modules/@bower_components/angular-xeditable/dist/js/xeditable.min.js",
            "node_modules/@bower_components/jsurl/lib/jsurl.js",
            "node_modules/@bower_components/ovh-angular-sso-auth/dist/ovh-angular-sso-auth.js",
            "node_modules/@bower_components/ovh-angular-sso-auth-modal-plugin/dist/ovh-angular-sso-auth-modal-plugin.js",
            "node_modules/@bower_components/raven-js/dist/raven.min.js",
            "node_modules/@bower_components/raven-js/dist/plugins/angular.min.js",
            "node_modules/@bower_components/ovh-angular-toggleclass/dist/ovh-angular-toggleClass.min.js",
            "node_modules/@bower_components/ovh-angular-manager-navbar/dist/ovh-angular-manager-navbar.min.js",
            "node_modules/@bower_components/ovh-angular-sidebar-menu/dist/ovh-angular-sidebar-menu.min.js",
            "node_modules/@bower_components/angular-translate/angular-translate.min.js",
            "node_modules/@bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
            "node_modules/@bower_components/ng-slide-down/dist/ng-slide-down.min.js",
            "node_modules/@bower_components/ovh-angular-actions-menu/dist/ovh-angular-actions-menu.min.js",
            "node_modules/@bower_components/ovh-angular-responsive-popover/dist/ovh-angular-responsive-popover.min.js",
            "node_modules/@bower_components/matchmedia-ng/matchmedia-ng.js",
            "node_modules/@bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js",
            "node_modules/@bower_components/ovh-angular-responsive-tabs/dist/ovh-angular-responsive-tabs.min.js",
            "node_modules/@bower_components/ckeditor/ckeditor.js",
            "node_modules/@bower_components/ng-ckeditor/ng-ckeditor.js",
            "node_modules/@bower_components/ovh-angular-otrs/dist/ovh-angular-otrs.min.js",
            "node_modules/@bower_components/ovh-api-services/dist/ovh-api-services.min.js",
            "node_modules/@bower_components/ovh-angular-toaster/dist/ovh-angular-toaster.min.js",
            "node_modules/@bower_components/messenger/build/js/messenger.min.js",
            "node_modules/@bower_components/ovh-angular-toaster/dist/ovh-angular-toaster.min.js",
            "node_modules/@bower_components/ovh-jquery-ui-draggable-ng/dist/ovh-jquery-ui-draggable-ng.min.js",
            "node_modules/@bower_components/ovh-common-style/dist/ovh-common-style.min.js"
        ],
        css : [
            "node_modules/@bower_components/moment-picker/dist/angular-moment-picker.min.css",
            "node_modules/@bower_components/ovh-utils-angular/bin/template/contracts/contracts.css",
            "node_modules/@bower_components/ovh-utils-angular/bin/template/tooltipBox/*.css",
            "node_modules/@bower_components/ovh-utils-angular/bin/template/contracts/*.css",
            "node_modules/@bower_components/ovh-utils-angular/bin/template/inputNumber/*.css",
            "node_modules/@bower_components/ovh-utils-angular/bin/template/wizard/wizardStep/*.css",
            "client/app/js/app/libs/tinymce/skins/lightgray/content.min.css",
            "client/app/js/app/libs/tinymce/skins/lightgray/skin.min.css",
            "node_modules/@bower_components/pagination-front/dist/pagination-front.min.css",
            "node_modules/@bower_components/font-awesome/css/font-awesome.min.css",
            "node_modules/@bower_components/animate.css/animate.min.css",
            "client/app/components/expiration/service-expiration-date.component.css",
            "node_modules/@bower_components/angular-xeditable/dist/css/xeditable.min.css",
            "client/app/components/fileEditor/file-editor.css",
            "client/app/js/app/directives/incrementNumber/incrementNumber.css",
            "node_modules/@bower_components/sso-auth-modal-plugin/dist/sso-auth-modal-plugin.css",
            "node_modules/@bower_components/ovh-angular-responsive-popover/dist/ovh-angular-responsive-popover.min.css",
            "node_modules/@bower_components/ovh-angular-tail-logs/dist/ovh-angular-tail-logs.css",
            "node_modules/@bower_components/messenger/build/css/messenger.css",
            "node_modules/@bower_components/ng-ckeditor/ng-ckeditor.css"
        ]
    },
    resources: {
        i18n: [
            "client/app/**/translations/**/*.xml",
            "client/app/resources/i18n/**/*.xml"
        ]
    }
};
