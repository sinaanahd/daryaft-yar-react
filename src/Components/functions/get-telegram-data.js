function get_telegram_data() {
    let us_id = window.Telegram;
    let final_id = "341393410";
    if (us_id) {
        us_id = us_id.WebApp.initData;
        // let us_id = ""
        if (us_id === "") {
            final_id = "341393410";
        }
        else {
            final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
        }
    }
    return final_id;
}
export default get_telegram_data;