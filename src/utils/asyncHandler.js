const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asyncHandler}

//const asyncHandler=()=>{}
///const asyncHandler=(func)=>()=>{}
//const asyncHandler=(func)=>async()=>{}
/*
const asyncHandler=(fn)=>async(req,res,next)=>{
    try{
        await(fn,res,next)
    }
    catch(erorr){
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
    }
}*/