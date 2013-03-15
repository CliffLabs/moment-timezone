var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/Abidjan 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Abidjan").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Abidjan").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Africa/Abidjan 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Abidjan").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Africa/Abidjan");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Abidjan").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Africa/Abidjan");

		test.done();
	}
};