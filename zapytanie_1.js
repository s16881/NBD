printjson(db.people.find().limit(1).toArray())

printjson(db.people.find({"sex":"Female", "nationality":"China"}).limit(1).toArray())

printjson(db.people.find({"sex":"Male", "nationality":"Germany"}).toArray())

printjson(db.people.find({$and:[{"weight":{$gte:"68"}}, {"weight":{$lt:"71.5"}}]}).toArray())

printjson(db.people.aggregate( [{$project:{ "_id":0, "imię":"$first_name", "nazwisko":"$last_name", "miasto": "$location.city", "rok_urodzenia": {$substr : ["$birth_date", 0, 4 ]}}}, {$match:{ "rok_urodzenia": {$gt:"2000"} }}]).toArray())

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

printjson(db.people.remove( {"height": {$gt:"190"}} ))


printjson(db.people.update( {"location.city" : "Moscow"}, {$set:{"location.city":"Moskwa"}},{"multi": true} ))

printjson(db.people.update( {"first_name" : "Antonio"}, {$set:{"hobby" :"pingpong"}},{"multi": true} ))

printjson(db.people.update( {"job" : "Editor"}, {$unset:{"email" :""}},{"multi": true} ))
