function stop_repeatation_in_addres(word, my_string) {
    const arr = my_string.split('/');
    return !arr.includes(word);
}
export default stop_repeatation_in_addres;