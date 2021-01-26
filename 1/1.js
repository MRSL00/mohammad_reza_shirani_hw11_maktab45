function fullname(x) { 
    console.log(x)
 }
function get_info(name,family,cb) { 
    cb(name+" "+family)
}

get_info("ali","rezaii",fullname)