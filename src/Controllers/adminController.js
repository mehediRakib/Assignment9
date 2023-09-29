exports.create=async (req,res)=>{
    res.status(200).json(
        {status:"success",
            data:"Can contain any information"
        }
    )
}

exports.read=async (req,res)=>{
    res.status(200).json(
        {
            status:"success",
            data:"Read Successfully"
        }
    )
}
exports.delete=async (req,res)=>{
    res.status(200).json(
        {
            status:"success",
            data:"delete Successfully"
        }
    )
}
exports.update=async (req,res)=>{
    res.status(200).json(
        {
            status:"success",
            data:"update Successfully"
        }
    )
}