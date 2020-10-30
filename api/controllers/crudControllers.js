const Task = require("../models/crudModels");

exports.insertOne =(req, res) => {
    const newTask = new Task();
    Task.create(req.body,(err,newTask)=>{
        if(err) return(res.status(500).json({
            err
        }));

        res.status(201).json({
            status:"succes",
            doc : newTask
        });
    });
};

exports.getAll = async (req,res,next) =>{
    try {
        const doc = await Task.find();

        res.status(200).json({
            status:"succes",
            doc
        });
        next();
    } catch (error) {
        res.status(404).json({
            err:"No document find"
        });
    }
    
}

exports.getOne = async (req, res, next) => {
    try {
        const doc = await Task.findById(req.params.id);
        res.status(200).json({
            status: "succes",
            data: {
                doc
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            error
        });
    }
}

exports.updateOne = async (req, res, next) => {
    try {
        const doc = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "succes",
            data: {
                doc
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            error
        });
    }
}