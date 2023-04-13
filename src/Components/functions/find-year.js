function find_year(num) {
    const grades = [
        {
            id: 10,
            name: "دهم",
        },
        {
            id: 11,
            name: "یازدهم",
        },
        {
            id: 12,
            name: "دوازدهم",
        },
        {
            id: 18,
            name: "کنکور",
        },
        {
            id: 0,
            name: "فارغ التحصیل",
        }
    ]
    const year = grades.find(g => g.id === num);
    return year.name;
}
export default find_year;