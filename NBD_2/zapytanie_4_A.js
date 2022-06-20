printjson(db.people.aggregate([
  {$set: {bmi: { $multiply: [{ $divide: [{$toDouble: '$weight'},{$pow: [ {$toDouble: '$height'}, 2]}]}, 10000]}}},
  {$group: {
    _id: '$nationality',
    bmi_avg: {$avg: '$bmi'},
    bmi_min: {$min: '$bmi'},
    bmi_max: {$max: '$bmi'}
  }}
]).toArray())