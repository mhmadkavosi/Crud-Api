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
            status: "fail",
            message: "some Things Wrong please try again",
            error
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
        res.status(500).json({
            status: "fail",
            message: "some Things Wrong please try again",
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
        res.status(500).json({
            status: "fail",
            message: "some Things Wrong please try again",
            error
        });
    }
}


exports.deleteOne = async (req, res, next) => {
    try {
        const doc = await Task.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "succes",
            data: null
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: "some Things Wrong please try again",
            error
        });
    }
}