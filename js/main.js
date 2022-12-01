

 function vigfoo_cc(vigfooString , ...vigfooArray) {

    if ( (vigfooString && typeof(vigfooString) === "string")  ) {

        vigfooString = vigfooString.split(" ");
        
        for (var i = 0, x = vigfooString.length; i < x; i++) {
            
            if(vigfooArray.includes(vigfooString[i])){
                vigfooString[i] = vigfooString[i].toUpperCase();
            }
            

            
            if (vigfooString[i]) {
                vigfooString[i] = vigfooString[i][0].toUpperCase() + vigfooString[i].substr(1);
            }
            
            
        }

        return vigfooString.join(" ");

    } else {

        return vigfooString;
    }

}

