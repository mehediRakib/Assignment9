const express=require('express');
const Router=express('Routes');
const admincontroller=require('../Controllers/adminController');
const postController=require('../Controllers/postController');
const subAdminController=require('../Controllers/subAdminController');
const userCrontroller=require('../Controllers/userController');
const controller=require

Router.get('/adminCreate',admincontroller.create)
Router.get('/adminRead',admincontroller.read);
Router.get('/adminDelete',admincontroller.delete);
Router.get('/adminUpdate',admincontroller.update)

Router.get('/postCreate',postController.create);
Router.get('/postRead',postController.read);
Router.get('/postDelete',postController.delete);
Router.get('/postUpdate',postController.update);

Router.get('/subCreate',subAdminController.create);
Router.get('/subRead',subAdminController.read);
Router.get('/subDelete',subAdminController.delete);
Router.get('/subUpdate',subAdminController.update);

Router.get('/userCreate',userCrontroller.create);
Router.get('/userRead',userCrontroller.read);
Router.get('/userDelete',userCrontroller.delete);
Router.get('/userUpdate',userCrontroller.update);

module.exports=Router;

