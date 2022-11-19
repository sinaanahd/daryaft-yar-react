import stop_repeatation_in_addres from "./stop-reapet-in-address";
function save_local_address(place) {
    //console.log(JSON.parse(localStorage.getItem("address")));
    let address = JSON.parse(localStorage.getItem("address")) ? JSON.parse(localStorage.getItem("address")) : "bot/shop/";
    address = stop_repeatation_in_addres(place, address) ? address + place + "/" : address;
    localStorage.setItem("address", JSON.stringify(address));
}
export default save_local_address;