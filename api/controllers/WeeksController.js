/**
 * BetController
 *
 * @description :: Server-side logic for managing bets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	identity:'week',
	index: function(req, res){
		weeks.find().exec(function(err, weeks){
							console.log('AKI')
							if ( err || !weeks ){ 
								 res.view('weeks',{weeks: null})
								 
							}
							else{
								res.view('weeks',{weeks: weeks})
		 		  			}

							
							
						
					
		});
	}
};

