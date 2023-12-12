var soap = require("strong-soap").soap;
var WSDL = soap.WSDL;

var url =
  "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl";

// Pass in WSDL options if any
/* 
var requestArgs = {
  codeLang: "ITA",
  poolAlias: "NSCORETEST",
  publicName: "WSCAST",
};
 */
var options = {};
WSDL.open(url, options, function (err, wsdl) {
  // You should be able to get to any information of this WSDL from this object. Traverse
  // the WSDL tree to get  bindings, operations, services, portTypes, messages,
  // parts, and XSD elements/Attributes.

  // Set the wsdl object in the cache. The key (e.g. 'sagewsdl')
  // can be anything, but needs to match the parameter passed into soap.createClient()
  var clientOptions = {
    WSDL_CACHE: {
      sagewsdl: wsdl,
    },
  };
  soap.createClient("sagewsdl", clientOptions, function (err, client) {
    client.setSecurity(new soap.BasicAuthSecurity("admin", "admin"));
    var method =
      client["CAdxWebServiceXmlCCService"]["CAdxWebServiceXmlCC"][
        "getDescription"
      ];
    method(function (err, result, envelope, soapHeader) {
      //requestArgs
      //response envelope
      console.log("Response Envelope: \n" + envelope);
      console.log("Response Soap Header: \n" + soapHeader);
      console.log("Response Soap Error: \n" + err);

      //'result' is the response body
      console.log("Result: \n" + JSON.stringify(result));
    });
  });
});
