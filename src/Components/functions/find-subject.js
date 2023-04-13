function find_subject(num) {
    const subjects = [
        {
            id: 0,
            name: "ریاضی",
        },
        {
            id: 1,
            name: "تجربی",
        },
        {
            id: 2,
            name: "انسانی",
        },
        {
            id: 3,
            name: "هنر",
        },
    ];
    const subject = subjects.find(s => s.id === num);
    return subject.name;
}
export default find_subject;