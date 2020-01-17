var varTemp = 0;
var student_module = ( function(){


    var selected_gender;
    var first;
    var second = "";
    var third;
    var sic;
    var fatherName;
    var motherName;
    var dob;
    var hobbyStr;
    var X_board;
    var X_roll;
    var X_perc;
    var XII_board;
    var XII_roll;
    var XII_perc;
    var dist;
    var state;
    var address;
    var email;
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
        //$("#del_btn").on("click", function(){deleteRow(this)});
        $("#reset_btn").on("click", function(){clear_fields()});
    };




    var check_gender = function() {
        //alert("on");
        gender_options = $("input[name='customRadioInline1']");
        for( i = 0 ; i < gender_options.length ; i++ ) {
            if( gender_options[i].checked){
                //alert("checked");
                err[19] = 0;
                selected_gender = gender_options[i].value;
                //alert("value : " + selected_gender);
                break;
            }
        }
        if( err[19] == 1 ) {
            err_help[19].html("Select a gender");
        }
        else {
            err_help[19].html("");
        }
    };




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
            //alert("correct");
            createTable();
            clear_fields();
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
            dob = $("#dob").val();
            date_help.html("");
        }
    };




    var age_gen = function() {
        var today = new Date();
        //alert($("#dob").val());
        birthDate = new Date($("#dob").val());
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
    var clear_fields = function() {
        //alert("in cler");
        $("#nameFirst").val("");
        $("#nameSecond").val("");
        $("#nameThird").val("");
        $("#sic").val("");
        $("#fatherName").val("");
        $("#motherName").val("");
        $("#dob").val("");
        $("#XRoll").val("");
        $("#Xmarks").val("");
        $("#XIIRoll").val("");
        $("#XIImarks").val("");
        $("#phoneNumber").val("");
        $("#email").val("");
        $("#address").val("");
        $("#XIIBoard").val("");
        $("#XBoard").val("");
        $("#state").val("");
        $("#subcategory").val("");
        var sex = $("input[name = 'customRadioInline1']");
        for( i  = 0 ; i < sex.length ; i++ ) {
            if( sex[i].checked ) {
                sex[i].checked = false;
                break;
            }
        }
        var hobby = $("input[name='hobby']");
        for ( i = 0 ; i < hobby.length ; i++ ) {
            if( hobby[i].checked ) {
                hobby[i].checked = false;
            }
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
        hobby_values = $("input[name= 'hobby']");
        hobby_help = $("#hobbyHelp");
        hobby = 0;
        hobbyStr = "";
        for ( i = 0 ; i < hobby_values.length ; i++ ) {
            if( hobby_values[i].checked) {
                hobby = 1;
                hobbyStr += hobby_values[i].value + " ";
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
        varTemp++;
        //alert("creating table");
        if(varTemp == 1) {
            //alert(varTemp);
            createTableHead();
        }
        if( second == "" ) {
            nameStr = first + " " + third;
        }
        else{
            nameStr = first + " " + second + " " + third;
        }
        var table = $("#myTable > tbody");
        str = "<tr><td>" + nameStr + "</td><td>" + selected_gender + "</td><td>" + sic + "</td><td>" + fatherName + "</td><td>" + motherName + "</td><td>" + dob + "</td><td>" + hobbyStr + "</td><td>" + X_board + ", ROLL:" + X_roll + ", Secured:" + X_perc + "</td><td>" + XII_board + ", ROLL:" + XII_roll + ", Secured:" + XII_perc + "</td><td>" + dist + ", " + state + "</td><td>" + phone + "</td><td>" + address + "</td><td>" + email + "</td><td><input type=\"button\" id=\"del_btn\" value=\"Delete\" onclick=\"student_module.exposed_deleteRow(this.parentNode.parentNode.rowIndex)\"/> \/<br> <input type=\"button\" value=\"EDIT\" onclick=\"student_module.expose_edit_row(this)\"/></td></tr>";
        table.append(str);
    
    };


    var deleteRow = function(r) {
        //alert("in delete");
        //var table = $("#myTable > tbody");
        // var row = r.parentNode.parentNode.rowIndex;
        var res = confirm("press OK to proceed for deletion !!");
        if (res == true) {
            $("table tr:eq(" + r + ")").remove();
        } else {
            alert("IMPORTANT DATA IS SAVED :)");
        }
        //$("table tr:eq(" + r + ")").remove();
    };


    var createTableHead = function (){

        var table = $("#myTable > tbody");
        str = "<tr><td>NAME</td><td>GENDER</td><td>SIC</td><td>FATHER NAME</td><td>MOTHER NAME</td><td>DOB</td><td>HOBBIES</td><td>MATRICULATION</td><td>INTERMEDIATE</td><td>DIST AND STATE</td><td>PHONE</td><td>STREET ADDRESS</td><td>EMAIL</td><td>ACTION</td></tr>";
        table.append(str);
    };


    var edit_row = function(data) {
        var count_space = 0;
        var i = data.parentNode.parentNode.rowIndex;
        var name = $("table > tbody > tr:eq(" + i + ")  > td:eq(0)").html();
        //alert("VAL : " + rowData1);
        alert("VAL :" + name);
        for( i = 0 ; i < name.length; i++ ) {
            if( name[i] == " ") {
                count_space++;
            }
        }
        alert(count_space);
        var first ="";
        var second = "";
        var third = "";
        if( count_space == 2) {
            
            var flag = 0;
            for( i = 0 ; i < name.length; i++ ) {
                if(name[i] != " "){
                    if( flag == 0 ) {
                        first += name[i];
                    }
                    else if( flag == 1 ){
                        second += name[i];
                    }
                    else {
                        third += name[i];
                    }
                }
                else {
                    flag++;
                }
            }
            $("#nameFirst").val(first);
            $("#nameSecond").val(second);
            $("#nameThird").val(third);
        }
        else {
            var flag = 0;
            for( i = 0 ; i < name.length; i++ ) {
                if(name[i] != " "){
                    if( flag == 0 ) {
                        first += name[i];
                    }
                    else {
                        third += name[i];
                    }
                }
                else {
                    flag++;
                }
            }
            $("#nameFirst").val(first);
            $("#nameThird").val(third);
        }
        
        alert(first);
        alert(second);
        alert(third);
        

        //alert("edit row");
        
        //alert("row index : " + i);
        // table = document.querySelector("#myTable").rows[i];
        // varName = table.cells[0].innerHTML;
        // varGender = table.cells[1].innerHTML;
        // varSic = table.cells[2].innerHTML;
        // varFather = table.cells[3].innerHTML;
        // varMother = table.cells[4].innerHTML;
        // varDate = table.cells[5].innerHTML;
        // varHobby = table.cells[6].innerHTML;
        // varClassX = table.cells[7].innerHTML;
        // varClassXII = table.cells[8].innerHTML;
        // varStateDist = table.cells[9].innerHTML;
        // varPhone = table.cells[10].innerHTML;
        // varStreet = table.cells[11].innerHTML;
        // varEmail = table.cells[12].innerHTML;
    
        // varStart = 0;
        // varEnd = varName.length;
        // varFirstName = "";
        // varMidName = "";
        // varLastName = "";
 
        // for ( i = varStart ; i < varEnd ; i++) {
        //     if( varName[i] == " ") {
        //         break;
        //     }
        //     varFirstName += varName[i];
        // }
        // varStart = i;
        // for ( j = varStart + 1 ; j < varEnd ; j++) {
        //     if( varName[j] == " ") {
        //         break;
        //     }
        //     varMidName += varName[j];
        // }
        // varStart = j;
        // for ( k = varStart + 1 ; k < varEnd ; k++) {
        //     varLastName += varName[k];
        // }
        
        // genderOptions = document.getElementsByName("customRadioInline1");
        // for( i = 0 ; i < genderOptions.length ; i++ ) {
        //     if( genderOptions[i].value == varGender) {
        //         genderOptions[i].checked = "checked";
        //         //alert("checked");
        //         break;
        //     }
        // }
        // var hobbyIndex = 0;
        // var hobbySelected = [];
        // hobbySelected[0] = "";
        // //alert("hoby string : " + varHobby);    
        // for ( i = 0 ; i < varHobby.length ; i++ ) {
        //     if ( varHobby[i] == " ") {
        //         hobbyIndex++;
        //         hobbySelected[hobbyIndex] = "";
    
        //     }
        //     else {
        //         hobbySelected[hobbyIndex] += varHobby[i];
        //     }
        // }
        // //alert("selected hobby parsed : " + hobbySelected[1]);
        // hobbyIndex = 1;
        // hobbiesOptions = document.getElementsByName("hobby");
        // //alert(hobbiesOptions[1]);
        // for ( i = 0 ; i < hobbiesOptions.length ; i++ ) {
        //     if( hobbiesOptions[i].value == hobbySelected[hobbyIndex] ) {
        //         hobbyIndex++;
        //         hobbiesOptions[i].checked = true;
        //         //alert("checked " + hobbyIndex);
        //     }
        //     else {
        //        // alert("unchecked " + hobbyIndex);
        //         hobbiesOptions[i].checked = false;
        //     }
        // }
        // var XBoard = "";
        // var XRoll = "";
        // var XPerc = "";
        // pos = 0;
        // for ( i = 0 ; i < varClassX.length ; i++ ) {
        //     if( varClassX[i] == ",") {
        //         break;
        //     }
        //     XBoard += varClassX[i];
        //     pos = i;
        // }
        // //alert("board : " + XBoard);
        // //alert(document.querySelector("#XBoard").options.length);
        // for(  i = 0 ; i < document.querySelector("#XBoard").options.length ; i++ ){
        //     if( document.querySelector("#XBoard").options[i].value == XBoard ) {
        //         //alert("selected");
        //         document.querySelector("#XBoard").options[i].selected = true;
        //         break;
        //     }
        // }
        // //alert("X : " + i);
        // for( j = pos + 8 ; j < varClassX.length ; j++ ) {
        //     if( varClassX[j] == "," ) {
        //         break;
        //     }
        //     XRoll += varClassX[j];
        //     pos = j;
        // }
        
        // for ( k = pos + 11 ; k < varClassX.length ; k++ ) {
        //     if( varClassX[k] == ":") {
        //         break;
        //     }
        //     XPerc += varClassX[k];
        // }
        // var XIIBoard = "";
        // var XIIRoll = "";
        // var XIIPerc = "";
        // posj = 0;
        // for ( i = 0 ; i < varClassXII.length ; i++ ) {
        //     if( varClassXII[i] == ",") {
        //         break;
        //     }
        //     XIIBoard += varClassXII[i];
        //     posj = i;
        // }
        // for(  i = 0 ; i < document.querySelector("#XIIBoard").options.length ; i++ ){
        //     if( document.querySelector("#XIIBoard").options[i].value == XIIBoard ) {
        //         //alert("selected");
        //         document.querySelector("#XIIBoard").options[i].selected = true;
        //         break;
        //     }
        // }
        // //alert("XII : " + i);
        // for( j = posj + 8 ; j < varClassXII.length ; j++ ) {
        //     if( varClassXII[j] == "," ) {
        //         break;
        //     }
        //     posj = j;
        //     XIIRoll += varClassXII[j];
        // }
        // for ( k = posj + 11 ; k < varClassXII.length ; k++ ) {
        //     if( varClassXII[k] == ":") {
        //         break;
        //     }
        //     XIIPerc += varClassXII[k];
        // }
        // flag = 0;
        // varState = "";
        // varDist = "";
        // //alert(varStateDist);
        // for( i = 0 ; i < varStateDist.length ; i++ ) {
        //     if( varStateDist[i] != "," ) {
        //         if( flag == 0 ) {
        //             varDist += varStateDist[i];
        //         }
        //         else {
        //             varState += varStateDist[i];
        //         }
        //     }
        //     else {
        //         i++;
        //         flag = 1;
        //     }
        // }
        // //alert(varState);
        // //alert(document.querySelector("#state").options.length);
        // for(  i = 0 ; i < document.querySelector("#state").options.length ; i++ ){
        //     if( document.querySelector("#state").options[i].value == varState ) {
        //         //alert("selected");
        //         document.querySelector("#state").options[i].selected = true;
        //         break;
        //     }
        // }
        // for(  i = 0 ; i < document.querySelector("#subcategory").options.length ; i++ ){
        //     if( document.querySelector("#subcategory").options[i].value == varDist ) {
        //         //alert("selected");
        //         document.querySelector("#subcategory").options[i].selected = true;
        //         break;
        //     }
        // }
    
        // document.querySelector("#nameFirst").value = varFirstName;
        // document.querySelector("#nameSecond").value = varMidName;
        // document.querySelector("#nameThird").value = varLastName;
        // document.querySelector("#sic").value = varSic;
        // document.querySelector("#sic").disabled = true;
        // document.querySelector("#fatherName").value = varFather;
        // document.querySelector("#motherName").value = varMother;
        // document.querySelector("#dob").value = varDate;
        // document.querySelector("#XRoll").value = XRoll;
        // document.querySelector("#Xmarks").value = XPerc;
        // document.querySelector("#XIIRoll").value = XIIRoll;
        // document.querySelector("#XIImarks").value = XIIPerc;
        // document.querySelector("#phoneNumber").value = varPhone;
        // document.querySelector("#email").value = varEmail;
        // document.querySelector("#address").value = varStreet;
        // document.getElementById("button-replace").innerHTML = "<button type=\"button\" id= \"update_btn\" class=\"btn btn-secondary\" onclick=\"return update_val.expose_fields()\" style=\"background-color: rgb(218, 204, 59);\" >UPDATE</button>";
    };

    return {
        exposed_init : init,
        exposed_check_submit : check_submit,
        exposed_deleteRow : deleteRow,
        expose_edit_row : edit_row,
    };


})();
