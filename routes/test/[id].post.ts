import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event: any) => {
  const { id } = getRouterParams(event)
  const { stringField } = readBody(event)
  const mongoClient = await new MongoClient('mongodb://localhost:27017').connect()
  const collection = mongoClient.db('test-db').collection('test-collection')
  const result = collection.insertOne({
    _id: id,
    stringField: stringField || 'test',
  })
  return JSON.stringify(result)
})
