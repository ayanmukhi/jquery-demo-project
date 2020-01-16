//alert("drop down module");
var drop_down = (function() {
    var drop_down_list = function() {
        //alert("hello");
        var state = document.getElementById("state").value;
        
        //alert("state");
        var sub_category = document.querySelector("#subcategory");
        sub_category.length = 0;
        switch (state) {
            case "NONE" :
                sub_category.options[0]=new Option("-----","NONE");
                break;
    
            case "WEST BENGAL" :
                sub_category.options[0]=new Option("Please select the district","NONE");
                sub_category.options[1]=new Option("Alipurduar","Alipurduar");
                sub_category.options[2]=new Option("Bankura","Bankura");
                sub_category.options[3]=new Option("Birbhum","Birbhum");
                break;
            
            case "GUJRAT" :
                sub_category.options[0]=new Option("Please select the district","NONE");
                sub_category.options[1]=new Option("Ahmedabad","Ahmedabad");
                sub_category.options[2]=new Option("Amreli","Amreli");
                break;
            case "ODISHA" :
                sub_category.options[0]=new Option("Please select the district","NONE");
                sub_category.options[1]=new Option("Angul","Angul");
                sub_category.options[2]=new Option("Balangir","Balangir");
                sub_category.options[3]=new Option("Ganjam","Ganjam");
                sub_category.options[4]=new Option("Khordha","Khordha");
                break;
            case "GOA" :
                sub_category.options[0]=new Option("Please select the district","NONE");
                sub_category.options[1]=new Option("North Goa","North Goa");
                sub_category.options[2]=new Option("South Goa","South Goa");
                break;
        }
        //return true;
    };

    return {
        expose_drop_down_list : drop_down_list,
    };
})();