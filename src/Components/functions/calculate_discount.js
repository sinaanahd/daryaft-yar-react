function calculate_discount(num, dis_num) {
    const discount = ((num - dis_num) / num) * 100;
    return Math.ceil(discount);
}
export default calculate_discount;