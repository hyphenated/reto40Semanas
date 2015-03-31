/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        fistName: {
            type: 'string',
            required: true,
        },
        lastName: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'email',
            unique: true,
            required: true,
        },
        dob: {
            type: 'datetime',
            required: true,
        },
        bets: {
            collection: 'bet',
            via: 'userID'
        }
    }
};

