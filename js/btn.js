var btn = ( function() {
    var change_btn = function() {
        document.getElementById("button-replace").innerHTML = "<input type=\"submit\" class=\"btn btn-primary\" id=\"submit_button\" />";
        clear_fields();
    }
    var clear_fields = function() {
        document.getElementById("nameFirst").value = "";
        document.getElementById("nameSecond").value = "";
        document.getElementById("nameThird").value = "";
        document.getElementById("sic").value = "";
        document.getElementById("fatherName").value = "";
        document.getElementById("motherName").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("XRoll").value = "";
        document.getElementById("Xmarks").value = "";
        document.getElementById("XIIRoll").value = "";
        document.getElementById("XIImarks").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("XIIBoard").value = "NONE";
        document.getElementById("XBoard").value = "NONE";
        document.getElementById("state").value = "NONE";
        document.getElementById("subcategory").value = "NONE";
        var sex = document.getElementsByName("customRadioInline1");
        for( i  = 0 ; i < sex.length ; i++ ) {
            if( sex[i].checked ) {
                sex[i].checked = false;
                break;
            }
        }
        var hobby = document.getElementsByName("hobby");
        for ( i = 0 ; i < hobby.length ; i++ ) {
            if( hobby[i].checked ) {
                hobby[i].checked = false;
            }
        }
        
    };
    return {
        expose_clear_fields : clear_fields,
        expose_change_btn : change_btn,
    }
})();