var calc_age = ( function() {
    var age_gen = function(dob) {
        var today = new Date();
        var birthDate = new Date(document.getElementById("dob").value);

        //alert(birthDate);
        //alert(today);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if ((m < 0) || (m == 0) && (today.getDate() > birthDate.getDate())) {
            age = age - 1;
        }
        //alert("AGE : " + age);
        return age;
    };
    return {
        expose_age_gen : age_gen,
    }
})();