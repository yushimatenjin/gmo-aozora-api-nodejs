/**
 * GMO Aozora Net Bank Open API
 * <p>オープンAPI仕様書（PDF版）は下記リンクをご参照ください</p> <div>   <div style='display:inline-block;'><a style='text-decoration:none; font-weight:bold; color:#00b8d4;' href='https://gmo-aozora.com/business/service/api-specification.html' target='_blank'>オープンAPI仕様書</a></div><div style='display:inline-block; margin-left:2px; left:2px; width:10px; height:10px; border-top:2px solid #00b8d4; border-right:2px solid #00b8d4; transparent;-webkit-transform:rotate(45deg); transform: rotate(45deg);'></div> </div> <h4 style='margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;'>共通仕様</h4> <div style='width:100%; margin:10px;'>   <p style='font-weight:bold; color:#616161;'>＜HTTPリクエストヘッダ＞</p>   <div style='display:table; margin-left:10px; background-color:#29659b;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff;'>項目</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; color:#fff;'>仕様</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>プロトコル</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>HTTP1.1/HTTPS</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>charset</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>UTF-8</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>content-type</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>application/json</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>domain_name</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>       本番環境：api.gmo-aozora.com</br>       開発環境：stg-api.gmo-aozora.com     </div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>メインURL</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>       https://{domain_name}/ganb/api/corporation/{version}</br>       <span style='border-bottom:solid 1px;'>Version:1.x.x</span> の場合</br>       　https://api.gmo-aozora.com/ganb/api/corporation/<span style='border-bottom:solid 1px;'>v1</span>     </div>   </div> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜リクエスト共通仕様＞</p>   <p style='padding-left:20px; font-weight:bold; color:#616161;'>NULLデータの扱い</p>   <p style='padding-left:40px;'>パラメータの値が空の場合、またはパラメータ自体が設定されていない場合、どちらもNULLとして扱います</p> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜レスポンス共通仕様＞</p>   <p style='padding-left:20px; font-weight:bold; color:#616161;'>NULLデータの扱い</p>   <ul>     <li>レスポンスデータ</li>       <ul>         <li style='list-style-type:none;'>レスポンスデータの値が空の場合または、レスポンスデータ自体が設定されない場合は「項目自体を設定しません」と記載</li>       </ul>     <li>配列</li>       <ul>         <li style='list-style-type:none;'>配列の要素の値が空の場合は「空のリスト」と記載</li>         <li style='list-style-type:none;'>配列自体が設定されない場合は「項目自体を設定しません」と記載</li>       </ul>   </ul> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜更新系APIに関する注意事項＞</p>   <ul>     <li style='list-style-type:none;'>更新系処理がタイムアウトとなった場合、処理自体は実行されている可能性がありますので、</li>     <li style='list-style-type:none;'>再実行を行う必要がある場合は必ず照会系の処理で実行状況を確認してから再実行を行ってください</li>   </ul> </div> 
 *
 * OpenAPI spec version: 1.1.12
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/TransferCancelRequest', 'model/TransferCancelResponse', 'model/TransferError', 'model/TransferFeeResponse', 'model/TransferRequest', 'model/TransferRequestResponse', 'model/TransferRequestResultResponse', 'model/TransferStatusResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/TransferCancelRequest'), require('../model/TransferCancelResponse'), require('../model/TransferError'), require('../model/TransferFeeResponse'), require('../model/TransferRequest'), require('../model/TransferRequestResponse'), require('../model/TransferRequestResultResponse'), require('../model/TransferStatusResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GmoAozoraNetBankOpenApi) {
      root.GmoAozoraNetBankOpenApi = {};
    }
    root.GmoAozoraNetBankOpenApi.TransferApi = factory(root.GmoAozoraNetBankOpenApi.ApiClient, root.GmoAozoraNetBankOpenApi.ErrorResponse, root.GmoAozoraNetBankOpenApi.TransferCancelRequest, root.GmoAozoraNetBankOpenApi.TransferCancelResponse, root.GmoAozoraNetBankOpenApi.TransferError, root.GmoAozoraNetBankOpenApi.TransferFeeResponse, root.GmoAozoraNetBankOpenApi.TransferRequest, root.GmoAozoraNetBankOpenApi.TransferRequestResponse, root.GmoAozoraNetBankOpenApi.TransferRequestResultResponse, root.GmoAozoraNetBankOpenApi.TransferStatusResponse);
  }
}(this, function(ApiClient, ErrorResponse, TransferCancelRequest, TransferCancelResponse, TransferError, TransferFeeResponse, TransferRequest, TransferRequestResponse, TransferRequestResultResponse, TransferStatusResponse) {
  'use strict';

  /**
   * Transfer service.
   * @module api/TransferApi
   * @version 1.1.12
   */

  /**
   * Constructs a new TransferApi. 
   * @alias module:api/TransferApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transferCancelUsingPOST operation.
     * @callback module:api/TransferApi~transferCancelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferCancelResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振込取消依頼
     * &lt;p&gt;振込・振込予約の取消を行うための依頼をします&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取消対象ステータス&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;申請中以降のステータスで取消が可能です&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;依頼中、作成中の状態は取消対象外です&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取消対象キー区分&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取消対象の取引の内容について指定して下さい&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取消対象キー区分と、取消対象の振込申請番号の状態がマッチしない場合は、「400 Bad Request」を返却します&lt;/p&gt; &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;振込・振替/一括振込の対象は1または2のみとなります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;3、4は指定不可となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理未利用の場合は、2を指定してください。その他は指定不可となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理利用中かつ、申請者による申請中ステータスの「取下」を行いたい場合は、1を指定してください&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理利用中かつ、承認可能者による予約中ステータスの「承認取消」を行いたい場合は、2を指定してください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;重複した依頼&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;同一の受付番号（振込申請番号）への重複した依頼はできません&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;なお、前回の振込取消依頼が期限切れとなれば依頼は可能となります&lt;/p&gt; &lt;/div&gt; 
     * @param {module:model/TransferCancelRequest} body HTTPリクエストボディ
     * @param {String} xAccessToken アクセストークン  minLength: 1 maxLength: 128 
     * @param {module:api/TransferApi~transferCancelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferCancelResponse}
     */
    this.transferCancelUsingPOST = function(body, xAccessToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling transferCancelUsingPOST");
      }

      // verify the required parameter 'xAccessToken' is set
      if (xAccessToken === undefined || xAccessToken === null) {
        throw new Error("Missing the required parameter 'xAccessToken' when calling transferCancelUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-access-token': xAccessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TransferCancelResponse;

      return this.apiClient.callApi(
        '/transfer/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferFeeUsingPOST operation.
     * @callback module:api/TransferApi~transferFeeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferFeeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振込手数料事前照会
     * &lt;p&gt;振込・振込予約を行うための依頼内容の事前チェックと手数料を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;最大99件まで登録可能&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;1件の場合通常の振込扱いとなり、2件以上で一括振込扱いとなります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;振込無料回数とポイントについては、算出から振込実行までの間に変動する可能性があるため、手数料算出時の計算対象から除外しています&lt;/p&gt; &lt;/div&gt; 
     * @param {module:model/TransferRequest} body HTTPリクエストボディ
     * @param {String} xAccessToken アクセストークン  minLength: 1 maxLength: 128 
     * @param {module:api/TransferApi~transferFeeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferFeeResponse}
     */
    this.transferFeeUsingPOST = function(body, xAccessToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling transferFeeUsingPOST");
      }

      // verify the required parameter 'xAccessToken' is set
      if (xAccessToken === undefined || xAccessToken === null) {
        throw new Error("Missing the required parameter 'xAccessToken' when calling transferFeeUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-access-token': xAccessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TransferFeeResponse;

      return this.apiClient.callApi(
        '/transfer/transferfee', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferRequestResultUsingGET operation.
     * @callback module:api/TransferApi~transferRequestResultUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferRequestResultResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振込依頼結果照会
     * 振込依頼、振込取消依頼の処理状態を照会します 振込取消依頼をした場合は、最後の依頼の結果コードが照会対象となります 
     * @param {String} accountId 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 
     * @param {String} applyNo 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  minLength: 16 maxLength: 16 
     * @param {String} xAccessToken アクセストークン  minLength: 1 maxLength: 128 
     * @param {module:api/TransferApi~transferRequestResultUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferRequestResultResponse}
     */
    this.transferRequestResultUsingGET = function(accountId, applyNo, xAccessToken, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transferRequestResultUsingGET");
      }

      // verify the required parameter 'applyNo' is set
      if (applyNo === undefined || applyNo === null) {
        throw new Error("Missing the required parameter 'applyNo' when calling transferRequestResultUsingGET");
      }

      // verify the required parameter 'xAccessToken' is set
      if (xAccessToken === undefined || xAccessToken === null) {
        throw new Error("Missing the required parameter 'xAccessToken' when calling transferRequestResultUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'accountId': accountId,
        'applyNo': applyNo,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-access-token': xAccessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TransferRequestResultResponse;

      return this.apiClient.callApi(
        '/transfer/request-result', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferRequestUsingPOST operation.
     * @callback module:api/TransferApi~transferRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振込依頼
     * &lt;p&gt;振込・振込予約を行うための依頼をします&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;最大99件まで登録可能&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;1件の場合通常の振込扱いとなり、2件以上で一括振込扱いとなります&lt;/p&gt; &lt;/div&gt; 
     * @param {module:model/TransferRequest} body HTTPリクエストボディ
     * @param {String} xAccessToken アクセストークン  minLength: 1 maxLength: 128 
     * @param {module:api/TransferApi~transferRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferRequestResponse}
     */
    this.transferRequestUsingPOST = function(body, xAccessToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling transferRequestUsingPOST");
      }

      // verify the required parameter 'xAccessToken' is set
      if (xAccessToken === undefined || xAccessToken === null) {
        throw new Error("Missing the required parameter 'xAccessToken' when calling transferRequestUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-access-token': xAccessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TransferRequestResponse;

      return this.apiClient.callApi(
        '/transfer/request', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferStatusUsingGET operation.
     * @callback module:api/TransferApi~transferStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振込状況照会
     * &lt;p&gt;仕向の振込状況および履歴を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取得上限件数&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;500件&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細数が500に満たないときは取得できる明細のみを返却します&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細が存在しない場合は「200：OK」とし明細を返却しません&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ページング&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;2ページ目以降を照会する際は、初回と同じリクエスト内容に、初回レスポンスの次明細キーを追加してリクエストしてください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ソート順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;振込照会対象期間区分の指定により下記となります  &lt;/p&gt;  &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;1：振込申請受付日　第1ソート：振込申請日昇順　第２ソート：振込申請番号昇順&lt;/p&gt;  &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;2：振込指定日　　　第1ソート：振込指定日昇順　第２ソート：振込申請番号昇順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;※振込照会対象期間区分の指定がない場合は、1：振込申請受付日と同じとします&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;width:600px; margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象期間&lt;/p&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px; background-color:#29659b;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff;&#39;&gt;日本語名&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9312;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9313;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9314;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9315;&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間From&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間To&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;ul&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9312;の場合　当日分の明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9313;の場合　対象期間From　～　当日までの明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9314;の場合　取引初回　～　対象期間Toまでの明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9315;の場合　対象期間From　～　対象期間Toまでの明細を返却&lt;/li&gt;   &lt;/ul&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin-bottom:40px;&#39; /&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;照会対象ステータス&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;申請中以降のステータスで照会が可能となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;依頼中、作成中の状態は照会対象外です&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;照会対象となる明細&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;振込・振替・およびその予約の履歴と状況が照会対象となります（APIからの依頼結果のみではありません）&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;定額自動振込契約によって自動登録された振込は照会対象となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;定額自動振込契約の申請状態と状況は対象外となります&lt;/p&gt; &lt;/div&gt; 
     * @param {String} accountId 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 
     * @param {String} queryKeyClass 照会対象キー区分 半角数字 照会対象のキー 1：振込申請照会対象指定、2：振込一括照会対象指定  minLength: 1 maxLength: 1 
     * @param {String} xAccessToken アクセストークン  minLength: 1 maxLength: 128 
     * @param {Object} opts Optional parameters
     * @param {String} opts.applyNo 受付番号（振込申請番号） 半角数字 照会対象の番号を設定 照会対象キー区分が、1のときは必須 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 16 maxLength: 16 
     * @param {String} opts.dateFrom 対象期間From 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 10 maxLength: 10 
     * @param {String} opts.dateTo 対象期間To 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10 
     * @param {String} opts.nextItemKey 次明細キー 半角数字 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 1 maxLength: 24 
     * @param {Array.<String>} opts.requestTransferStatus 照会対象ステータス  半角数字  2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、  11:予約中、12:手続中、13:リトライ中、  20:手続済、22:資金返却、24:組戻手続中、25:組戻済、26:組戻不成立、  40:手続不成立  照会対象キー区分が、2のときは設定可  それ以外は設定しません（値が設定されている場合は、「400 Bad Request」を返却）  配列のため、複数設定した場合は対象のステータスをOR条件で検索します  省略した場合は全てを設定したものとみなします  minLength: 1 maxLength: 3 
     * @param {String} opts.requestTransferClass 振込照会対象取得区分 半角数字 1：ALL、2：振込申請のみ、3：振込受付情報のみ 照会対象キー区分が2かつ、ビジネスID管理利用中の場合のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1 
     * @param {String} opts.requestTransferTerm 振込照会対象期間区分 半角数字 対象期間Fromと対象期間Toで指定する日付の区分 1：振込申請受付日　2：振込指定日 照会対象キー区分が2のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1 
     * @param {module:api/TransferApi~transferStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferStatusResponse}
     */
    this.transferStatusUsingGET = function(accountId, queryKeyClass, xAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transferStatusUsingGET");
      }

      // verify the required parameter 'queryKeyClass' is set
      if (queryKeyClass === undefined || queryKeyClass === null) {
        throw new Error("Missing the required parameter 'queryKeyClass' when calling transferStatusUsingGET");
      }

      // verify the required parameter 'xAccessToken' is set
      if (xAccessToken === undefined || xAccessToken === null) {
        throw new Error("Missing the required parameter 'xAccessToken' when calling transferStatusUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'accountId': accountId,
        'queryKeyClass': queryKeyClass,
        'applyNo': opts['applyNo'],
        'dateFrom': opts['dateFrom'],
        'dateTo': opts['dateTo'],
        'nextItemKey': opts['nextItemKey'],
        'requestTransferClass': opts['requestTransferClass'],
        'requestTransferTerm': opts['requestTransferTerm'],
      };
      var collectionQueryParams = {
        'requestTransferStatus': {
          value: opts['requestTransferStatus'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
        'x-access-token': xAccessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TransferStatusResponse;

      return this.apiClient.callApi(
        '/transfer/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
