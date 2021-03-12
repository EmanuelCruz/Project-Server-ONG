const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const constant = require("../../constant/const");

//configuring the AWS environment
AWS.config.update({
  accessKeyId: constant.AWS_ACCESS_KEY_ID,
  secretAccessKey: constant.AWS_SECRET_ACCESS_KEY,
});

var s3 = new AWS.S3();

function uploadImage(name, image) {
  //configuring parameters
  var params = {
    Bucket: constant.AWS_BUCKET_NAME,
    Body: image,
    Key: name,
  };

  s3.upload(params, function (err, data) {
    //handle error
    if (err) {
      console.log("Error", err);
    }

    //success
    if (data) {
      console.log("Uploaded in:", data.Location);
    }
  });
}

module.exports = {
  uploadImage,
};
