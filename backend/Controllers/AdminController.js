const { response } = require('express')
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let admin = new Admin ({
            username: req.body.username,
            adminname: req.body.adminname,
            password: hashedPass,
            email: req.body.email,
            
        })
        {
           
        }
        
        admin.save()
        .then(admin => {
            res.json({
                message: 'Admin added Succesfully'
            })
        })
        .catch(error => {
            res.json({
                error : err
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    Admin.findOne({ username: username })
        .then(admin => {
            if (admin) {
                bcrypt.compare(password, admin.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        });
                    }
                    if (result) {
                        let token = jwt.sign({ name: admin.username }, 'AaBdr(23)', { expiresIn: '1h' });
                        res.json({
                            message: 'Login Successful',
                            token
                        });
                    } else {
                        res.json({
                            message: 'Password does not match!'
                        });
                    }
                });
            } else {
                res.json({
                    message: 'No admin found!'
                });
            }
        })
        .catch(err => {
            res.json({
                error: err
            });
        });
};



module.exports = {
    register, 
    login 
}
