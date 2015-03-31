/**
* Bet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        amount: {
            type: 'float',
            required: true,
            decimal: true,
        },
        userID: {
            required: true,
            model: 'user'
        },
        competitorID: {
            required: true,
            model: 'competitor'
        }
    }
};

