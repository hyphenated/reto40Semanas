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
							if ( err || !weeks ){ 
								 res.view('weeks',{weeks: null})
							}
							else{
								res.view('weeks',{weeks: weeks})
		 		  			}
		});
	},
	save:function(req, res){
		week = req.param('week');
		startWeek = req.param('start-week');
		endWeek = req.param('end-week');
		round = req.param('round');
		weeks.save({'week_name': 'week '+ week, 'week_start': startWeek, 'week_end':endWeek, 'roundID': round}).done(function(err,model){
                
                  // Error handling
                    if (err) {
                  
                   console.log('Error');

                    }else {
                       console.log('Successfully Created!');
                    //res.redirect( 'person/view/’+model.id);
                   }
          });
	}
};

