function map_handler() {
    let address_to_here = JSON.parse(localStorage.getItem("address")) ? JSON.parse(localStorage.getItem("address")) : "shop/";
    let url = "";
    const splited = address_to_here.split("/");
    const len = splited.length - 1;
    //console.log(splited, splited[len - 2]);
    switch (splited[len - 2]) {
        case "shop":
            url = "shop";
            break;
        case "home":
            url = "home";
            break;
        case "cart":
            url = "cart";
            break;
        case "wallet":
            url = "wallet";
            break;
        case "buy-coin":
            url = "buy-coin";
            break;
        case "cart-final":
            url = "cart-final";
            break;
        case "user-data":
            url = "user-data";
            break;
        case "coin":
            url = "coin";
            break;
        case "yalda":
            url = "yalda";
            break;
        case "openChest":
            url = "openChest";
            break;
        case "falPage":
            url = "falPage";
            break;
        case "increaseToken":
            url = "increaseToken";
            break;
        case "rules":
            url = "rules";
            break;
    }
    //console.log(url);
    return url;
}
export default map_handler;
