var  currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    var hour = currentDate.getHours();
    console.log(hour);

    if(hour >= 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
};
