"use strict";
import axios from "axios";

const url =
  "http://srvx3v12h.formula.it:8124/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl";

var credentials = { Authorization: "Basic YWRtaW46YWRtaW4=" };

let webApiUrl = url;
let tokenStr = "YWRtaW46YWRtaW4=";

async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get(webApiUrl, {
      headers: {
        Accept: "application/json",
        credentials,
      },
    });

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

getUsers();
