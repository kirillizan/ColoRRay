function saveRating() {
    //if (!supportsLocalStorage()) { return false; }
    localStorage["numberOfPlayers"] = 5;
    localStorage["name1"] = "imawinnerboy"; localStorage["score1"] = 7000;
    localStorage["name2"] = "wakawaka";     localStorage["score2"] = 5005;
    localStorage["name3"] = "trump";        localStorage["score3"] = 3321;
    localStorage["name4"] = "foobar";       localStorage["score4"] = 2004;
    localStorage["name5"] = "noname";       localStorage["score5"] = 1515; 
}

function loadRating() {
    var ratings = new Array();
    ratings[0] = localStorage["numberOfPlayers"];

    for (var i = 1; i <= ratings[0]; i++) {
       ratings[i] = {name: localStorage["name" + i], score: localStorage["score" + i]};
    }
    return ratings;
}

function displayRatings() {
    var ratings = loadRating();

    for (var i = 1; i <= ratings[0]; i++) {
        document.getElementById('name' + i).innerHTML = i + ". " + ratings[i].name;
        document.getElementById('score' + i).innerHTML = ratings[i].score;
    }
}