const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
  },
  contact: String,
  nid: {
    type: String,
  },
  FbNumericId: {
    type: Number,
  },
  complainNumber: {
    type: Number,
  },
  crimeCatagory: {
    type: String,
    default: "other",
  },
  address: String,
  permanentAddress: String,
  story: String,
  printCount: {
    type: Number,
    default: 0,
  },
});

const Record = mongoose.model("Record", schema);

module.exports = Record;

//nid, contact, complain number, fb numeric, crime catagory, agreement, bp no

/*
1. INSERT
2. DELETE
3. UPDATE
--> On print printCount will be increased
-->
*/
