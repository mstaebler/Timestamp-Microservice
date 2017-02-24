function validate(timestamp) {
    var result = {
                    unix: false,
                    natural: false
                  };
    //validate timestamp here
    var valid = new Date(timestamp).getTime() > 0;
    if(isNaN(timestamp)){
        if(valid){
            result.natural = timestamp;
            result.unix = Date.parse(timestamp)/1000;
        }
    }else{
        if(valid)
        result.unix = timestamp;
        var date = new Date(timestamp*1000),
            hours = date.getHours(),
            minutes = "0" + date.getMinutes(),
            seconds = "0" + date.getSeconds();
        result.natural = hours + ':' + minutes.substr(-2) + '+' + seconds.substr(-2);
    }
    return result
}

module.exports = validate;
