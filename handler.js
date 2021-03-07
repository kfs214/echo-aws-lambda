"use strict";

const josephJoestar = (input_text) => {
  const pattern = /「.+」/;
  const quoted_text = input_text.match(pattern);
  if (quoted_text) {
    return `${quoted_text[0]}……はっ！`;
  } else {
    return `your message is '${input_text}'`;
  }
};

module.exports.echo = async (event) => {
  const body = JSON.parse(event.body);
  const message = body.message;
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
