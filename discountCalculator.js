function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger; // Use this to pause and inspect variables

    for (let i = 0; i < quantity; i++) { // Fixed: i = 0, not 1
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // 10% discount
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice