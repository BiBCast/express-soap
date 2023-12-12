let axios = require("axios");

let body =
  '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wss="http://www.adonix.com/WSS">"\
<soapenv:Header/>"\
<soapenv:Body>"\
   <wss:getDescription soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">"\
      <callContext xsi:type="wss:CAdxCallContext">"\
         <codeLang xsi:type="xsd:string">ITA</codeLang>"\
         <poolAlias xsi:type="xsd:string">NSCORETEST</poolAlias>"\
         <poolId xsi:type="xsd:string">?</poolId>"\
         <requestConfig xsi:type="xsd:string">?</requestConfig>"\
      </callContext>"\
      <publicName xsi:type="xsd:string">WSCAST</publicName>"\
   </wss:getDescription>"\
</soapenv:Body>"\
</soapenv:Envelope>';

axios
  .post(
    "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl",
    body,
    {
      headers: {
        "Content-Type": "text/xml",
        /*  SoapAction: "",
        Authorization: "Basic YWRtaW46YWRtaW4=", */
      },
    }
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    //console.log("errr\n\n\n");
    //console.log(err);
  });
