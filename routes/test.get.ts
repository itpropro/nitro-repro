import { DefaultAzureCredential } from '@azure/identity'
import { WebPubSubServiceClient } from '@azure/web-pubsub'

export default defineCachedEventHandler(async (event: any) => {
  // Dummy data
  const userId = '123'
  const credential = new DefaultAzureCredential()
  // Dummy data
  const notificationHub = new WebPubSubServiceClient('endpoint', credential, 'hubname')
  const connectionInfo = await notificationHub.getClientAccessToken({ userId })
  return JSON.stringify(connectionInfo)
}, { maxAge: useRuntimeConfig().cacheMaxAge })
