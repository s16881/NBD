printjson(db.people.aggregate(
        {$group: { _id : null, job : {$addToSet: "$job" }}},
		{$unwind: "$job"},
).toArray());