function el_by_id(arr, id) {
    let my_return = "sina";
    arr.forEach(a => {
        if (a.id === id)
            my_return = a;
    });
    return my_return;
}
export default el_by_id;