const { Storage } = require("@google-cloud/storage");
const path = require("path");

const storage = new Storage({
  keyFilename: path.join(__dirname, "./config/myconfig.json"),
});

const bucketName = "yettoexploreimg";
const bucket = storage.bucket(bucketName);

module.exports = bucket; // Direct export
