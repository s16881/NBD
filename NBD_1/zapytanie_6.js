printjson(db.people.insert({ "sex" : "Female",
		"first_name" : "Barbara",
		"last_name" : "Lis",
		"job" : "Protocol Engineer",
		"email" : "s16881@pjwstk.edu.pl",
		"location" : {
			"city" : "Warsaw",
			"address" : {
				"streetname" : "Koszykowa",
				"streetnumber" : "86"
			}
		},
		"description" : "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
		"height" : "172.1",
		"weight" : "60.2",
		"birth_date" : "1999-01-25T11:51:38Z",
		"nationality" : "Poland",
		"credit" : [
			{
				"type" : "instapayment",
				"number" : "3581609550731672",
				"currency" : "PLN",
				"balance" : "5658.66"
			}
		] }))