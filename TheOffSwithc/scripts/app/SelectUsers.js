/**
 * SelectUserModel view model
 */

var app = app || {};

app.SelectUserModel = (function () {
    'use strict'

    var Model = (function () {
        
        var select = function () {    
               app.mobileApp.navigate('#:back');
        };
        
        return {
            users: app.Users.users,
            select: select
        };
        
    }());
    
    return Model;
    
}());