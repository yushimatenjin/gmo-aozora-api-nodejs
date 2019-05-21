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
    define(['ApiClient', 'model/BulkTransferResponse', 'model/TransferAccept', 'model/TransferApply'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkTransferResponse'), require('./TransferAccept'), require('./TransferApply'));
  } else {
    // Browser globals (root is window)
    if (!root.GmoAozoraNetBankOpenApi) {
      root.GmoAozoraNetBankOpenApi = {};
    }
    root.GmoAozoraNetBankOpenApi.BulkTransferDetail = factory(root.GmoAozoraNetBankOpenApi.ApiClient, root.GmoAozoraNetBankOpenApi.BulkTransferResponse, root.GmoAozoraNetBankOpenApi.TransferAccept, root.GmoAozoraNetBankOpenApi.TransferApply);
  }
}(this, function(ApiClient, BulkTransferResponse, TransferAccept, TransferApply) {
  'use strict';




  /**
   * The BulkTransferDetail model module.
   * @module model/BulkTransferDetail
   * @version 1.1.12
   */

  /**
   * Constructs a new <code>BulkTransferDetail</code>.
   * @alias module:model/BulkTransferDetail
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>BulkTransferDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkTransferDetail} obj Optional instance to populate.
   * @return {module:model/BulkTransferDetail} The populated <code>BulkTransferDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transferStatus')) {
        obj['transferStatus'] = ApiClient.convertToType(data['transferStatus'], 'String');
      }
      if (data.hasOwnProperty('transferStatusName')) {
        obj['transferStatusName'] = ApiClient.convertToType(data['transferStatusName'], 'String');
      }
      if (data.hasOwnProperty('transferTypeName')) {
        obj['transferTypeName'] = ApiClient.convertToType(data['transferTypeName'], 'String');
      }
      if (data.hasOwnProperty('remitterCode')) {
        obj['remitterCode'] = ApiClient.convertToType(data['remitterCode'], 'String');
      }
      if (data.hasOwnProperty('isFeeFreeUse')) {
        obj['isFeeFreeUse'] = ApiClient.convertToType(data['isFeeFreeUse'], 'Boolean');
      }
      if (data.hasOwnProperty('isFeePointUse')) {
        obj['isFeePointUse'] = ApiClient.convertToType(data['isFeePointUse'], 'Boolean');
      }
      if (data.hasOwnProperty('pointName')) {
        obj['pointName'] = ApiClient.convertToType(data['pointName'], 'String');
      }
      if (data.hasOwnProperty('feeLaterPaymentFlg')) {
        obj['feeLaterPaymentFlg'] = ApiClient.convertToType(data['feeLaterPaymentFlg'], 'Boolean');
      }
      if (data.hasOwnProperty('totalFee')) {
        obj['totalFee'] = ApiClient.convertToType(data['totalFee'], 'String');
      }
      if (data.hasOwnProperty('totalDebitAmount')) {
        obj['totalDebitAmount'] = ApiClient.convertToType(data['totalDebitAmount'], 'String');
      }
      if (data.hasOwnProperty('transferApplies')) {
        obj['transferApplies'] = ApiClient.convertToType(data['transferApplies'], [TransferApply]);
      }
      if (data.hasOwnProperty('transferAccepts')) {
        obj['transferAccepts'] = ApiClient.convertToType(data['transferAccepts'], [TransferAccept]);
      }
      if (data.hasOwnProperty('bulktransferResponses')) {
        obj['bulktransferResponses'] = ApiClient.convertToType(data['bulktransferResponses'], [BulkTransferResponse]);
      }
    }
    return obj;
  }

  /**
   * 振込ステータス 半角数字 2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、 11:予約中、12:手続中、13:リトライ中、 20:手続済、30:不能・組戻あり、40:手続不成立 
   * @member {String} transferStatus
   */
  exports.prototype['transferStatus'] = undefined;
  /**
   * 振込ステータス名 全角文字 
   * @member {String} transferStatusName
   */
  exports.prototype['transferStatusName'] = undefined;
  /**
   * 種類 全角文字 総合振込　を表示 
   * @member {String} transferTypeName
   */
  exports.prototype['transferTypeName'] = undefined;
  /**
   * 会社コード(振込依頼人コード) 銀行側で番号を付与している場合のみ表示 該当する情報が無い場合は項目自体を設定しません 
   * @member {String} remitterCode
   */
  exports.prototype['remitterCode'] = undefined;
  /**
   * 振込無料回数利用可否 振込利用回数の利用可否（無料回数の利用可否の設定であり、実際の利用有無ではありません） 総合振込では無料回数は利用できないため、常にfalse 
   * @member {Boolean} isFeeFreeUse
   */
  exports.prototype['isFeeFreeUse'] = undefined;
  /**
   * ポイント利用可否 ポイント会社の利用可否 
   * @member {Boolean} isFeePointUse
   */
  exports.prototype['isFeePointUse'] = undefined;
  /**
   * ポイント会社名 全角文字 
   * @member {String} pointName
   */
  exports.prototype['pointName'] = undefined;
  /**
   * 手数料後払区分 「true=後払い」以外の場合は項目自体を設定しません 
   * @member {Boolean} feeLaterPaymentFlg
   */
  exports.prototype['feeLaterPaymentFlg'] = undefined;
  /**
   * 合計手数料 半角数字 振り込み完了時以外は、予定の手数料 
   * @member {String} totalFee
   */
  exports.prototype['totalFee'] = undefined;
  /**
   * 合計出金金額 半角数字 手数料+振込金額　ただし、振込完了時以外は、予定の手数料 
   * @member {String} totalDebitAmount
   */
  exports.prototype['totalDebitAmount'] = undefined;
  /**
   * 振込申請情報 振込申請情報のリスト 
   * @member {Array.<module:model/TransferApply>} transferApplies
   */
  exports.prototype['transferApplies'] = undefined;
  /**
   * 振込受付情報 振込受付情報のリスト 該当する情報が無い場合は空のリストを返却 
   * @member {Array.<module:model/TransferAccept>} transferAccepts
   */
  exports.prototype['transferAccepts'] = undefined;
  /**
   * 総合振込レスポンス情報 総合振込レスポンス情報のリスト 該当する情報が無い場合は空のリストを返却 
   * @member {Array.<module:model/BulkTransferResponse>} bulktransferResponses
   */
  exports.prototype['bulktransferResponses'] = undefined;



  return exports;
}));


