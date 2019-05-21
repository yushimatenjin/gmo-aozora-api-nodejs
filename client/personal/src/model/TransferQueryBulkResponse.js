/**
 * GMO Aozora Net Bank Open API
 * <p>オープンAPI仕様書（PDF版）は下記リンクをご参照ください</p> <div>   <div style='display:inline-block;'><a style='text-decoration:none; font-weight:bold; color:#00b8d4;' href='https://gmo-aozora.com/business/service/api-specification.html' target='_blank'>オープンAPI仕様書</a></div><div style='display:inline-block; margin-left:2px; left:2px; width:10px; height:10px; border-top:2px solid #00b8d4; border-right:2px solid #00b8d4; transparent;-webkit-transform:rotate(45deg); transform: rotate(45deg);'></div> </div> <h4 style='margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;'>共通仕様</h4> <div style='width:100%; margin:10px;'>   <p style='font-weight:bold; color:#616161;'>＜HTTPリクエストヘッダ＞</p>   <div style='display:table; margin-left:10px; background-color:#29659b;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff;'>項目</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; color:#fff;'>仕様</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>プロトコル</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>HTTP1.1/HTTPS</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>charset</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>UTF-8</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>content-type</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>application/json</div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>domain_name</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>       本番環境：api.gmo-aozora.com</br>       開発環境：stg-api.gmo-aozora.com     </div>   </div>   <div style='display:table; margin-left:10px;'>     <div style='display:table-cell; min-width:130px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;'>メインURL</div>     <div style='display:table-cell; width:85%; padding:9px; border:1px solid #fff; background-color:#f8f8f8;'>       https://{domain_name}/ganb/api/personal/{version}</br>       <span style='border-bottom:solid 1px;'>Version:1.x.x</span> の場合</br>       　https://api.gmo-aozora.com/ganb/api/personal/<span style='border-bottom:solid 1px;'>v1</span>     </div>   </div> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜リクエスト共通仕様＞</p>   <p style='padding-left:20px; font-weight:bold; color:#616161;'>NULLデータの扱い</p>   <p style='padding-left:40px;'>パラメータの値が空の場合、またはパラメータ自体が設定されていない場合、どちらもNULLとして扱います</p> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜レスポンス共通仕様＞</p>   <p style='padding-left:20px; font-weight:bold; color:#616161;'>NULLデータの扱い</p>   <ul>     <li>レスポンスデータ</li>       <ul>         <li style='list-style-type:none;'>レスポンスデータの値が空の場合または、レスポンスデータ自体が設定されない場合は「項目自体を設定しません」と記載</li>       </ul>     <li>配列</li>       <ul>         <li style='list-style-type:none;'>配列の要素の値が空の場合は「空のリスト」と記載</li>         <li style='list-style-type:none;'>配列自体が設定されない場合は「項目自体を設定しません」と記載</li>       </ul>   </ul> </div> <div style='margin:20px 10px;'>   <p style='font-weight:bold; color:#616161;'>＜更新系APIに関する注意事項＞</p>   <ul>     <li style='list-style-type:none;'>更新系処理がタイムアウトとなった場合、処理自体は実行されている可能性がありますので、</li>     <li style='list-style-type:none;'>再実行を行う必要がある場合は必ず照会系の処理で実行状況を確認してから再実行を行ってください</li>   </ul> </div> 
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
    define(['ApiClient', 'model/RequestTransferStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequestTransferStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.GmoAozoraNetBankOpenApi) {
      root.GmoAozoraNetBankOpenApi = {};
    }
    root.GmoAozoraNetBankOpenApi.TransferQueryBulkResponse = factory(root.GmoAozoraNetBankOpenApi.ApiClient, root.GmoAozoraNetBankOpenApi.RequestTransferStatus);
  }
}(this, function(ApiClient, RequestTransferStatus) {
  'use strict';




  /**
   * The TransferQueryBulkResponse model module.
   * @module model/TransferQueryBulkResponse
   * @version 1.1.12
   */

  /**
   * Constructs a new <code>TransferQueryBulkResponse</code>.
   * @alias module:model/TransferQueryBulkResponse
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TransferQueryBulkResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferQueryBulkResponse} obj Optional instance to populate.
   * @return {module:model/TransferQueryBulkResponse} The populated <code>TransferQueryBulkResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dateFrom')) {
        obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'String');
      }
      if (data.hasOwnProperty('dateTo')) {
        obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'String');
      }
      if (data.hasOwnProperty('requestNextItemKey')) {
        obj['requestNextItemKey'] = ApiClient.convertToType(data['requestNextItemKey'], 'String');
      }
      if (data.hasOwnProperty('requestTransferStatuses')) {
        obj['requestTransferStatuses'] = ApiClient.convertToType(data['requestTransferStatuses'], [RequestTransferStatus]);
      }
      if (data.hasOwnProperty('requestTransferClass')) {
        obj['requestTransferClass'] = ApiClient.convertToType(data['requestTransferClass'], 'String');
      }
      if (data.hasOwnProperty('requestTransferTerm')) {
        obj['requestTransferTerm'] = ApiClient.convertToType(data['requestTransferTerm'], 'String');
      }
      if (data.hasOwnProperty('hasNext')) {
        obj['hasNext'] = ApiClient.convertToType(data['hasNext'], 'Boolean');
      }
      if (data.hasOwnProperty('nextItemKey')) {
        obj['nextItemKey'] = ApiClient.convertToType(data['nextItemKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * 対象期間From 半角文字 リクエストしたときと同じ内容 対象期間（From）をYYYY-MM-DD形式で設定 
   * @member {String} dateFrom
   */
  exports.prototype['dateFrom'] = undefined;
  /**
   * 対象期間To 半角文字 リクエストしたときと同じ内容 対象期間（To）をYYYY-MM-DD形式で設定 
   * @member {String} dateTo
   */
  exports.prototype['dateTo'] = undefined;
  /**
   * リクエスト時次明細キー 半角数字 リクエストしたときと同じ内容 該当する情報が無い場合は項目自体を設定しません 
   * @member {String} requestNextItemKey
   */
  exports.prototype['requestNextItemKey'] = undefined;
  /**
   * 振込一括照会対象ステータス 該当する情報が無い場合は項目自体を設定しません 
   * @member {Array.<module:model/RequestTransferStatus>} requestTransferStatuses
   */
  exports.prototype['requestTransferStatuses'] = undefined;
  /**
   * 照会対象取得区分 半角数字 リクエストしたときと同じ内容 1：ALL、2：振込申請のみ、3：振込受付情報のみ 該当する情報が無い場合は項目自体を設定しません 
   * @member {String} requestTransferClass
   */
  exports.prototype['requestTransferClass'] = undefined;
  /**
   * 振込照会対象期間区分 半角数字 リクエストしたときと同じ内容 1：振込申請受付日　2：振込指定日 該当する情報が無い場合は項目自体を設定しません 
   * @member {String} requestTransferTerm
   */
  exports.prototype['requestTransferTerm'] = undefined;
  /**
   * 次明細フラグ ・true=次明細あり ・false=次明細なし 
   * @member {Boolean} hasNext
   */
  exports.prototype['hasNext'] = undefined;
  /**
   * 次明細キー 半角数字 次明細フラグがfalseの場合は項目自体を設定しません 
   * @member {String} nextItemKey
   */
  exports.prototype['nextItemKey'] = undefined;



  return exports;
}));


