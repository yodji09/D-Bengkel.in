function Convert(values) {
    let temp = String(values)
    if(values === null || values === 0){
        return ('Rp 0,00')
    } else if (values < 1000) {
        return ('Rp ' + temp + ',00')  
    } else if (values < 10000){ 
        let data = values / 100
        return ('Rp ' + String(data) + "00,00")
    } else if (values < 1000000){
        let data = values / 1000
        return ('Rp ' + String(data) + ".000,00")
    } else if (values < 1000000000){
        let data = values / 1000000
        return ('Rp ' + String(data) + ".000.000,00")
    }
}
module.exports = Convert