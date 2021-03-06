# GmoAozoraNetBankOpenApi.TransferApi

All URIs are relative to *https://stg-api.gmo-aozora.com/ganb/api/corporation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transferCancelUsingPOST**](TransferApi.md#transferCancelUsingPOST) | **POST** /transfer/cancel | 振込取消依頼
[**transferFeeUsingPOST**](TransferApi.md#transferFeeUsingPOST) | **POST** /transfer/transferfee | 振込手数料事前照会
[**transferRequestResultUsingGET**](TransferApi.md#transferRequestResultUsingGET) | **GET** /transfer/request-result | 振込依頼結果照会
[**transferRequestUsingPOST**](TransferApi.md#transferRequestUsingPOST) | **POST** /transfer/request | 振込依頼
[**transferStatusUsingGET**](TransferApi.md#transferStatusUsingGET) | **GET** /transfer/status | 振込状況照会


# **transferCancelUsingPOST**
> TransferCancelResponse transferCancelUsingPOST(body, xAccessToken)

### 振込取消依頼

振込・振込予約の取消を行うための依頼をします

### 詳細説明

#### 取消対象ステータス
* 申請中以降のステータスで取消が可能です
* 依頼中、作成中の状態は取消対象外です

#### 取消対象キー区分
* 取消対象の取引の内容について指定して下さい
* 取消対象キー区分と、取消対象の振込申請番号の状態がマッチしない場合は、「400 Bad Request」を返却します
* 振込・振替/一括振込の対象は1または2のみとなります
* 3、4は指定不可となります
* ビジネスID管理未利用の場合は、2を指定してください。その他は指定不可となります
* ビジネスID管理利用中かつ、申請者による申請中ステータスの「取下」を行いたい場合は、1を指定してください
* ビジネスID管理利用中かつ、承認可能者による予約中ステータスの「承認取消」を行いたい場合は、2を指定してください

#### 重複した依頼
* 同一の受付番号（振込申請番号）への重複した依頼はできません
* なお、前回の振込取消依頼が期限切れとなれば依頼は可能となります

### Example
```javascript
let GmoAozoraNetBankOpenApi = require('./gmo-aozora-api-nodejs/client/corporate/src/index.js');

let apiInstance = new GmoAozoraNetBankOpenApi.TransferApi();
let body = new GmoAozoraNetBankOpenApi.TransferCancelRequest('accountId_example', 'cancelTargetKeyClass_example', 'applyNo_example'); // TransferCancelRequest | HTTPリクエストボディ
let xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};
apiInstance.transferCancelUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransferCancelRequest**](TransferCancelRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferCancelResponse**](TransferCancelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

# **transferFeeUsingPOST**
> TransferFeeResponse transferFeeUsingPOST(body, xAccessToken)

### 振込手数料事前照会

振込・振込予約を行うための依頼内容の事前チェックと手数料を照会します

### 詳細説明

* 最大99件まで登録可能
* 1件の場合通常の振込扱いとなり、2件以上で一括振込扱いとなります
* 合計振込手数料および個別振込手数料は、振込実行時までに手数料の改定や消費税の変更等が行われた場合は、当APIで返却した手数料とは異なる手数料が適用されることがあります
* 振込無料回数とポイントについては、算出から振込実行までの間に変動する可能性があるため、手数料算出時の計算対象から除外して返却されます

### Example
```javascript
let GmoAozoraNetBankOpenApi = require('./gmo-aozora-api-nodejs/client/corporate/src/index.js');

let apiInstance = new GmoAozoraNetBankOpenApi.TransferApi();
let transfer = new GmoAozoraNetBankOpenApi.Transfer('100', 'beneficiaryBankCode_example', 'beneficiaryBranchCode_example', '1', 'accountNumber_example', 'beneficiaryName_example')
let body = new GmoAozoraNetBankOpenApi.TransferRequest('accountId_example', 'transferDesignatedDate_example', [transfer]); // TransferRequest | HTTPリクエストボディ
let xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};
apiInstance.transferFeeUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransferRequest**](TransferRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferFeeResponse**](TransferFeeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

# **transferRequestResultUsingGET**
> TransferRequestResultResponse transferRequestResultUsingGET(accountId, applyNo, xAccessToken)

### 振込依頼結果照会

振込依頼、振込取消依頼の処理状態を照会します
* 振込取消依頼をした場合は、最後の依頼の結果コードが照会対象となります 

### Example
```javascript
let GmoAozoraNetBankOpenApi = require('./gmo-aozora-api-nodejs/client/corporate/src/index.js');

let apiInstance = new GmoAozoraNetBankOpenApi.TransferApi();
let accountId = "accountId_example"; // String | 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 
let applyNo = "applyNo_example"; // String | 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  minLength: 16 maxLength: 16 
let xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};
apiInstance.transferRequestResultUsingGET(accountId, applyNo, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29  | 
 **applyNo** | **String**| 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  minLength: 16 maxLength: 16  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferRequestResultResponse**](TransferRequestResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

# **transferRequestUsingPOST**
> TransferRequestResponse transferRequestUsingPOST(body, xAccessToken)

### 振込依頼

振込・振込予約を行うための依頼をします

### 詳細説明

* 最大99件まで登録可能
* 1件の場合通常の振込扱いとなり、2件以上で一括振込扱いとなります

### Example
```javascript
let GmoAozoraNetBankOpenApi = require('./gmo-aozora-api-nodejs/client/corporate/src/index.js');

let apiInstance = new GmoAozoraNetBankOpenApi.TransferApi();
let transfer = new GmoAozoraNetBankOpenApi.Transfer('100', 'beneficiaryBankCode_example', 'beneficiaryBranchCode_example', '1', 'accountNumber_example', 'beneficiaryName_example')
let body = new GmoAozoraNetBankOpenApi.TransferRequest('accountId_example', 'transferDesignatedDate_example', [transfer]); // TransferRequest | HTTPリクエストボディ
let xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};
apiInstance.transferRequestUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransferRequest**](TransferRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferRequestResponse**](TransferRequestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

# **transferStatusUsingGET**
> TransferStatusResponse transferStatusUsingGET(accountId, queryKeyClass, xAccessToken, opts)

### 振込状況照会

仕向の振込状況および履歴を照会します

### 詳細説明

#### 取得上限件数
* 500件
* 取得できる明細数が500に満たないときは取得できる明細のみを返却します
* 取得できる明細が存在しない場合は「200：OK」とし明細を返却しません

#### ページング
* 2ページ目以降を照会する際は、初回と同じリクエスト内容に、初回レスポンスの次明細キーを追加してリクエストしてください

#### ソート順

* 振込照会対象期間区分の指定により下記となります
  * 1：振込申請受付日　第1ソート：振込申請日昇順　第２ソート：振込申請番号昇順
  * 2：振込指定日　　　第1ソート：振込指定日昇順　第２ソート：振込申請番号昇順

※振込照会対象期間区分の指定がない場合は、1：振込申請受付日と同じとします

#### 対象期間

日本語名     | &#9312; | &#9313; | &#9314; | &#9315;
:----|:----:|:----:|:----:|:----:
対象期間From | × | ○ | × | ○
対象期間To   | × | × | ○ | ○
* &#9312;の場合: 当日分の明細を返却
* &#9313;の場合: 対象期間From ～ 当日までの明細を返却
* &#9314;の場合: 取引初回 ～ 対象期間Toまでの明細を返却
* &#9315;の場合: 対象期間From ～ 対象期間Toまでの明細を返却

#### 照会対象ステータス
* 申請中以降のステータスで照会が可能となります
* 依頼中、作成中の状態は照会対象外です

#### 照会対象となる明細
* 振込・振替・およびその予約の履歴と状況が照会対象となります（APIからの依頼結果のみではありません）
* 定額自動振込契約によって自動登録された振込は照会対象となります
* 定額自動振込契約の申請状態と状況は対象外となります

### Example
```javascript
let GmoAozoraNetBankOpenApi = require('./gmo-aozora-api-nodejs/client/corporate/src/index.js');

let apiInstance = new GmoAozoraNetBankOpenApi.TransferApi();
let accountId = "accountId_example"; // String | 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 
let queryKeyClass = "queryKeyClass_example"; // String | 照会対象キー区分 半角数字 照会対象のキー 1：振込申請照会対象指定、2：振込一括照会対象指定  minLength: 1 maxLength: 1 
let xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 
let opts = { 
  'applyNo': "applyNo_example", // String | 受付番号（振込申請番号） 半角数字 照会対象の番号を設定 照会対象キー区分が、1のときは必須 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 16 maxLength: 16 
  'dateFrom': "dateFrom_example", // String | 対象期間From 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 10 maxLength: 10 
  'dateTo': "dateTo_example", // String | 対象期間To 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10 
  'nextItemKey': "nextItemKey_example", // String | 次明細キー 半角数字 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 1 maxLength: 24 
  'requestTransferStatus': ["requestTransferStatus_example"], // [String] | 照会対象ステータス  半角数字  2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、  11:予約中、12:手続中、13:リトライ中、  20:手続済、22:資金返却、24:組戻手続中、25:組戻済、26:組戻不成立、  40:手続不成立  照会対象キー区分が、2のときは設定可  それ以外は設定しません（値が設定されている場合は、「400 Bad Request」を返却）  配列のため、複数設定した場合は対象のステータスをOR条件で検索します  省略した場合は全てを設定したものとみなします  minLength: 1 maxLength: 3 
  'requestTransferClass': "requestTransferClass_example", // String | 振込照会対象取得区分 半角数字 1：ALL、2：振込申請のみ、3：振込受付情報のみ NULLを設定 （値が設定されている場合は、「400 Bad Request」を返却）  minLength: 1 maxLength: 1 
  'requestTransferTerm': "requestTransferTerm_example" // String | 振込照会対象期間区分 半角数字 対象期間Fromと対象期間Toで指定する日付の区分 1：振込申請受付日　2：振込指定日 照会対象キー区分が2のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1 
};

let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};
apiInstance.transferStatusUsingGET(accountId, queryKeyClass, xAccessToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29  | 
 **queryKeyClass** | **String**| 照会対象キー区分 半角数字 照会対象のキー 1：振込申請照会対象指定、2：振込一括照会対象指定  minLength: 1 maxLength: 1  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 
 **applyNo** | **String**| 受付番号（振込申請番号） 半角数字 照会対象の番号を設定 照会対象キー区分が、1のときは必須 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 16 maxLength: 16  | [optional] 
 **dateFrom** | **String**| 対象期間From 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 10 maxLength: 10  | [optional] 
 **dateTo** | **String**| 対象期間To 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10  | [optional] 
 **nextItemKey** | **String**| 次明細キー 半角数字 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 1 maxLength: 24  | [optional] 
 **requestTransferStatus** | [**[String]**](String.md)| 照会対象ステータス  半角数字  2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、  11:予約中、12:手続中、13:リトライ中、  20:手続済、22:資金返却、24:組戻手続中、25:組戻済、26:組戻不成立、  40:手続不成立  照会対象キー区分が、2のときは設定可  それ以外は設定しません（値が設定されている場合は、「400 Bad Request」を返却）  配列のため、複数設定した場合は対象のステータスをOR条件で検索します  省略した場合は全てを設定したものとみなします  minLength: 1 maxLength: 3  | [optional] 
 **requestTransferClass** | **String**| 振込照会対象取得区分 半角数字 1：ALL、2：振込申請のみ、3：振込受付情報のみ 照会対象キー区分が2かつ、ビジネスID管理利用中の場合のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います minLength: 1 maxLength: 1  | [optional] 
 **requestTransferTerm** | **String**| 振込照会対象期間区分 半角数字 対象期間Fromと対象期間Toで指定する日付の区分 1：振込申請受付日　2：振込指定日 照会対象キー区分が2のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1  | [optional] 

### Return type

[**TransferStatusResponse**](TransferStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8
