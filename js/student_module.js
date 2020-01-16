var student_module = ( function(){
    var total_err = 0;
    var err = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    init = function() {
        $("#nameFirst").on("change", function() {nameFirst($("#nameFirst").val(), $("#nameFirstHelp"))});
        $("#nameSecond").on("change", function() {nameSecond($("#nameSecond").val(), $("#nameSecondHelp"))});
        $("#nameThird").on("change", function() {nameThird($("#nameThird").val(), $("#nameThirdHelp"))});
        $("#sic").on("change", function() {sic_val($("#sic").val(), $("#sicHelp"))});
        $("#fatherName").on("change", function() {father($("#fatherName").val(), $("#fatherNameHelp"))});
        $("#motherName").on("change", function() {mother($("#motherName").val(), $("#motherNameHelp"))});
        $("input[name='hobby']").on("change", function(){hobby_val($("input[name= 'hobby'"), $("#hobbyHelp"))});
        $("#XBoard").on("change", function() {X_Board_val($("#XBoard").val(), $("#classXHelp"))});
        $("#XIIBoard").on("change", function() {XII_Board_val($("#XIIBoard").val(), $("#classXIIHelp"))});
    
    };
    var X_Board_val = function(X_board, X_board_help) {
        if( X_board == "NONE" ) {
            err[7] = 1;
            X_board_help.html("SELECT YOUR CLASS X BOARD");
        }
        else {
            err[7] = 0;
            X_board_help.html("");
        }
    };
    var XII_Board_val = function(XII_board, XII_board_help) {
        if( XII_board == "NONE" ) {
            err[7] = 1;
            XII_board_help.html("SELECT YOUR CLASS XII BOARD");
        }
        else {
            err[7] = 0;
            XII_board_help.html("");
        }
    };
    var hobby_val = function(hobby_values, hobby_help) {
        hobby = 0;
        for ( i = 0 ; i < hobby_values.length ; i++ ) {
            if( hobby_values[i].checked) {
                hobby = 1;
                //alert(hobby_values[i].value);
            }
        }
        if( hobby == 0 ) {
            err[6] = 1;
            hobby_help.html("SELECT A HOBBY OPTION");
        }
        else{
            err[6] = 0;
            hobby_help.html("");   
        }
    };
    var father = function(data, help) {
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(data) == false ) {
            help.html("INVALID FATHER NAME");
        }
        else {
            err[4] = 0;
            help.html("");
        }
    };
    var mother = function(data, help) {
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(data) == false ) {
            err[4] = 1;
            help.html("INVALID MOTHER NAME");
        }
        else {
            err[4] = 0;
            help.html("");
        }
    };

    var nameFirst = function(data, help) {
        if (/^[a-zA-Z][a-zA-Z]*$/.test(data) == false) {
            err[0] = 1;
            help.html("INVALID FIRST NAME");
        }
        else {
            err[0] = 0;
            help.html("");
        }
    };
    var nameSecond = function(data, help) {
        if (/^[a-zA-Z]*$/.test(data) == false) {
            err[1] = 1;
            help.html("INVALID SECOND NAME");
        }
        else {
            err[1] = 0;
            help.html("");
        }
    };
    var nameThird = function(data, help) {
        if (/^[a-zA-Z][a-zA-Z]*$/.test(data) == false) {
            err[2] = 1;
            help.html("INVALID THIRD NAME");
        }
        else {
            err[2] = 0;
            help.html("");
        }
    };
    var sic_val = function (data, help) {
        if( /^[1-9]$/.test(data) == false ) {
            err[3] = 1;
            help.html("INVALID SIC");
        }
        else {
            err[3] = 0;
            help.html("");
        }
    };




    return {
        exposed_init : init,
    };
})();
