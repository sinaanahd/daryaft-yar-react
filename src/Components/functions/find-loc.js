function find_loc(string) {
    const seprated = string.split("/")
    const location = seprated[seprated.length - 1];
    return location;
}
export default find_loc;