/*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        round_id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        roundName: {
            type: 'string',
            required: true,
        }
        
    }
};