import Router from "next/router";
import axios from "axios";

export const postDataToDatabase = (postData, message) => {
  axios({
    method: "post",
    url: "https://apidocsbackend.herokuapp.com/api/v1/user/login/",
    data: postData,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response) alert(message.success);
      Router.push("/member");
    })
    .catch((error) => {
      if (error) alert(message.failed);
    });
};
