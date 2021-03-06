const mongo = require('mongoose');
const { GraphQLDate } = require('graphql-iso-date');

const Schema = mongo.Schema;

const orderSchema = new Schema({
    timeOrderPlaced,
    orderCost: Number, 
    orderId: Number,
    customerId: Number,
    estimatedDeliveryTime,
    deliveryDistance: Number,
    delivered: Boolean,
    deliveryLocation: String,
});

module.exports = mongo.model('Order', orderSchema);
