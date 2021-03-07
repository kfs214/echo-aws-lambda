"use strict";

const josephJoestar = (input_text) => {
  const pattern = /「.+」/;
  const quoted_text = input_text.match(pattern);
  if (quoted_text) {
    return `your message is \"${input_text}\"`;
  } else {
    return `「quoted_text」……はっ！`;
  }
};

module.exports.echo = async (event) => {
  const message = event.body.message;
  const replying_message = josephJoestar(message);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        message: replying_message,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
