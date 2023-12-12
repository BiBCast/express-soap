"use strict";

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

let body2 =
  '&lt;soapenv:Envelope xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; xmlns:soapenv=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot; xmlns:wss=&quot;http://www.adonix.com/WSS&quot;&gt;"\
&lt;soapenv:Header/&gt;"\
&lt;soapenv:Body&gt;"\
   &lt;wss:getDescription soapenv:encodingStyle=&quot;http://schemas.xmlsoap.org/soap/encoding/&quot;&gt;"\
      &lt;callContext xsi:type=&quot;wss:CAdxCallContext&quot;&gt;"\
         &lt;codeLang xsi:type=&quot;xsd:string&quot;&gt;ITA&lt;/codeLang&gt;"\
         &lt;poolAlias xsi:type=&quot;xsd:string&quot;&gt;NSCORETEST&lt;/poolAlias&gt;"\
         &lt;poolId xsi:type=&quot;xsd:string&quot;&gt;?&lt;/poolId&gt;"\
         &lt;requestConfig xsi:type=&quot;xsd:string&quot;&gt;?&lt;/requestConfig&gt;"\
      &lt;/callContext&gt;"\
      &lt;publicName xsi:type=&quot;xsd:string&quot;&gt;WSCAST&lt;/publicName&gt;"\
   &lt;/wss:getDescription&gt;"\
&lt;/soapenv:Body&gt;"\
&lt;/soapenv:Envelope&gt;';

let body3 =
  '<callContext xsi:type="wss:CAdxCallContext">"\
<codeLang xsi:type="xsd:string">ITA</codeLang>"\
<poolAlias xsi:type="xsd:string">NSCORETEST</poolAlias>"\
<poolId xsi:type="xsd:string">?</poolId>"\
<requestConfig xsi:type="xsd:string">?</requestConfig>"\
</callContext>';

const soap = require("soap");
const url =
  "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl";

soap.createClient(url, (err, client) => {
  if (err) throw err;
  /*  client.HelloWorld((err, result) => {
        if (err) throw err;
        console.log(result);
    }); */
  /* client.addSoapHeader((methodName, args, headers, req) => {
    return { "content-type": "text/xml" };
  }); */
  client.setSecurity(new soap.BasicAuthSecurity("admin", "admin"));
  client.getDescription((err, istance) => {
    console.log(istance);
    console.log(err);
  });
});
