import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Kommunicate
 * @description
 * The plugin for the Kommunicate SDK.
 * With the help of this plugin, you can easily add human + bot chat support functionality to you app.
 * Refer to: TODO: insert site link
 * For documentation: TODO: insert link
 * @usage
 * ```typescript
 * import { Kommunicate } from '@awesome-cordova-plugins/Kommunicate';
 *
 * constructor(private kommunicate: Kommunicate) { }
 * //also add [..., Kommunicate, ... ] inside the providers array, if required
 *
 * var kmUser = {
 *    userId : 'randomstring',
 *    authenticationTypeId : 1
 * };
 *
 * this.kommunicate.login(kmUser)
 *   .then((res: any) => console.log("Sucessfully logged in." + res))
 *   .catch((error: any) => console.error("Error logging in." + error));
 *
 * var conversationObject = {
 *    isUnique : false
 * };
 *
 * this.kommunicate.conversationBuilder(converationObject)
 *   .then((clientChannelKey: any) => console.log("Kommunicate create conversation successful the clientChannelKey is : " + clientChannelKey))
 *   .catch((error: any) => console.error("Error creating conversation." + error));
 *
 * ```
 */
export declare class Kommunicate extends AwesomeCordovaNativePlugin {
    /**
     * Login the user with the details passed in
     * Creates a new user with the details provided there is no existing user
     *
     * var kmUser = {
     *    'userId' : 'userId',   //Replace it with the userId of the logged in user
     *    'password' : 'password',  //replace with password
     *    'authenticationTypeId' : 1,
     *    'imageLink' : <image-link-for-user>
     *    'applicationId' : '<APP_ID>',  //replace this with your APP_ID from Applozic Dashboard
     *    'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
     * };
     *
     * @param kmUser {any} the user details
     * @returns {Promise<any>} Returns a promise
     */
    login(kmUser: any): Promise<any>;
    /**
     * Register for push notification
     *
     * @returns {Promise<any>} Returns a promise
     */
    registerPushNotification(): Promise<any>;
    /**
     * Check if any user is logged in or not
     *
     * @returns {Promise<any>} Returns a promise
     */
    isLoggedIn(): Promise<any>;
    /**
     * Update the token for push notifications
     *
     * @param token {string} the user details
     * @returns {Promise<any>} Returns a promise
     */
    updatePushNotificationToken(token: string): Promise<any>;
    /**
     * Launch the conversation screen (it contains all the existing conversations)
     *
     * @returns {Promise<any>} Returns a promise
     */
    launchConversation(): Promise<any>;
    /**
     * Launch the conversation identified by the given channel(conversation) key
     *
     * let convObj = {
     *   'clientChannelKey' : clientChannelKey, //pass the clientChannelKey here
     *   'takeOrder' : true //skip chat list on back press, pass false if you want to show chat list on back press
     * };
     *
     * @param conversationObject {any} the channel key and other information
     * @returns {Promise<any>} Returns a promise
     */
    launchParticularConversation(conversationObject: any): Promise<any>;
    /**
     * Start a new conversation, details about the conversation to be passed as parameters
     *
     * @deprecated
     * @param conversationParams
     * @param converationParams {any} the user details
     * @returns {Promise<any>} Returns a promise
     */
    startNewConversation(conversationParams: any): Promise<any>;
    /**
     * Process push notifications
     *
     * @param data {any} the user details
     * @returns {boolean} Returns true/false
     */
    processPushNotification(data: any): boolean;
    /**
     * Logout the current user
     *
     * @returns {Promise<any>} Returns a promise
     */
    logout(): Promise<any>;
    /**
     * Start a single chat (conversation)
     *
     * @deprecated
     * @param data {any} the user details
     * @returns {Promise<any>} Returns a promise
     */
    startSingleChat(data: any): Promise<any>;
    /**
     * Launches a conversation with the properties passed in the conversation param
     *
     * var conversationObject = {
     *   'isUnique' : false,
     *   'agentIds':['<AGENT_ID>'],  //List of agentIds. AGENT_ID is the emailID used to signup on Kommunicate
     *   'botIds': ['<BOT_ID>']  //List of botIds. Go to Manage Bots(https://dashboard.kommunicate.io/bots/manage-bots) -> Copy botID
     * };
     *
     * @param conversationObject {any} the user details
     * @param converationObject
     * @returns {Promise<any>} Returns a promise
     */
    conversationBuilder(converationObject: any): Promise<any>;
}
