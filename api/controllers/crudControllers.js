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
