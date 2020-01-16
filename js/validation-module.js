
var validation_module = (function() {
    var total_err = 0;
    var err = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var name_first_val = function () {
        var first_name = document.getElementById("nameFirst").value;
        var first_name_help = document.getElementById("nameFirstHelp");
        if (/^[a-zA-Z][a-zA-Z]*$/.test(first_name) == false) {
            //alert(first_name);
            err[0] = 1;
            first_name_help.innerHTML = "INVALID FIRST NAME";
            // var nameFirstStyle = document.querySelector("#nameFirst");
            // nameFirstStyle.nameFirstStyle.color = "red";
        }
        else {
            err[0] = 0;
            first_name_help.innerHTML = "";
        }
    };
    var name_second_val = function() {
        var second_name = document.getElementById("nameSecond").value;
        var second_name_help = document.getElementById("nameSecondHelp");
        if (/^[a-zA-Z]*$/.test(second_name) == false) {
            //err++;
            //alert("error occured");
            err[1] = 1;
            second_name_help.innerHTML = "INVALID SECOND NAME";
            // var nameFirstStyle = document.querySelector("#nameFirst");
            // nameFirstStyle.nameFirstStyle.color = "red";
        }
        else {
            err[1] = 0;
            second_name_help.innerHTML = "";
        }
    };
    var name_third_val = function() {
        var third_name = document.getElementById("nameThird").value;
        var third_name_help = document.getElementById("nameThirdHelp");
        if (/^[a-zA-Z][a-zA-Z]*$/.test(third_name) == false) {
            //err++;
            //alert("error occured");
            err[2] = 1;
            third_name_help.innerHTML = "INVALID THIRD NAME";
            // var nameFirstStyle = document.querySelector("#nameFirst");
            // nameFirstStyle.nameFirstStyle.color = "red";
        }
        else {
            err[2] = 0;
            third_name_help.innerHTML = "";
        }
    };
    var sic_val = function () {
        var sic = document.getElementById("sic").value;
        var sic_help = document.querySelector("#sicHelp");
        // private method
        //alert("gender validation going on " + sic);
        if( /^[1-9]$/.test(sic) == false ) {
            //alert("incorrect");
            err[3] = 1;
            sic_help.innerHTML = "INVALID SIC";
        }
        else {
            err[3] = 0;
            //alert("correct");
            sic_help.innerHTML = "";
        }
    };

    var father_name_val = function() {
        var father_name = document.getElementById("fatherName").value;
        var father_name_help = document.getElementById("fatherNameHelp");
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(father_name) == false ) {
            //err++;
            err[4] = 1;
            father_name_help.innerHTML = "INVALID FATHER NAME";
        }
        else {
            err[4] = 0;
            father_name_help.innerHTML = "";
        }
    };
    var mother_name_val = function() {
        var mother_name = document.getElementById("motherName").value;
        var mother_name_help = document.getElementById("motherNameHelp");
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(mother_name) == false ) {
            //err++;
            err[5] = 1;
            mother_name_help.innerHTML = "INVALID MOTHER NAME";
        }
        else {
            err[5] = 0;
            mother_name_help.innerHTML = "";
        }
    };
    var hobby_val = function() {
        var hobby = 0;
        var hobby_help = document.querySelector("#hobbyHelp");
        var hobby_values = document.getElementsByName("hobby");
        for ( i = 0 ; i < hobby_values.length ; i++ ) {
            if( hobby_values[i].checked) {
                hobby = 1;
                //break;
            }
        }
        if( hobby == 0 ) {
            err[6] = 1;
            hobby_help.innerHTML = "SELECT A HOBBY OPTION";
        }
        else{
            err[6] = 0;
            hobby_help.innerHTML = "";   
        }
    }
    var X_board_val = function() {
        //alert("drop");
        var X_board = document.getElementById("XBoard").value;
        var X_board_help = document.getElementById("classXHelp");
        if( X_board == "NONE" ) {
            err[7] = 1;
            X_board_help.innerHTML = "SELECT YOUR CLASS X BOARD";
        }
        else {
            err[7] = 0;
            X_board_help.innerHTML = "";
        }
    };
    var XII_board_val = function() {
        var XII_board = document.getElementById("XIIBoard").value;
        var XII_board_help = document.getElementById("classXIIHelp");
        if( XII_board == "NONE" ) {
            err[8] = 1;
            XII_board_help.innerHTML = "SELECT YOUR CLASS XII BOARD";
        }
        else {
            err[8] = 0;
            XII_board_help.innerHTML = "";
        }
    };
    var X_roll_val = function() {
        var X_roll = document.getElementById("XRoll").value;
        var X_roll_help = document.getElementById("XRollHelp");
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(X_roll) == false) {
            //alert("incorrect");
            err[9] = 1;
            X_roll_help.innerHTML = "ENTER YOUR X ROLL";
        }
        else {
            err[9] = 0;
            X_roll_help.innerHTML = "";
        }
    };
    var XII_roll_val = function() {
        var XII_roll = document.getElementById("XIIRoll").value;
        var XII_roll_help = document.getElementById("XIIRollHelp");
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(XII_roll) == false) {
            //alert("incorrect");
            err[10] = 1;
            XII_roll_help.innerHTML = "ENTER YOUR XII ROLL";
        }
        else {
            err[10] = 0;
            XII_roll_help.innerHTML = "";
        }
    };
    var X_perc_val = function() {
        
        var X_perc = Number(document.getElementById("Xmarks").value);
        //alert(X_perc);
        var X_perc_help = document.getElementById("XPercHelp");
        
        if(( X_perc < 0 ) || (X_perc > 100 ) || (X_perc.toString() == "NaN") || (X_perc.toString() == "0")){
            err[11] = 1;
            X_perc_help.innerHTML = "INVALID X PERCENTAGE";
        }
        else {
            err[11] = 0;
            X_perc_help.innerHTML = "";
        }
    };
    var XII_perc_val = function() {
        
        var XII_perc = Number(document.getElementById("XIImarks").value);
        //alert(XII_perc);
        var XII_perc_help = document.getElementById("XIIPercHelp");
        
        if(( XII_perc < 0 ) || (XII_perc > 100 ) || (XII_perc.toString() == "NaN") || (XII_perc.toString() == "0")){
            err[12] = 1;
            XII_perc_help.innerHTML = "INVALID XII PERCENTAGE";
        }
        else {
            err[12] = 0;
            XII_perc_help.innerHTML = "";
        }
    };
    var state_val = function() {
        var state = document.getElementById("state").value;
        var state_help = document.getElementById("stateHelp");
        if( state == "NONE" ) {
            err[13] = 1;
            state_help.innerHTML = "SELECT YOUR STATE";
        }
        else {
            err[13] = 0;
            state_help.innerHTML = "";
        }
    };
    var dist_val = function() {
        var dist = document.getElementById("subcategory").value;
        var dist_help = document.getElementById("districtHelp");
        if( dist == "NONE" ) {
            err[14] = 1;
            dist_help.innerHTML = "SELECT YOUR DISTRICT";
        }
        else {
            err[14] = 0;
            dist_help.innerHTML = "";
        }
    };
    var phone_val = function() {
        var phone = document.getElementById("phoneNumber").value;
        var phone_help = document.getElementById("phoneHelp");
        if( /^[1-9]\d{0}$/.test(phone) == false ) {
            err[15] = 1;
            phone_help.innerHTML = "INVALID PHONE NUMBER";
        }
        else {
            err[15] = 0;
            phone_help.innerHTML = "";
        }
    };

    var email_val = function() {
        var email = document.getElementById("email").value;
        var email_help = document.getElementById("emailHelp");
        if(( /\S+@\S+\.(com|org)+/.test(email) == false ) || (email == "")) {
            err[16] = 1;
            email_help.innerHTML = "INVALID EMAIL";
        }
        else {
            err[16] = 0;
            email_help.innerHTML = "";
        }
    };

    var age_check = function() {
        if( calc_age.expose_age_gen() < 20 ){
            err[18] = 1;
            document.getElementById("dateHelp").innerHTML = "AGE MUST BE GREATER THAN 18";
        }
        else {
            err[18] = 0;
            document.getElementById("dateHelp").innerHTML = "";
        }
    };

    var address_val = function() {
        var address = document.getElementById("address").value;
        var address_help = document.getElementById("presentAddressHelp");
        if(/^[a-zA-Z0-9][a-zA-Z 0-9-,:(\\\n)\/\\]*$/.test(address) == false) {
            err[17] = 1;
            //err++;
            address_help.innerHTML = "FILL OUT YOUR PRESENT ADDRESS";
        }
        else{
            err[17] = 0;
            address_help.innerHTML = "";
        }
    };
    var count_error = function() {
        for(i = 0 ; i <= 18 ; i++ ) {
            if( err[i] == 1 ){
                total_err += 1;
            }
        }
    };

    return {
        expose_age_check : age_check,
        expose_sic_val : sic_val,
        expose_name_first_val : name_first_val,
        expose_name_second_val : name_second_val,
        expose_name_third_val : name_third_val,
        expose_father_name_val : father_name_val,
        expose_mother_name_val : mother_name_val,
        expose_hobby_val : hobby_val,
        expose_X_board_val : X_board_val,
        expose_XII_board_val : XII_board_val,
        expose_X_roll_val : X_roll_val,
        expose_XII_roll_val : XII_roll_val,
        expose_X_perc_val : X_perc_val,
        expose_XII_perc_val : XII_perc_val,
        expose_state_val : state_val,
        expose_dist_val : dist_val,
        expose_phone_val : phone_val,
        expose_email_val : email_val,
        expose_address_val : address_val,
        expose_total_err : total_err,
        expose_count_error : count_error,

    };
})();
