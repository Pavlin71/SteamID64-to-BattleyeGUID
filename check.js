
battleyeCheckSteamID64 = async function(uid){  //  Проверка uid на валидность
    var checkingRegExp = new RegExp(/^(\d){17,17}$/g);
    console.log(uid + " : " + (uid.match(checkingRegExp)!== null));
    return uid.match(checkingRegExp)!== null;
};

battleyeCheckSteamID64("7656119836801818a");