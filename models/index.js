const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');



Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_tag',
  foreignKey: 'product_id'
})

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_product',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};