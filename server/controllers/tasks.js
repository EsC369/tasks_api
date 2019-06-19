const mongoose = require("mongoose");
Task = mongoose.model("Task");
module.exports = {
    index: function(req, res) {
        Task.find({}, function(err, people){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", data: Task});
            }
        });
    },

    create: function(req, res) {
        Task.create(req.body, function(err, task){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                // res.json(task);
                res.redirect("/tasks/"+ task.id);
            }
        });
    },

    update: function(req, res) {
      Task.findById(req.params.id, function(err, task) {
        if(err) {
          res.json({message: "Error", error: err});

        }
        else {
          task.set(req.body);
          task.save(function(err){
            if(err) {
              res.json({message: "Error", error: err});
            }
            else {
              res.redirect("/tasks/"+task.id);
            }
          });
        }
      });
    },
      
    delete: function(req, res) {
        Task.remove({_id: req.params.id}, function(err){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.redirect("/tasks");
            }
        });
    },

    show: function(req, res) {
        Task.findById(req.params.id, function(err, Task){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", data: Task});
            }
        });

    }
}