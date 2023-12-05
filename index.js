const soap = require("soap");

// Create the SOAP client
const url =
  "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl";

var credentials = { Authorization: "Basic YWRtaW46YWRtaW4=" };
soap.createClient(url, function (err, client) {
  client.addSoapHeader(credentials);
  /*   if (err) {
    //console.error("Error creating SOAP client:", err);
    return;
  } */
  //console.log(client);

  // Make a SOAP request
  const args = { Authorization: "Basic YWRtaW46YWRtaW4=" };
  client.getDescription(args, function (err, result) {
    if (err) {
      console.error("Error making SOAP request:", err);
      return;
    }

    // Handle the SOAP response
    console.log("result:", result);
  });
});
