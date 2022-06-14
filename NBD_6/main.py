import riak

myClient = riak.RiakClient(pb_port=8087)
myBucket = myClient.bucket('s16881')

#insert data
car1 = {"brand": "Mazda", "model": "CX5", "year": 2019, "price": 1600}
key1 = myBucket.new('mazda', data=car1)
key1.store()

#get data before edit
fetched1 = myBucket.get('mazda')
print('Data:' + str(fetched1.data))

#edit data
fetched1.data["price"] = 1900
fetched1.store()

#get data after edit
fetched1 = myBucket.get('mazda')
print('Edited Data:' + str(fetched1.data))

#delete datA
fetched1.delete()

#get data after delete
fetched1 = myBucket.get('mazda')
print('Deleted Data:' + str(fetched1.data))
