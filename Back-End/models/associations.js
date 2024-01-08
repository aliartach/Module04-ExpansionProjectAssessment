import User from "./usermodel.js"
import Product from "./productmodel.js"

User.hasMany(Product, { 
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Product.belongsTo(User, { foreignKey: 'userId' });

export default { User, Product };