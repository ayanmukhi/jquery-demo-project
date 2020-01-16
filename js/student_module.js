var varTemp = 0;
hobbyStr = "";
var student_module = ( function(){
    var selected_gender;
    var total_err = 0;
    var address;
    var err_error_msg = [
        "INVALID FIRST NAME",
        "INVALID SECOND NAME",
        "INVALID SECOND NAME",
        "INVALID SIC",
        "INVALID FATHER NAME",
        "INVALID MOTHER NAME",
        "SELECT A HOBBY OPTION",
        "SELECT YOUR CLASS X BOARD",
        "SELECT YOUR CLASS XII BOARD",
        "ENTER YOUR X ROLL",
        "ENTER YOUR XII ROLL",
        "INVALID X PERCENTAGE",
        "INVALID XII PERCENTAGE",
        "SELECT YOUR STATE",
        "SELECT YOUR DISTRICT",
        "INVALID PHONE NUMBER",
        "INVALID EMAIL",
        "FILL OUT YOUR PRESENT ADDRESS",
        "AGE MUST BE GREATER THAN 18",
        "SELECT YOUR GENDER",
    ];
    var err_help = [
        $("#nameFirstHelp"),
        $("#nameSecondHelp"),
        $("#nameThirdHelp"),
        $("#sicHelp"),
        $("#fatherNameHelp"),
        $("#motherNameHelp"),
        $("#hobbyHelp"),
        $("#classXHelp"),
        $("#classXIIHelp"),
        $("#XRollHelp"),
        $("#XIIRollHelp"),
        $("#XPercHelp"),
        $("#XIIPercHelp"),
        $("#stateHelp"),
        $("#districtHelp"),
        $("#phoneHelp"),
        $("#emailHelp"),
        $("#presentAddressHelp"),
        $("#dateHelp"),
        $("#genderHelp"),

    ];
    var err = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    init = function() {
        $("#dob").on("change", function(){age_check()});
        $("#email").on("change", function(){email_val()});
        $("#phoneNumber").on("change", function(){phone_val()});
        $("#state").on("change", function(){drop_down_list()});
        $("#nameFirst").on("change", function() {nameFirst()});
        $("#nameSecond").on("change", function() {nameSecond()});
        $("#nameThird").on("change", function() {nameThird()});
        $("#sic").on("change", function() {sic_val()});
        $("#fatherName").on("change", function() {father()});
        $("#motherName").on("change", function() {mother()});
        $("input[name='hobby']").on("change", function(){hobby_val()});
        $("#XBoard").on("change", function() {X_Board_val()});
        $("#XIIBoard").on("change", function() {XII_Board_val()});
        $("#XRoll").on("change", function() {X_roll_val()});
        $("#XIIRoll").on("change", function() {XII_roll_val()});
        $("#Xmarks").on("change", function() {X_perc_val()});
        $("#XIImarks").on("change", function() {XII_perc_val()});
        $("#state").on("change", function(){state_val()});
        $("#subcategory").on("change", function(){dist_val()});
        $("#address").on("change", function(){address_val()});
        $("input[name = 'customRadioInline1']").on("change", function(){check_gender()});
    };
    var check_gender = function() {

        gender_options = $("input[name = 'customRadioInline1']");
        for( i = 0 ; i < gender_options.length ; i++ ) {
            if( gender_options[i].checked){
                err[19] = 0;
                selected_gender = gender_options[i];
                break;
            }
        }
        if( err[19] == 1 ) {
            err_help[19].html("Select a gender");
        }
        else {
            err_help[19].html("");
        }
    }
    var count_error = function() {
        //alert("counting");
        for(i = 0 ; i <= 19 ; i++ ) {
            if( err[i] == 1 ){
                err_help[i].html(err_error_msg[i]);
                total_err += 1;
            } 
        }
    };
    var check_submit =function() {
        total_err = 0;
        count_error();
        if(total_err == 0){
            alert("correct");
            createTable();
            return false;
        }
        else {
            alert("incorrect");
            return false;
        }
    };
    var address_val = function() {
        address = $("#address").val();
        address_help = $("#presentAddressHelp");
        if(/^[a-zA-Z0-9][a-zA-Z 0-9-,:(\\\n)\/\\]*$/.test(address) == false) {
            err[17] = 1;
            //err++;
            address_help.html("FILL OUT YOUR PRESENT ADDRESS");
        }
        else{
            err[17] = 0;
            address_help.html("");
        }
    };
    var age_check = function() {
        date_help = $("#dateHelp");
        if( age_gen() < 20 ){
            err[18] = 1;
            date_help.html("AGE MUST BE GREATER THAN 18");
        }
        else {
            err[18] = 0;
            date_help.html("");
        }
    };
    var age_gen = function() {
        var today = new Date();
        //alert($("#dob").val());
        var birthDate = new Date($("#dob").val());
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if ((m < 0) || (m == 0) && (today.getDate() > birthDate.getDate())) {
            age = age - 1;
        }
        return age;
    };
    var email_val = function() {
        email = $("#email").val();
        email_help = $("#emailHelp");
        if(( /\S+@\S+\.(com|org)+/.test(email) == false ) || (email == "")) {
            err[16] = 1;
            email_help.html("INVALID EMAIL");
        }
        else {
            err[16] = 0;
            email_help.html("");
        }
    };
    var drop_down_list = function() {
        //alert("hello");
        //var state_list = $("#state").val();
        //alert(state_list);
        //alert("state");
        state_list = $("#state").val();
        var sub_category = $("#subcategory");
        sub_category.html("");
        

        //sub_category.length = 0;
        switch (state_list) {
            case "NONE" :
                sub_category.append(new Option("-----","NONE"));
                break;
    
            case "WEST BENGAL" :
                //alert("WB SELECTED");
                
                sub_category.append(new Option("Please select the district","NONE"));
                sub_category.append(new Option("Alipurduar","Alipurduar"));
                sub_category.append(new Option("Bankura","Bankura"));
                sub_category.append(new Option("Birbhum","Birbhum"));
                break;
            
            case "GUJRAT" :
                sub_category.append(new Option("Please select the district","NONE"));
                sub_category.append(new Option("Ahmedabad","Ahmedabad"));
                sub_category.append(new Option("Amreli","Amreli"));
                break;
            case "ODISHA" :
                sub_category.append(new Option("Please select the district","NONE"));
                sub_category.append(new Option("Angul","Angul"));
                sub_category.append(new Option("Balangir","Balangir"));
                sub_category.append(new Option("Ganjam","Ganjam"));
                sub_category.append(new Option("Khordha","Khordha"));
                break;
            case "GOA" :
                sub_category.append(new Option("Please select the district","NONE"));
                sub_category.append(new Option("North Goa","North Goa"));
                sub_category.append(new Option("South Goa","South Goa"));
                break;
        }
    };
    var phone_val = function() {
        phone = $("#phoneNumber").val();
        phone_help = $("#phoneHelp");
        if( /^[1-9]\d{0}$/.test(phone) == false ) {
            err[15] = 1;
            phone_help.html("INVALID PHONE NUMBER");
        }
        else {
            err[15] = 0;
            phone_help.html("");
        }
    };

    var dist_val = function() {
        dist = $("#subcategory").val();
        dist_help = $("#districtHelp");
        if( dist == "NONE" ) {
            err[14] = 1;
            dist_help.html("SELECT YOUR DISTRICT");
        }
        else {
            err[14] = 0;
            dist_help.html("");
        }
    };
    var state_val = function() {
        state = $("#state").val();
        state_help = $("#stateHelp");
        if( state == "NONE" ) {
            err[13] = 1;
            state_help.html("SELECT YOUR STATE");
        }
        else {
            err[13] = 0;
            state_help.html("");
        }
    };
    var XII_perc_val = function() {
        XII_perc = Number($("#XIImarks").val());
        XII_perc_help = $("#XIIPercHelp");
        if(( XII_perc < 0 ) || (XII_perc > 100 ) || (XII_perc.toString() == "NaN") || (XII_perc.toString() == "0")){
            err[12] = 1;
            XII_perc_help.html("INVALID XII PERCENTAGE");
        }
        else {
            err[12] = 0;
            XII_perc_help.html("");
        }
    };
    var X_perc_val = function() {
        X_perc = Number($("#Xmarks").val());
        X_perc_help = $("#XPercHelp");
        if(( X_perc < 0 ) || (X_perc > 100 ) || (X_perc.toString() == "NaN") || (X_perc.toString() == "0")){
            err[11] = 1;
            X_perc_help.html("INVALID X PERCENTAGE");
        }
        else {
            err[11] = 0;
            X_perc_help.html("");
        }
    };
    var X_roll_val = function() {
        X_roll = $("#XRoll").val();
        X_roll_help = $("#XRollHelp");
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(X_roll) == false) {
            //alert("incorrect");
            err[9] = 1;
            X_roll_help.html("ENTER YOUR X ROLL");
        }
        else {
            err[9] = 0;
            X_roll_help.html("");
        }
    };
    var XII_roll_val = function() {
        XII_roll = $("#XIIRoll").val();
        XII_roll_help = $("#XIIRollHelp");
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(XII_roll) == false) {
            //alert("incorrect");
            err[10] = 1;
            XII_roll_help.html("ENTER YOUR XII ROLL");
        }
        else {
            err[10] = 0;
            XII_roll_help.html("");
        }
    };


    var X_Board_val = function() {
        X_board = $("#XBoard").val();
        X_board_help = $("#classXHelp");
        if( X_board == "NONE" ) {
            err[7] = 1;
            X_board_help.html("SELECT YOUR CLASS X BOARD");
        }
        else {
            err[7] = 0;
            X_board_help.html("");
        }
    };
    var XII_Board_val = function() {
        XII_board = $("#XIIBoard").val();
        XII_board_help = $("#classXIIHelp");
        if( XII_board == "NONE" ) {
            err[8] = 1;
            XII_board_help.html("SELECT YOUR CLASS XII BOARD");
        }
        else {
            err[8] = 0;
            XII_board_help.html("");
        }
    };
    var hobby_val = function( ) {
        hobby_values = $("input[name= 'hobby'");
        hobby_help = $("#hobbyHelp");
        hobby = 0;
        for ( i = 0 ; i < hobby_values.length ; i++ ) {
            if( hobby_values[i].checked) {
                hobby = 1;
                hobbyStr += hobby_values[i] + " ";
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
    var father = function() {
        fatherName = $("#fatherName").val();
        fatherHelp = $("#fatherNameHelp");
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(fatherName) == false ) {
            fatherHelp.html("INVALID FATHER NAME");
        }
        else {
            err[4] = 0;
            fatherHelp.html("");
        }
    };
    var mother = function() {
        motherName = $("#motherName").val();
        motherHelp = $("#motherNameHelp");
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(motherName) == false ) {
            err[5] = 1;
            motherHelp.html("INVALID MOTHER NAME");
        }
        else {
            err[5] = 0;
            motherHelp.html("");
        }
    };

    var nameFirst = function() {
        first = $("#nameFirst").val();
        firstHelp = $("#nameFirstHelp");
        if (/^[a-zA-Z][a-zA-Z]*$/.test(first) == false) {
            err[0] = 1;
            firstHelp.html("INVALID FIRST NAME");
        }
        else {
            err[0] = 0;
            firstHelp.html("");
        }
    };
    var nameSecond = function() {
        second = $("#nameSecond").val();
        secondHelp = $("#nameSecondHelp");
        if (/^[a-zA-Z]*$/.test(second) == false) {
            err[1] = 1;
            secondHelp.html("INVALID SECOND NAME");
        }
        else {
            err[1] = 0;
            secondHelp.html("");
        }
    };
    var nameThird = function() {
        third = $("#nameThird").val();
        thirdHelp = $("#nameThirdHelp");
        if (/^[a-zA-Z][a-zA-Z]*$/.test(third) == false) {
            err[2] = 1;
            thirdHelp.html("INVALID THIRD NAME");
        }
        else {
            err[2] = 0;
            thirdHelp.html("");
        }
    };
    var sic_val = function () {
        sic = $("#sic").val();
        sicHelp = $("#sicHelp");
        if( /^[1-9]$/.test(sic) == false ) {
            err[3] = 1;
            sicHelp.html("INVALID SIC");
        }
        else {
            err[3] = 0;
            sicHelp.html("");
        }
    };
    var createTable = function() {
        // //alert(nameFirst);
        // varTemp++;
        // //alert("creating table");
        // if(varTemp == 1) {
        //     //alert(varTemp);
        //     createTableHead();
        // }

        var table = $("#myTable");
        str = "<tr><td> "+ first + " " + second + " " + third + "</td><td>" + selected_gender + "</td><td>" + sic + "</td><td>" + fatherName + "</td><td>" + motherName + "</td><td>" + birthDate + "</td><td>" + hobbyStr + "</td><td>" + X_board + ", ROLL:" + X_roll + ", Secured:" + X_perc + "</td><td>" + XII_board + ", ROLL:" + XII_roll + ", Secured:" + XII_perc + "</td><td>" + dist + ", " + state + "</td><td>" + phone + "</td><td>" + address + "</td><td>" + email + "</td><td><input type=\"button\" value=\"Delete\" onclick=\"field_val.expose_delete_row(this)\"></input>  \/<br> <input type=\"button\" value=\"EDIT\" onclick=\"field_val.expose_edit_row(this)\"></input> </td></tr>";
        table.append(str);
        
        alert("right");
    
    };
    var createTableHead = function (){

        var table = document.querySelector("#myTable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
    
    
    
        cell1.innerHTML = "NAME";
        cell2.innerHTML = "GENDER";
        cell3.innerHTML = "SIC";
        cell4.innerHTML = "FATHER";        
        cell5.innerHTML = "MOTHER";
        cell6.innerHTML = "DATE";
        cell7.innerHTML = "HOBBIES";
        cell8.innerHTML = "CLASS X";
        cell9.innerHTML = "CLASS XII";
        cell10.innerHTML = "STATE AND DISTRICT";
        cell11.innerHTML = "PHONE";
        cell12.innerHTML = "STREET ADDRESS";
        cell13.innerHTML = "EMAIL";
        cell14.innerHTML = "ACTION";
    };
    return {
        exposed_init : init,
        exposed_check_submit : check_submit,
    };
})();
