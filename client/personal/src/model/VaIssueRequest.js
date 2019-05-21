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
    root.GmoAozoraNetBankOpenApi.VaIssueRequest = factory(root.GmoAozoraNetBankOpenApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VaIssueRequest model module.
   * @module model/VaIssueRequest
   * @version 1.1.12
   */

  /**
   * Constructs a new <code>VaIssueRequest</code>.
   * @alias module:model/VaIssueRequest
   * @class
   * @param vaTypeCode {String} 振込入金口座　種類コード 半角数字 ・1=期限型 ・2=継続型 
   * @param issueRequestCount {String} 発行口座数 半角数字 1回のリクエストで1,000口座まで発行可能 
   */
  var exports = function(vaTypeCode, issueRequestCount) {
    var _this = this;

    _this['vaTypeCode'] = vaTypeCode;
    _this['issueRequestCount'] = issueRequestCount;




  };

  /**
   * Constructs a <code>VaIssueRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VaIssueRequest} obj Optional instance to populate.
   * @return {module:model/VaIssueRequest} The populated <code>VaIssueRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vaTypeCode')) {
        obj['vaTypeCode'] = ApiClient.convertToType(data['vaTypeCode'], 'String');
      }
      if (data.hasOwnProperty('issueRequestCount')) {
        obj['issueRequestCount'] = ApiClient.convertToType(data['issueRequestCount'], 'String');
      }
      if (data.hasOwnProperty('raId')) {
        obj['raId'] = ApiClient.convertToType(data['raId'], 'String');
      }
      if (data.hasOwnProperty('vaContractAuthKey')) {
        obj['vaContractAuthKey'] = ApiClient.convertToType(data['vaContractAuthKey'], 'String');
      }
      if (data.hasOwnProperty('vaHolderNameKana')) {
        obj['vaHolderNameKana'] = ApiClient.convertToType(data['vaHolderNameKana'], 'String');
      }
      if (data.hasOwnProperty('vaHolderNamePos')) {
        obj['vaHolderNamePos'] = ApiClient.convertToType(data['vaHolderNamePos'], 'String');
      }
    }
    return obj;
  }

  /**
   * 振込入金口座　種類コード 半角数字 ・1=期限型 ・2=継続型 
   * @member {String} vaTypeCode
   */
  exports.prototype['vaTypeCode'] = undefined;
  /**
   * 発行口座数 半角数字 1回のリクエストで1,000口座まで発行可能 
   * @member {String} issueRequestCount
   */
  exports.prototype['issueRequestCount'] = undefined;
  /**
   * 入金口座ID 半角数字 科目コードが以下の口座IDのみ受け付けます ・01=普通預金（有利息） ・02=普通預金（決済用） 必須 
   * @member {String} raId
   */
  exports.prototype['raId'] = undefined;
  /**
   * 振込入金口座API認証情報 半角英数字 NULLを設定 値が設定されている場合は「400 Bad Request」を返却 
   * @member {String} vaContractAuthKey
   */
  exports.prototype['vaContractAuthKey'] = undefined;
  /**
   * 追加名義カナ 半角文字 振込入金口座名義（※）に任意の文字を追加する場合、指定 ※ご登録されている「姓カナ + 半角スペース1文字 + 名カナ」 （屋号カナは含みません）  追加名義カナで指定できる文字数 = 40 - 振込入金口座名義の文字数 合計が40文字を超える場合は追加名義カナの後部から文字が削られます  ・使用可能な記号は「/」、「(」、「)」、「.」、「,」、「-」 ・一部の非許容文字は、許容文字に変換を行います ・濁点、半濁点は１文字として数えます ・追加名義カナを前につける場合、半角スペースは追加名義カナの右側に1文字のみ許容します ・追加名義カナを前につける場合、追加名義カナの左側に半角スペースは許容しません ・追加名義カナを前につける場合、追加名義カナの中に半角の連続スペースは許容しません
   * @member {String} vaHolderNameKana
   */
  exports.prototype['vaHolderNameKana'] = undefined;
  /**
   * 追加名義位置 半角数字 追加名義カナを口座名義の前につけるか後ろにつけるかの指定 ・1=通常（後ろにつける） ・2=前につける 指定が無い場合は後ろにつけます 
   * @member {String} vaHolderNamePos
   */
  exports.prototype['vaHolderNamePos'] = undefined;



  return exports;
}));


