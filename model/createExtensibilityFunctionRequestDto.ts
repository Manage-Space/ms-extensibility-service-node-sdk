/**
 * ManageSpace Extensibility API
 * ManageSpace Extensibility API Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ExtensibilityFunctionRequest } from './extensibilityFunctionRequest';

export class CreateExtensibilityFunctionRequestDto {
    /**
    * Extensibility function.
    */
    'payload': Array<ExtensibilityFunctionRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<ExtensibilityFunctionRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateExtensibilityFunctionRequestDto.attributeTypeMap;
    }
}

