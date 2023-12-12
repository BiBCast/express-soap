"use strict";

var soap = require("strong-soap").soap;
var WSDL = soap.WSDL;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url =
  "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl";

var requestArgs = {
  codeLang: "ITA",
  poolAlias: "NSCORETEST",
  publicName: "WSCAST",
};

var options = {
  codeLang: "ITA",
  poolAlias: "NSCORETEST",
  publicName: "WSCAST",
};
soap.createClient(url, options, function (err, client) {
  client.setSecurity(new soap.BasicAuthSecurity("admin", "admin"));
  let getdesc =
    client["CAdxWebServiceXmlCCService"]["CAdxWebServiceXmlCC"][
      "getDescription"
    ];

  getdesc(requestArgs, function (err, result, envelope, soapHeader) {
    //response envelope
    console.log("Response Envelope: \n" + envelope);
    //'result' is the response body
    console.log("Result: \n" + JSON.stringify(result));
  });
  //var method = client["StockQuote"]["StockQuoteSoap"]["GetQuote"];
  /*  method(requestArgs, function (err, result, envelope, soapHeader) {
    //response envelope
    console.log("Response Envelope: \n" + envelope);
    //'result' is the response body
    console.log("Result: \n" + JSON.stringify(result));
  }); */
});
