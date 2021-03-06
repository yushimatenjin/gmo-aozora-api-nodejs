/**
 * GMO Aozora Net Bank Open API
 * <p>Ph2.5向けに作成したもの</p> 
 *
 * OpenAPI spec version: 1.1.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GmoAozoraNetBankOpenApi);
  }
}(this, function(expect, GmoAozoraNetBankOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GmoAozoraNetBankOpenApi.WebhooksApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhooksApi', function() {
    describe('accountsUsing', function() {
      it('should call accountsUsing successfully', function(done) {
        //uncomment below and update the code to test accountsUsing
        //instance.accountsUsing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsUsingGET', function() {
      it('should call accountsUsingGET successfully', function(done) {
        //uncomment below and update the code to test accountsUsingGET
        //instance.accountsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
