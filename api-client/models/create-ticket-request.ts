/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreateTicketRequest
 */
export interface CreateTicketRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    'subject': string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    'message': string;
    /**
     * 
     * @type {number}
     * @memberof CreateTicketRequest
     */
    'group': number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateTicketRequest
     */
    'params': { [key: string]: string; };
}
