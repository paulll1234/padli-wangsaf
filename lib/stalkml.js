const axios = require('axios')

function idML(userId, zoneId) {
    if (!userId) return new Error("no userId")
    if (!zoneId) return new Error("no zoneId")
    return new Promise((resolve, reject) => {
        let body = {
            "voucherPricePoint.id": 4150,
            "voucherPricePoint.price": "1565.0",
            "voucherPricePoint.variablePrice": 0,
            "n": "",
            "email": "",
            "userVariablePrice": 0,
            "order.data.profile": "",
            "user.userId": userId,
            "user.zoneId": zoneId,
            "msisdn": "",
            "voucherTypeName": "MOBILE_LEGENDS",
            "shopLang": "id_ID",
            "impactClickId": "",
            "affiliateTrackingId": "",
            "checkoutId": "",
            "tmwAccessToken": "",
            "anonymousId": ""
        };
        axios({
            "url": "https://order-sg.codashop.com/initPayment.action",
            "method": "POST",
            "data": body,
            "headers": {
                "Content-Type": "application/json; charset/utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            }
        }).then(({
            data
        }) => {
            resolve({
                "username": data.confirmationFields.username,
                "country": data.confirmationFields.country,
                "userId": userId,
                "zoneId": zoneId
            });
        }).catch(reject);
    });
}

module.exports = { idML }