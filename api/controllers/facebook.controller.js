var mysql = require('mysql');

module.exports.facebookController = function(req, res) {
    console.log('facebook controller')


    const adsSdk = require('facebook-nodejs-ads-sdk');
	const accessToken = 'EAACEdEose0cBADPallOrZBvaWKkHI1KRRQ7t0h6TRjDe5KAZCcT29f14i7BUUXlV9lUpTCSR5EgXGZBU40xxeaiopYwFaFhjbWWxiXhTezsUI2mbN2vx3rJdWxXrWYVZCxJMZBZAd9slL0NZA4eTOG0FJY0OeIQz75R1GiskeO2PNPn4wZAVGis9LHLU3wtziPMZD';
	const api = adsSdk.FacebookAdsApi.init(accessToken);



    res
        .status(200)
        .json(req.body)

}