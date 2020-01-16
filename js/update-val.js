var update_val = (function (){
    var err = 0;
    var fields = function() {
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
        if( varDate == "" ) {
            err++;
            date_help.innerHTML = "SELECT A DATE";
        }
        else if( calc_age.expose_age_gen() < 21 ) {
            err++;
            date_help.innerHTML = "YOU MUST BE ATLEAST 20YEARS OLD";
        }
        else {
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
        if( err == 0 ) {
            //alert("correct");            
            field_val.expose_update();
        }
        else {
           // alert("incorrect");
            return false;
        }
    };
    return {
        expose_fields : fields,
    }
})();