import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '7.0.25',
    },
    instance: {
      dbName: 'test',
      launchTimeout: 60000,
    },
  })

  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}