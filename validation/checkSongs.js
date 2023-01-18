const checkName = (req , res , next) => {
    if(req.body.name){
        next()
    }
    else{
        res.status(400).json({error: "Name is required"})
    }
}

const checkBoolean = (req , res , next) => {
    if(typeof req.body.is_favorite === "boolean" || 
         req.body.is_favorite === undefined){
        next()
    }
    else{
        res.status(400).json({error: "is_favorite is required"})
    }
}


module.exports = {checkName , checkBoolean}