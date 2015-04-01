/**
* Weekly_entries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        weight: {
            type: 'float',
            required: true,
        },
        size: {
            type: 'float',
            required: true,
        },
        competitorID: {
            model: 'competitor',
            required: true,
        },
        weekID: {
            model: 'weeks',
            required: true
        }
        
    }
};

