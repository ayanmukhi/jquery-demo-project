var stu_module = ( function() {
    var err = [];
    var varTemp = 0;
    var selected_gender;
    var gender_help;
    var first;
    var first_help;
    var second;
    var second_help;
    var third;
    var third_help;
    var sic;
    var sic_help;
    var fatherName;
    var father_help;
    var motherName;
    var mother_help;
    var dob;
    var dob_help;
    var hobbyStr;
    var hobby_help;
    var X_board;
    var X_board_help;
    var X_roll;
    var X_roll_help;
    var X_perc;
    var X_perc_help;
    var XII_board;
    var XII_board_help;
    var XII_roll;
    var XII_roll_help;
    var XII_perc;
    var XII_perc_help;
    var dist;
    var dist_help;
    var state;
    var state_help;
    var address;
    var address_help;
    var email;
    var email_help;
    var total_err;
    var address;
    var email_help;
    var phone;
    var phone_help;


    init = function(){

        //initialisong varriables
        err = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        selected_gender = "";
        gender_help = $("#genderHelp");
        first = $("#nameFirst");
        first_help = $("#nameFirstHelp");
        second = $("#nameSecond");
        second_help = $("#nameSecondHelp");
        third = $("#nameThird");
        third_help = $("#nameThirdHelp");
        sic = $("#sic");
        sic_help = $("#sicHelp");
        fatherName = $("#fatherName");
        father_help = $("#fatherNameHelp");
        motherName = $("#motherName");
        mother_help = $("#motherNameHelp");
        dob = $("#dob");
        date_help = $("#dateHelp");
        hobbyStr = "";
        hobby_help = $("#hobbyHelp");
        X_board = $("#XBoard");
        X_board_help = $("#classXHelp");
        X_roll = $("#XRoll");
        X_roll_help = $("#XRollHelp");
        X_perc = $("#Xmarks");
        X_perc_help = $("#XPercHelp");
        XII_board = $("#XIIBoard");
        XII_board_help = $("#classXIIHelp");
        XII_roll = $("#XIIRoll");
        XII_roll_help = $("#XIIRollHelp");
        XII_perc = $("#XIImarks");
        XII_perc_help = $("#XIIPercHelp");
        dist = $("#subcategory");
        dist_help = $("#districtHelp");
        state = $("#state");
        state_help = $("#stateHelp");
        address = $("#address");
        address_help = $("#addressHelp");
        email = $("#email");
        email_help = $("#emailHelp");
        phone = $("#phoneNumber");
        phone_help = $("#phoneHelp");
        hobbies = $("input[name='hobby']");
        gender_options = $("input[name = 'customRadioInline1']");
        del = $("#del_btn");
        reset = $("#reset_btn");


        //invoking event listeners functions
        dob.on("keyup", function(){age_check()});
        email.on("keyup", function(){email_val()});
        phone.on("keyup", function(){phone_val()});
        state.on("change", function(){drop_down_list()});
        first.on("keyup", function() {nameFirst()});
        second.on("keyup", function() {nameSecond()});
        third.on("keyup", function() {nameThird()});
        sic.on("keyup", function() {sic_val()});
        fatherName.on("keyup", function() {father()});
        motherName.on("keyup", function() {mother()});
        hobbies.on("change", function(){hobby_val()});
        X_board.on("change", function() {X_Board_val()});
        XII_board.on("change", function() {XII_Board_val()});
        X_roll.on("keyup", function() {X_roll_val()});
        XII_roll.on("keyup", function() {XII_roll_val()});
        X_perc.on("keyup", function() {X_perc_val()});
        XII_perc.on("keyup", function() {XII_perc_val()});
        state.on("change", function(){state_val()});
        dist.on("change", function(){dist_val()});
        address.on("keyup", function(){address_val()});
        gender_options.on("change", function(){check_gender()});
        del.on("click", function(){deleteRow(this)});
        $("#reset_btn").on("click", function(){clear_fields()});
    };


    //function for deleting a row 
    var deleteRow = function(r) {
        var res = confirm("press OK to proceed for deletion !!");
        if (res == true) {
            $("table tr:eq(" + r + ")").remove();
        } else {
            alert("IMPORTANT DATA IS SAVED :)");
        }
    };

    //function to validate gender selection
    var check_gender = function() {    
        for( i = 0 ; i < gender_options.length ; i++ ) {
            if( gender_options[i].checked){
                err[19] = 0;
                selected_gender = gender_options[i].value;
                break;
            }
        }
        if( err[19] == 1 ) {
            gender_help.html("Select a gender");
        }
        else {
            gender_help.html("");
        }
    };

    //function to count total number of incorrect fields
    var count_error = function() {
        //alert("counting");
        total_err = 0;
        for(i = 0 ; i <= 19 ; i++ ) {
            if( err[i] == 1 ){
                //err_help[i].html(err_error_msg[i]);
                total_err += 1;
            } 
        }
    };

    //function to submit data upon correct validation
    var check_submit =function() {
        count_error();
        check_gender();
        sic_val();
        nameThird();
        nameFirst();
        nameSecond();
        mother();
        father();
        hobby_val();
        XII_Board_val();
        X_Board_val();
        XII_roll_val();
        X_roll_val();
        X_perc_val();
        XII_perc_val();
        state_val();
        dist_val();
        phone_val();
        email_val();
        age_check();
        address_val();
        alert("TOTAL ERROR :" + total_err);
        if(total_err == 0){
            alert("correct");
            createTable();
            clear_fields();
            return false;
        }
        else {
            alert("incorrect");
            return false;
        }
    };

    //function to clear all fields or reset them
    var clear_fields = function() {
        //clearing the fields
        for(i = 0 ; i <= 19 ; i++ ) {
            err[i] = 1;
        }
        err[1] = 0;
        first.val("");
        second.val("");
        third.val("");
        sic.val("");
        fatherName.val("");
        motherName.val("");
        dob.val("");
        X_roll.val("");
        X_perc.val("");
        XII_roll.val("");
        XII_perc.val("");
        phone.val("");
        email.val("");
        address.val("");
        XII_board.val("NONE");
        X_board.val("NONE");
        state.val("NONE");
        dist.val("NONE");
        for( i  = 0 ; i < gender_options.length ; i++ ) {
            if( gender_options[i].checked ) {
                gender_options[i].checked = false;
                break;
            }
        }
        for ( i = 0 ; i < hobbies.length ; i++ ) {
            if( hobbies[i].checked ) {
                hobbies[i].checked = false;
            }
        }
        
        //clearing the error status of each fields
        first_help.html("");
        second_help.html("");
        third_help.html("");
        gender_help.html("")
        sic_help.html("");
        father_help.html("");
        mother_help.html("");
        date_help.html("");
        hobby_help.html("");
        X_roll_help.html("");
        X_perc_help.html("");
        X_board_help.html("");
        XII_roll_help.html("");
        XII_perc_help.html("");
        XII_board_help.html("");
        phone_help.html("");
        email_help.html("");
        address_help.html("");
        state_help.html("");
        dist_help.html("");
        sic.prop("disabled", false);

    };

    //function to validate address field
    var address_val = function() {
        if(/^[a-zA-Z0-9][a-zA-Z 0-9-,:(\\\n)\/\\]*$/.test(address.val()) == false) {
            err[17] = 1;
            address_help.html("FILL OUT YOUR PRESENT ADDRESS");
        }
        else{
            err[17] = 0;
            address_help.html("");
        }
    };


    //function to validate date field
    var age_check = function() {
        if( age_gen() < 20 ){
            err[18] = 1;
            date_help.html("AGE MUST BE GREATER THAN 18");
        }
        else {
            err[18] = 0;
            date_help.html("");
        }
    };

    //function to calculate age
    var age_gen = function() {
        var today = new Date();
        birthDate = new Date(dob.val());
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if ((m < 0) || (m == 0) && (today.getDate() > birthDate.getDate())) {
            age = age - 1;
        }
        return age;
    };

    //function to validate email field
    var email_val = function() {
        if(( /\S+@\S+\.(com|org)+/.test(email.val()) == false ) || (email.val() == "")) {
            err[16] = 1;
            email_help.html("INVALID EMAIL");
        }
        else {
            err[16] = 0;
            email_help.html("");
        }
    };



    //function for dependent drop down of state and district
    var drop_down_list = function() {
        dist.html("");
        //dist.val().length = 0;
        switch (state.val()) {
            case "NONE" :
                dist.append(new Option("-----","NONE"));
                break;
    
            case "WEST BENGAL" :
                //alert("WB SELECTED");
                
                dist.append(new Option("Please select the district","NONE"));
                dist.append(new Option("Alipurduar","Alipurduar"));
                dist.append(new Option("Bankura","Bankura"));
                dist.append(new Option("Birbhum","Birbhum"));
                break;
            
            case "GUJRAT" :
                dist.append(new Option("Please select the district","NONE"));
                dist.append(new Option("Ahmedabad","Ahmedabad"));
                dist.append(new Option("Amreli","Amreli"));
                break;
            case "ODISHA" :
                dist.append(new Option("Please select the district","NONE"));
                dist.append(new Option("Angul","Angul"));
                dist.append(new Option("Balangir","Balangir"));
                dist.append(new Option("Ganjam","Ganjam"));
                dist.append(new Option("Khordha","Khordha"));
                break;
            case "GOA" :
                dist.append(new Option("Please select the district","NONE"));
                dist.append(new Option("North Goa","North Goa"));
                dist.append(new Option("South Goa","South Goa"));
                break;
        }
    };

    
    //function to validate phone field
    var phone_val = function() {
        if( /^[1-9]\d{0}$/.test(phone.val()) == false ) {
            err[15] = 1;
            phone_help.html("INVALID PHONE NUMBER");
        }
        else {
            err[15] = 0;
            phone_help.html("");
        }
    };

    //function to validate district field
    var dist_val = function() {
        if( dist.val() == "NONE" ) {
            err[14] = 1;
            dist_help.html("SELECT YOUR DISTRICT");
        }
        else {
            err[14] = 0;
            dist_help.html("");
        }
    };


    //function to validate state field
    var state_val = function() {
        if( state.val() == "NONE" ) {
            err[13] = 1;
            state_help.html("SELECT YOUR STATE");
        }
        else {
            err[13] = 0;
            state_help.html("");
        }
    };


    //function to validate class XII percentage field 
    var XII_perc_val = function() {
        //alert(Number(XII_perc.val()));
        if((XII_perc.val() < 0 ) || (XII_perc.val() > 100 )) {
           // alert("ayan");
            err[12] = 1;
            XII_perc_help.html("INVALID XII PERCENTAGE");
        }
        else {
            err[12] = 0;
            XII_perc_help.html("");
        }
    };


    //function to validate X percentage field
    var X_perc_val = function() {
        if(( X_perc.val() < 0 ) || (X_perc.val() > 100 )){
            err[11] = 1;
            X_perc_help.html("INVALID X PERCENTAGE");
        }
        else {
            err[11] = 0;
            X_perc_help.html("");
        }
    };


    //function to validate X roll field
    var X_roll_val = function() {
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(X_roll.val()) == false) {
            //alert("incorrect");
            err[9] = 1;
            X_roll_help.html("ENTER YOUR X ROLL");
        }
        else {
            err[9] = 0;
            X_roll_help.html("");
        }
    };

    //function to validate XII roll field
    var XII_roll_val = function() {
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(XII_roll.val()) == false) {
            //alert("incorrect");
            err[10] = 1;
            XII_roll_help.html("ENTER YOUR XII ROLL");
        }
        else {
            err[10] = 0;
            XII_roll_help.html("");
        }
    };


    //function to validate X board field
    var X_Board_val = function() {
        if( X_board.val() == "NONE") {
            err[7] = 1;
            X_board_help.html("SELECT YOUR CLASS X BOARD");
        }
        else {
            err[7] = 0;
            X_board_help.html("");
        }
    };


    //function to validate XII board field
    var XII_Board_val = function() {
        if( XII_board.val() == "NONE") {
            err[8] = 1;
            XII_board_help.html("SELECT YOUR CLASS XII BOARD");
        }
        else {
            err[8] = 0;
            XII_board_help.html("");
        }
    };


    //function to validate hobby selection field
    var hobby_val = function() {
        hobby = 0;
        hobbyStr = "";
        for ( i = 0 ; i < hobbies.length ; i++ ) {
            if( hobbies[i].checked) {
                hobby = 1;
                hobbyStr += hobbies[i].value + " ";
                //alert(hobby_values[i].value);
            }
        }
        if( hobby == 0 ) {
            err[6] = 1;
            hobby_help.html("SELECT A HOBBY OPTION");
        }
        else{
            err[6] = 0;
            //alert(hobbyStr);
            hobby_help.html("");   
        }
    };

    //function to validate father name field
    var father = function() {
        //alert("fa");
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(fatherName.val()) == false ) {
            father_help.html("INVALID FATHER NAME");
        }
        else {
            err[4] = 0;
            father_help.html("");
        }
    };


    //function to validate mother name field
    var mother = function() {
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(motherName.val()) == false ) {
            err[5] = 1;
            mother_help.html("INVALID MOTHER NAME");
        }
        else {
            err[5] = 0;
            mother_help.html("");
        }
    };

    //function to validate first name field
    var nameFirst = function() {
        if (/^[a-zA-Z][a-zA-Z]*$/.test(first.val()) == false) {
            err[0] = 1;
            first_help.html("INVALID FIRST NAME");
        }
        else {
            err[0] = 0;
            first_help.html("");
        }
    };

    //function to validate second name field
    var nameSecond = function() {
        if (/^[a-zA-Z]*$/.test(second.val()) == false) {
            err[1] = 1;
            second_help.html("INVALID SECOND NAME");
        }
        else {
            err[1] = 0;
            second_help.html("");
        }
    };


    //function to validate third name field
    var nameThird = function() {
        if (/^[a-zA-Z][a-zA-Z]*$/.test(third.val()) == false) {
            err[2] = 1;
            third_help.html("INVALID THIRD NAME");
        }
        else {
            err[2] = 0;
            third_help.html("");
        }
    };


    //function to validate sic field
    var sic_val = function () {
        if(check_sic(sic.val())) {
            err[3] = 1;
            sic_help.html("SIC ALREADY EXISTS");
        }
        else if(/^[1-9]$/.test(sic.val()) == false ){ 
            err[3] = 1;
            sic_help.html("INVALID SIC");
        }
        else {
            err[3] = 0;
            sic_help.html("");
        }
    };

    //function to check duplicate sic in table data
    var check_sic = function(check) {
        var table = $("#myTable > tbody > tr");
        for( i = 1 ; i < table.length ; i++ ) {
            var sic = $("table > tbody > tr:eq(" + i + ")  > td:eq(2)").html();
            if( sic == check ) {
                return true;
            }
        }
        return false;
    };

    //function to create table data
    var createTable = function() {
        varTemp++;
        if(varTemp == 1) {
            createTableHead();
        }
        if( second.val() == "" ) {
            nameStr = first.val() + " " + third.val();
        }
        else{
            nameStr = first.val() + " " + second.val() + " " + third.val();
        }
        var table = $("#myTable > tbody");
        str = "<tr><td>" + nameStr + "</td><td>" + selected_gender + "</td><td>" + sic.val() + "</td><td>" + fatherName.val() + "</td><td>" + motherName.val() + "</td><td>" + dob.val() + "</td><td>" + hobbyStr + "</td><td>" + X_board.val() + ", ROLL:" + X_roll.val() + ", Secured:" + X_perc.val() + "</td><td>" + XII_board.val() + ", ROLL:" + XII_roll.val() + ", Secured:" + XII_perc.val() + "</td><td>" + dist.val() + ", " + state.val() + "</td><td>" + phone.val() + "</td><td>" + address.val() + "</td><td>" + email.val() + "</td><td><input type=\"button\" id=\"del_btn\" value=\"Delete\" onclick=\"stu_module.exposed_deleteRow(this.parentNode.parentNode.rowIndex)\"/> \/<br> <input type=\"button\" value=\"EDIT\" onclick=\"stu_module.expose_edit_row(this)\"/></td></tr>";
        table.append(str);
    
    };



    //function to create the table header
    var createTableHead = function (){

        var table = $("#myTable > tbody");
        str = "<tr><td>NAME</td><td>GENDER</td><td>SIC</td><td>FATHER NAME</td><td>MOTHER NAME</td><td>DOB</td><td>HOBBIES</td><td>MATRICULATION</td><td>INTERMEDIATE</td><td>DIST AND STATE</td><td>PHONE</td><td>STREET ADDRESS</td><td>EMAIL</td><td>ACTION</td></tr>";
        table.append(str);
    };






    //making var/objects public
    return {
        exposed_deleteRow : deleteRow,
        exposed_init : init,
        exposed_check_submit : check_submit,
    }
})();