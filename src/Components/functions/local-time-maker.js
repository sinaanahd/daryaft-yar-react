function local_time_maker(time) {
    let pure = time.split("T")[0].split("-");
    let date = new Date(pure[0], pure[1], pure[2]);
    let final_date = date.toLocaleDateString("fa-IR");
    return final_date;
}
export default local_time_maker;