import axios from "axios";

export default axios.create({
  baseURL:
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/aseguradoras-edaaj/service/aseguradoras/incoming_webhook/",
  headers: {
    "Content-type": "application/json",
  },
});
