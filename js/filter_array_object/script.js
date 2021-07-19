let data = [
    {
        "nama": "ahmad",
        "level": "admin"
    },
    {
        "nama": "admin",
        "level": "pengunjung"
    }, 
    {
        "nama": "yusuf",
        "level": "camat"
    }, 
    {
        "nama": "sarah",
        "level": "pengunjung"
    },
]

let dataPengunjung = data.filter(function (el){
    return el.level === 'pengunjung'
});
console.log(dataPengunjung.length);