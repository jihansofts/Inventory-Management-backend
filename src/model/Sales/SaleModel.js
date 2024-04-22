const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    UserEmail: { type: String },
    CustomerID: { type: mongoose.Schema.Types.ObjectId },
    VatTax: { type: Number },
    Discount: { type: Number },
    OhterCost: { type: Number },
    ShippingCost: { type: Number },
    GrandTotal: { type: Number },
    Note: { type: String },
    createDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const SaleModel = mongoose.model("sales", DataSchema);
module.exports = SaleModel;
