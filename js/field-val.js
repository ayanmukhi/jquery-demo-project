//alert("new js");
var field_val = (function(){
    var varTemp = 0;
    var validation = function() {
        
        //alert("field validation starts");
        nameFirst = document.getElementById("nameFirst").value;
        var first_name_help = document.getElementById("nameFirstHelp");
        
        nameSecond = document.getElementById("nameSecond").value;
        var second_name_help = document.getElementById("nameSecondHelp");
        nameThird = document.getElementById("nameThird").value;
        var third_name_help = document.getElementById("nameThirdHelp");
        varGender = document.getElementsByName("customRadioInline1").value;
        var gender_help = document.getElementById("genderHelp");
        varFather = document.getElementById("fatherName").value;
        var father_name_help = document.getElementById("fatherNameHelp");
        varMother = document.getElementById("motherName").value;
        var mother_name_help = document.getElementById("motherNameHelp");
        varDate = document.getElementById("dob").value;
        var date_help = document.getElementById("dateHelp");
        varEmail = document.getElementById("email").value;
        var email_help = document.getElementById("emailHelp");
        varPhone = document.getElementById("phoneNumber").value;
        var phone_help = document.getElementById("phoneHelp");
        varSic = document.getElementById("sic").value;
        var sic_help = document.querySelector("#sicHelp");
        varPresentAddress = document.getElementById("address").value;
        var address_help = document.getElementById("presentAddressHelp");
        varState = document.getElementById("state").value;
        var state_help = document.getElementById("stateHelp");
        varPlace = document.getElementById("subcategory").value;
        var dist_help = document.getElementById("districtHelp");
        varClassX = document.getElementById("XBoard").value;
        var X_board_help = document.getElementById("classXHelp");
        varXRoll = document.getElementById("XRoll").value;
        var X_roll_help = document.getElementById("XRollHelp");
        varClassXPerc = Number(document.getElementById("Xmarks").value);
        var X_perc_help = document.getElementById("XPercHelp");
        varClassXII = document.getElementById("XIIBoard").value;
        var XII_board_help = document.getElementById("classXIIHelp");
        varXIIRoll = document.getElementById("XIIRoll").value;
        var XII_roll_help = document.getElementById("XIIRollHelp");
        varClassXIIPerc = Number(document.getElementById("XIImarks").value);
        var XII_perc_help = document.getElementById("XIIPercHelp");
        varHobby = document.getElementsByName("hobby");
        var hobby_help = document.querySelector("#hobbyHelp");

        err = 0;
        hobby = 0;
        hobbyStr = "";

        if (/^[a-zA-Z][a-zA-Z]*$/.test(nameFirst) == false) {
            err++;
            
            first_name_help.innerHTML = "INVALID FIRST NAME";
            // var nameFirstStyle = document.querySelector("#nameFirst");
            // nameFirstStyle.nameFirstStyle.color = "red";
        }
        else {
            first_name_help.innerHTML = "";
        }
        
        if(/^[a-zA-Z]*$/.test(nameSecond) == false) {
            err++;
            //alert("error occured");
            second_name_help.innerHTML = "INVALID SECOND NAME";
        }
        else {
            second_name_help.innerHTML = "";
        }
        if (/^[a-zA-Z][a-zA-Z]*$/.test(nameThird) == false) {
            err++;
            third_name_help.innerHTML = "INVALID THIRD NAME";
        }
        else {
            third_name_help.innerHTML = "";
        }

        if( varGender == "" ) {
            err++;
            gender_help.innerHTML = "SELECT YOUR GENDER";
        }
        else {
            gender_help.innerHTML = "";
        }
        if( /^[1-9]\d{0}$/.test(varSic) == false ) {
            err++;
            sic_help.innerHTML = "INVALID SIC";
        }
        else {
            sic_help.innerHTML = "";
        }
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(varFather) == false ) {
            err++;
            father_name_help.innerHTML = "INVALID FATHER NAME";
        }
        else {
            father_name_help.innerHTML = "";
        }
        if( /^[a-zA-Z][a-zA-Z]*\s[a-zA-Z][a-zA-Z]*$/.test(varMother) == false ) {
            err++;
            mother_name_help.innerHTML = "INVALID MOTHER NAME";
        }
        else {
            mother_name_help.innerHTML = "";
        }
        if( varDate == "" )  {
            err++;
            //alert( calc_age.expose_age_gen());
            date_help.innerHTML = "SELECT A DATE";
        }
        else if( calc_age.expose_age_gen() < 21 ) {
            err++;
            date_help.innerHTML = "YOU MUST BE ATLEAST 20YEARS OLD";
        }
        else {
            //alert( calc_age.expose_age_gen());
            date_help.innerHTML = "";
        }
        if(( /\S+@\S+\.(com|org)+/.test(varEmail) == false ) || (varEmail == "")) {
            err++;
            email_help.innerHTML = "INVALID EMAIL";
        }
        else {
            email_help.innerHTML = "";
        }
        if( /^[1-9]\d{0}$/.test(varPhone) == false ) {
            err++;
            phone_help.innerHTML = "INVALID PHONE NUMBER";
        }
        else {
            phone_help.innerHTML = "";
        }
        if( varClassX == "NONE" ) {
            err++;
            X_board_help.innerHTML = "SELECT YOUR CLASS X BOARD";
        }
        else {
            X_board_help.innerHTML = "";
        }
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(varXRoll) == false) {
            err++;
            X_roll_help.innerHTML = "ENTER YOUR X ROLL";
        }
        else {
            X_roll_help.innerHTML = "";
        }
        if(( varClassXPerc < 0 ) || (varClassXPerc > 100 ) || (varClassXPerc.toString() == "NaN") || (varClassXPerc.toString() == "0")){
            err++;
            X_perc_help.innerHTML = "INVALID X PERCENTAGE";
        }
        else {
            X_perc_help.innerHTML = "";
        }
        if( varClassXII == "NONE" ) {
            err++;
            XII_board_help.innerHTML = "SELECT YOUR CLASS XII BOARD";
        }
        else {
            XII_board_help.innerHTML = "";
        }
        if( /^[a-zA-Z0-9][a-zA-Z0-9]*\/{0,1}[a-zA-Z0-9][a-zA-Z0-9]*$/.test(varXIIRoll) == false) {
            err++;
            XII_roll_help.innerHTML = "ENTER YOUR XII ROLL";
        }
        else {
            XII_roll_help.innerHTML = "";
        }
        if(( varClassXIIPerc < 0 ) || (varClassXIIPerc > 100 ) || (varClassXIIPerc.toString() == "0") || (varClassXIIPerc.toString() == "NaN")){
            err++;
            XII_perc_help.innerHTML = "INVALID PERCENTAGE";
        }
        else {
            XII_perc_help.innerHTML = "";
        }
        //alert("error occured");
        for( i = 0 ; i < varHobby.length ; i++ ) {
            if( varHobby[i].checked) {
                hobbyStr += " " + varHobby[i].value;
                //alert(varHobby[i].value);
                hobby++;
            }
        }
        //alert("err");
        if(/^[a-zA-Z0-9][a-zA-Z 0-9-,:(\\\n)\/\\]*$/.test(varPresentAddress) == false) {
            err++;
            address_help.innerHTML = "FILL OUT YOUR PRESENT ADDRESS";
        }
        else{
            address_help.innerHTML = "";
        }
        //alert(hobbyStr);
        if( hobby == 0 ) {
            err++;
            hobby_help.innerHTML = "SELECT A HOBBY OPTION";
        }
        else{
            hobby_help.innerHTML = "";   
        }
        if( varState == "NONE") {
            err++;
            state_help.innerHTML = "SELECT YOUR STATE";
        }
        else {
            state_help.innerHTML = "";
        }
        if( varPlace == "NONE") {
            err++;
            dist_help.innerHTML = "SELECT YOUR DISTRICT";
        }
        else {
            dist_help.innerHTML = "";
        }
        
        table = document.querySelector("#myTable");
        for ( i = 1 ; i < table.rows.length ; i++ ) {
            checkSic = table.rows[i];
            if( checkSic.cells[2].innerHTML == varSic ) {
                err++;
                alert("SAME SIC EXIST");
            }
        }
        
        if( err == 0 ) {
            //alert("correct");
            // btn = document.getElementById("submit_button");
            // btn.disabled = false;
            createTable();
            btn.expose_clear_fields();
            return false;
        }
        else {
            //alert("incorrect");
            return false;
        }


    };


    var createTable = function() {
        //alert(nameFirst);
        varTemp++;
        //alert("creating table");
        if(varTemp == 1) {
            //alert(varTemp);
            createTableHead();
        }

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
        

        gender = document.getElementsByName("customRadioInline1");
        //alert(gender.length);
        for ( i = 0 ; i < gender.length ; i++ ) {
            if( gender[i].checked) {
                cell2.innerHTML = gender[i].value;
                break;
            }
        }
        
        cell1.innerHTML = nameFirst + " " + nameSecond + " " + nameThird;
        //cell2.innerHTML = varGender;
        cell3.innerHTML = varSic;
        cell4.innerHTML = varFather;
        cell5.innerHTML = varMother;
        cell6.innerHTML = varDate;
        cell7.innerHTML = hobbyStr;
        cell8.innerHTML = varClassX + ", ROLL:" + varXRoll + ", Secured:" + varClassXPerc;
        cell9.innerHTML = varClassXII + ", ROLL:" + varXIIRoll + ", Secured:" + varClassXIIPerc;
        cell10.innerHTML = varPlace + ", " + varState;
        cell11.innerHTML = varPhone;
        cell12.innerHTML = varPresentAddress;
        cell13.innerHTML = varEmail;
        cell14.innerHTML = "<input type=\"button\" value=\"Delete\" onclick=\"field_val.expose_delete_row(this)\"></input>  \/<br> <input type=\"button\" value=\"EDIT\" onclick=\"field_val.expose_edit_row(this)\"></input>";
    
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


    var deleteRow = function(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
        
    };

    var edit_row = function(data) {
        
        //alert("edit row");
        var i = data.parentNode.parentNode.rowIndex;
        //alert("row index : " + i);
        table = document.querySelector("#myTable").rows[i];
        varName = table.cells[0].innerHTML;
        varGender = table.cells[1].innerHTML;
        varSic = table.cells[2].innerHTML;
        varFather = table.cells[3].innerHTML;
        varMother = table.cells[4].innerHTML;
        varDate = table.cells[5].innerHTML;
        varHobby = table.cells[6].innerHTML;
        varClassX = table.cells[7].innerHTML;
        varClassXII = table.cells[8].innerHTML;
        varStateDist = table.cells[9].innerHTML;
        varPhone = table.cells[10].innerHTML;
        varStreet = table.cells[11].innerHTML;
        varEmail = table.cells[12].innerHTML;
    
        varStart = 0;
        varEnd = varName.length;
        varFirstName = "";
        varMidName = "";
        varLastName = "";
 
        for ( i = varStart ; i < varEnd ; i++) {
            if( varName[i] == " ") {
                break;
            }
            varFirstName += varName[i];
        }
        varStart = i;
        for ( j = varStart + 1 ; j < varEnd ; j++) {
            if( varName[j] == " ") {
                break;
            }
            varMidName += varName[j];
        }
        varStart = j;
        for ( k = varStart + 1 ; k < varEnd ; k++) {
            varLastName += varName[k];
        }
        
        genderOptions = document.getElementsByName("customRadioInline1");
        for( i = 0 ; i < genderOptions.length ; i++ ) {
            if( genderOptions[i].value == varGender) {
                genderOptions[i].checked = "checked";
                //alert("checked");
                break;
            }
        }
        var hobbyIndex = 0;
        var hobbySelected = [];
        hobbySelected[0] = "";
        //alert("hoby string : " + varHobby);    
        for ( i = 0 ; i < varHobby.length ; i++ ) {
            if ( varHobby[i] == " ") {
                hobbyIndex++;
                hobbySelected[hobbyIndex] = "";
    
            }
            else {
                hobbySelected[hobbyIndex] += varHobby[i];
            }
        }
        //alert("selected hobby parsed : " + hobbySelected[1]);
        hobbyIndex = 1;
        hobbiesOptions = document.getElementsByName("hobby");
        //alert(hobbiesOptions[1]);
        for ( i = 0 ; i < hobbiesOptions.length ; i++ ) {
            if( hobbiesOptions[i].value == hobbySelected[hobbyIndex] ) {
                hobbyIndex++;
                hobbiesOptions[i].checked = true;
                //alert("checked " + hobbyIndex);
            }
            else {
               // alert("unchecked " + hobbyIndex);
                hobbiesOptions[i].checked = false;
            }
        }
        var XBoard = "";
        var XRoll = "";
        var XPerc = "";
        pos = 0;
        for ( i = 0 ; i < varClassX.length ; i++ ) {
            if( varClassX[i] == ",") {
                break;
            }
            XBoard += varClassX[i];
            pos = i;
        }
        //alert("board : " + XBoard);
        //alert(document.querySelector("#XBoard").options.length);
        for(  i = 0 ; i < document.querySelector("#XBoard").options.length ; i++ ){
            if( document.querySelector("#XBoard").options[i].value == XBoard ) {
                //alert("selected");
                document.querySelector("#XBoard").options[i].selected = true;
                break;
            }
        }
        //alert("X : " + i);
        for( j = pos + 8 ; j < varClassX.length ; j++ ) {
            if( varClassX[j] == "," ) {
                break;
            }
            XRoll += varClassX[j];
            pos = j;
        }
        
        for ( k = pos + 11 ; k < varClassX.length ; k++ ) {
            if( varClassX[k] == ":") {
                break;
            }
            XPerc += varClassX[k];
        }
        var XIIBoard = "";
        var XIIRoll = "";
        var XIIPerc = "";
        posj = 0;
        for ( i = 0 ; i < varClassXII.length ; i++ ) {
            if( varClassXII[i] == ",") {
                break;
            }
            XIIBoard += varClassXII[i];
            posj = i;
        }
        for(  i = 0 ; i < document.querySelector("#XIIBoard").options.length ; i++ ){
            if( document.querySelector("#XIIBoard").options[i].value == XIIBoard ) {
                //alert("selected");
                document.querySelector("#XIIBoard").options[i].selected = true;
                break;
            }
        }
        //alert("XII : " + i);
        for( j = posj + 8 ; j < varClassXII.length ; j++ ) {
            if( varClassXII[j] == "," ) {
                break;
            }
            posj = j;
            XIIRoll += varClassXII[j];
        }
        for ( k = posj + 11 ; k < varClassXII.length ; k++ ) {
            if( varClassXII[k] == ":") {
                break;
            }
            XIIPerc += varClassXII[k];
        }
        flag = 0;
        varState = "";
        varDist = "";
        //alert(varStateDist);
        for( i = 0 ; i < varStateDist.length ; i++ ) {
            if( varStateDist[i] != "," ) {
                if( flag == 0 ) {
                    varDist += varStateDist[i];
                }
                else {
                    varState += varStateDist[i];
                }
            }
            else {
                i++;
                flag = 1;
            }
        }
        //alert(varState);
        //alert(document.querySelector("#state").options.length);
        for(  i = 0 ; i < document.querySelector("#state").options.length ; i++ ){
            if( document.querySelector("#state").options[i].value == varState ) {
                //alert("selected");
                document.querySelector("#state").options[i].selected = true;
                break;
            }
        }
        for(  i = 0 ; i < document.querySelector("#subcategory").options.length ; i++ ){
            if( document.querySelector("#subcategory").options[i].value == varDist ) {
                //alert("selected");
                document.querySelector("#subcategory").options[i].selected = true;
                break;
            }
        }
        // alert("first " + varFirstName);
        // alert("second " + varMidName);
        // alert("third " + varLastName);
    
        document.querySelector("#nameFirst").value = varFirstName;
        document.querySelector("#nameSecond").value = varMidName;
        document.querySelector("#nameThird").value = varLastName;
        document.querySelector("#sic").value = varSic;
        document.querySelector("#sic").disabled = true;
        document.querySelector("#fatherName").value = varFather;
        document.querySelector("#motherName").value = varMother;
        document.querySelector("#dob").value = varDate;
        document.querySelector("#XRoll").value = XRoll;
        document.querySelector("#Xmarks").value = XPerc;
        document.querySelector("#XIIRoll").value = XIIRoll;
        document.querySelector("#XIImarks").value = XIIPerc;
        document.querySelector("#phoneNumber").value = varPhone;
        document.querySelector("#email").value = varEmail;
        document.querySelector("#address").value = varStreet;
        document.getElementById("button-replace").innerHTML = "<button type=\"button\" id= \"update_btn\" class=\"btn btn-secondary\" onclick=\"return update_val.expose_fields()\" style=\"background-color: rgb(218, 204, 59);\" >UPDATE</button>";
    };

    var update = function(form) {
        //form
        //alert("need to be checked : " + document.querySelector("#nameFirst").value);
        
        found = 0;
        table = document.querySelector("#myTable");
        arg = document.querySelector("#form");
        if( true) {
               
        //alert(table.rows.length);
            for ( i = 1 ; i < table.rows.length ; i++ ) {
                checkSic = table.rows[i];
                //alert(checkSic);
                //alert("recorded SIC : " + checkSic);
                if( checkSic.cells[2].innerHTML == document.querySelector("#sic").value ) {
                    checkSic.cells[0].innerHTML = document.querySelector("#nameFirst").value + " " + document.querySelector("#nameSecond").value + " " + document.querySelector("#nameThird").value;
                    //selectedGender = "";
                    for( i = 0 ; i < document.getElementsByName("customRadioInline1").length; i++ ) {
                        if( document.getElementsByName("customRadioInline1")[i].checked) {
                            //alert(document.getElementsByName("customRadioInline1")[i].value);
                            checkSic.cells[1].innerHTML = document.getElementsByName("customRadioInline1")[i].value;
                            //alert(checkSic.cells[1].innerHTML);
                            break;
                        }
                    }
                    checkSic.cells[2].innerHTML = document.querySelector("#sic").value;
                    checkSic.cells[3].innerHTML = document.querySelector("#fatherName").value;
                    checkSic.cells[4].innerHTML = document.querySelector("#motherName").value;
                    checkSic.cells[5].innerHTML = document.querySelector("#dob").value;
                    hobbyStr = "";
                    for ( i = 0 ; i < document.getElementsByName("hobby").length ; i++ ) {
                        if( document.getElementsByName("hobby")[i].checked ){
                            hobbyStr += " " + document.getElementsByName("hobby")[i].value;
                        }
                    }
                    checkSic.cells[6].innerHTML = hobbyStr;
                    checkSic.cells[7].innerHTML = document.querySelector("#XBoard").value + ", ROLL:" + document.querySelector("#XRoll").value + ", Secured:" + document.querySelector("#Xmarks").value;
                    checkSic.cells[8].innerHTML = document.querySelector("#XIIBoard").value + ", ROLL:" + document.querySelector("#XIIRoll").value + ", Secured:" + document.querySelector("#XIImarks").value;    
                    checkSic.cells[9].innerHTML = document.querySelector("#subcategory").value + ", " + document.querySelector("#state").value;
                    checkSic.cells[10].innerHTML = document.querySelector("#phoneNumber").value;
                    checkSic.cells[11].innerHTML = document.querySelector("#address").value;
                    checkSic.cells[12].innerHTML = document.querySelector("#email").value;
                    //alert("match found");
                    found = 1;
                    btn.expose_change_btn();
                    break;
                }
            }
            // if( found == 0 ) {
            //     alert("new record click on submit");
            // }
        }
    };


    return {
        expose_validation : validation,
        expose_delete_row : deleteRow,
        expose_edit_row : edit_row,
        expose_update : update,
        
    };

})();