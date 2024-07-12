const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryId: String,
    name: String,
    icon: Array,
    slug: String,
    subCategories: [
        {
            id: String,
            name: String,
            slug: String,
            child: [
                {
                    name: String,
                    slug: String,
                },
            ],
        },
    ],
    topCategory: { type: Boolean, default: false },
});

module.exports = mongoose.model("Category", categorySchema);
