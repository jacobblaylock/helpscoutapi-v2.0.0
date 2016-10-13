var Helpscout = require('./helpscout');

var helpscout = new Helpscout();

var now = new Date();
var startDate = new Date(now.getFullYear(), now.getMonth());
var endDate = new Date(now.getFullYear(), now.getMonth()+1);
helpscout.getConversations(startDate, endDate, function() {
    helpscout.getThreads(function() {
        //helpscout.writeThreadsToFile();
        helpscout.insertTickets(function() {
            helpscout.mysqlClose();
        });
    });
});