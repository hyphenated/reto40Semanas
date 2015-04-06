/**
* Bet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    identity:'weeks',
    attributes: {
        week_id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        week_start: {
            type:'date',
            required:true
        },
        week_end: {
            type:'date',
            required:true
        },
        weekly_entries: {
            collection: 'weeklyentries',
            via: 'weekID'
        },
        roundID: {
            model: 'rounds',
            required: true
        }
    }
};

