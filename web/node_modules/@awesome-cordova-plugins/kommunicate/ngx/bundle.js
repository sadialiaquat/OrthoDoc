'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var Kommunicate = /** @class */ (function (_super) {
    tslib.__extends(Kommunicate, _super);
    function Kommunicate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kommunicate.prototype.login = function (kmUser) { return core.cordova(this, "login", {}, arguments); };
    Kommunicate.prototype.registerPushNotification = function () { return core.cordova(this, "registerPushNotification", {}, arguments); };
    Kommunicate.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    Kommunicate.prototype.updatePushNotificationToken = function (token) { return core.cordova(this, "updatePushNotificationToken", {}, arguments); };
    Kommunicate.prototype.launchConversation = function () { return core.cordova(this, "launchConversation", {}, arguments); };
    Kommunicate.prototype.launchParticularConversation = function (conversationObject) { return core.cordova(this, "launchParticularConversation", {}, arguments); };
    Kommunicate.prototype.startNewConversation = function (conversationParams) { return core.cordova(this, "startNewConversation", {}, arguments); };
    Kommunicate.prototype.processPushNotification = function (data) { return core.cordova(this, "processPushNotification", { "sync": true }, arguments); };
    Kommunicate.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    Kommunicate.prototype.startSingleChat = function (data) { return core.cordova(this, "startSingleChat", {}, arguments); };
    Kommunicate.prototype.conversationBuilder = function (converationObject) { return core.cordova(this, "conversationBuilder", {}, arguments); };
    Kommunicate.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Kommunicate, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Kommunicate.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Kommunicate });
    Kommunicate.pluginName = "Kommunicate";
    Kommunicate.plugin = "kommunicate-cordova-plugin";
    Kommunicate.pluginRef = "kommunicate";
    Kommunicate.repo = "https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin";
    Kommunicate.platforms = ["Android", "Browser", "iOS"];
    Kommunicate = tslib.__decorate([], Kommunicate);
    return Kommunicate;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Kommunicate, decorators: [{
            type: i0.Injectable
        }], propDecorators: { login: [], registerPushNotification: [], isLoggedIn: [], updatePushNotificationToken: [], launchConversation: [], launchParticularConversation: [], startNewConversation: [], processPushNotification: [], logout: [], startSingleChat: [], conversationBuilder: [] } });

exports.Kommunicate = Kommunicate;
