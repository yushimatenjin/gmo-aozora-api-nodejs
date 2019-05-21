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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GmoAozoraNetBankOpenApi) {
      root.GmoAozoraNetBankOpenApi = {};
    }
    root.GmoAozoraNetBankOpenApi.VaTransaction = factory(root.GmoAozoraNetBankOpenApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VaTransaction model module.
   * @module model/VaTransaction
   * @version 1.1.12
   */

  /**
   * Constructs a new <code>VaTransaction</code>.
   * @alias module:model/VaTransaction
   * @class
   * @param vaId {String} 振込入金口座ID 半角数字 振込入金口座を識別するID 
   * @param transactionDate {String} 取引日 半角文字 YYYY-MM-DD形式 
   * @param valueDate {String} 起算日 半角文字 YYYY-MM-DD形式 
   * @param vaBranchCode {String} 支店コード 半角数字 
   * @param vaBranchNameKana {String} 支店名カナ 半角文字 
   * @param vaAccountNumber {String} 口座番号 半角数字 
   * @param vaAccountNameKana {String} 口座名義カナ 半角文字 
   * @param depositAmount {String} 入金金額 半角数字 
   * @param remitterNameKana {String} 振込依頼人名カナ 半角文字 
   * @param paymentBankName {String} 仕向金融機関名カナ 半角文字 
   * @param paymentBranchName {String} 仕向支店名カナ 半角文字 
   * @param partnerName {String} サービス企業名 全角文字 振込入金口座契約サービス企業名 
   * @param itemKey {String} 明細キー 半角数字 口座ID毎に設定される明細キー（明細データtimestamp（μs））
   */
  var exports = function(vaId, transactionDate, valueDate, vaBranchCode, vaBranchNameKana, vaAccountNumber, vaAccountNameKana, depositAmount, remitterNameKana, paymentBankName, paymentBranchName, partnerName, itemKey) {
    var _this = this;

    _this['vaId'] = vaId;
    _this['transactionDate'] = transactionDate;
    _this['valueDate'] = valueDate;
    _this['vaBranchCode'] = vaBranchCode;
    _this['vaBranchNameKana'] = vaBranchNameKana;
    _this['vaAccountNumber'] = vaAccountNumber;
    _this['vaAccountNameKana'] = vaAccountNameKana;
    _this['depositAmount'] = depositAmount;
    _this['remitterNameKana'] = remitterNameKana;
    _this['paymentBankName'] = paymentBankName;
    _this['paymentBranchName'] = paymentBranchName;
    _this['partnerName'] = partnerName;

    _this['itemKey'] = itemKey;
  };

  /**
   * Constructs a <code>VaTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VaTransaction} obj Optional instance to populate.
   * @return {module:model/VaTransaction} The populated <code>VaTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vaId')) {
        obj['vaId'] = ApiClient.convertToType(data['vaId'], 'String');
      }
      if (data.hasOwnProperty('transactionDate')) {
        obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
      }
      if (data.hasOwnProperty('valueDate')) {
        obj['valueDate'] = ApiClient.convertToType(data['valueDate'], 'String');
      }
      if (data.hasOwnProperty('vaBranchCode')) {
        obj['vaBranchCode'] = ApiClient.convertToType(data['vaBranchCode'], 'String');
      }
      if (data.hasOwnProperty('vaBranchNameKana')) {
        obj['vaBranchNameKana'] = ApiClient.convertToType(data['vaBranchNameKana'], 'String');
      }
      if (data.hasOwnProperty('vaAccountNumber')) {
        obj['vaAccountNumber'] = ApiClient.convertToType(data['vaAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('vaAccountNameKana')) {
        obj['vaAccountNameKana'] = ApiClient.convertToType(data['vaAccountNameKana'], 'String');
      }
      if (data.hasOwnProperty('depositAmount')) {
        obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'String');
      }
      if (data.hasOwnProperty('remitterNameKana')) {
        obj['remitterNameKana'] = ApiClient.convertToType(data['remitterNameKana'], 'String');
      }
      if (data.hasOwnProperty('paymentBankName')) {
        obj['paymentBankName'] = ApiClient.convertToType(data['paymentBankName'], 'String');
      }
      if (data.hasOwnProperty('paymentBranchName')) {
        obj['paymentBranchName'] = ApiClient.convertToType(data['paymentBranchName'], 'String');
      }
      if (data.hasOwnProperty('partnerName')) {
        obj['partnerName'] = ApiClient.convertToType(data['partnerName'], 'String');
      }
      if (data.hasOwnProperty('remarks')) {
        obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
      }
      if (data.hasOwnProperty('itemKey')) {
        obj['itemKey'] = ApiClient.convertToType(data['itemKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * 振込入金口座ID 半角数字 振込入金口座を識別するID 
   * @member {String} vaId
   */
  exports.prototype['vaId'] = undefined;
  /**
   * 取引日 半角文字 YYYY-MM-DD形式 
   * @member {String} transactionDate
   */
  exports.prototype['transactionDate'] = undefined;
  /**
   * 起算日 半角文字 YYYY-MM-DD形式 
   * @member {String} valueDate
   */
  exports.prototype['valueDate'] = undefined;
  /**
   * 支店コード 半角数字 
   * @member {String} vaBranchCode
   */
  exports.prototype['vaBranchCode'] = undefined;
  /**
   * 支店名カナ 半角文字 
   * @member {String} vaBranchNameKana
   */
  exports.prototype['vaBranchNameKana'] = undefined;
  /**
   * 口座番号 半角数字 
   * @member {String} vaAccountNumber
   */
  exports.prototype['vaAccountNumber'] = undefined;
  /**
   * 口座名義カナ 半角文字 
   * @member {String} vaAccountNameKana
   */
  exports.prototype['vaAccountNameKana'] = undefined;
  /**
   * 入金金額 半角数字 
   * @member {String} depositAmount
   */
  exports.prototype['depositAmount'] = undefined;
  /**
   * 振込依頼人名カナ 半角文字 
   * @member {String} remitterNameKana
   */
  exports.prototype['remitterNameKana'] = undefined;
  /**
   * 仕向金融機関名カナ 半角文字 
   * @member {String} paymentBankName
   */
  exports.prototype['paymentBankName'] = undefined;
  /**
   * 仕向支店名カナ 半角文字 
   * @member {String} paymentBranchName
   */
  exports.prototype['paymentBranchName'] = undefined;
  /**
   * サービス企業名 全角文字 振込入金口座契約サービス企業名 
   * @member {String} partnerName
   */
  exports.prototype['partnerName'] = undefined;
  /**
   * 摘要内容 全半角文字 該当データがない場合は項目自体を設定しません 
   * @member {String} remarks
   */
  exports.prototype['remarks'] = undefined;
  /**
   * 明細キー 半角数字 口座ID毎に設定される明細キー（明細データtimestamp（μs））
   * @member {String} itemKey
   */
  exports.prototype['itemKey'] = undefined;



  return exports;
}));


