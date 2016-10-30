function hasProperty(object, property) {
    var exists = false;
    Object.keys(object).forEach(function(item){
        if(item === property)
            exists = true;
    });
    return exists;
}
