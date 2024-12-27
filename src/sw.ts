/// <reference lib="WebWorker" />
import { clientsClaim } from 'workbox-core'
import { createChannel } from './channel'

declare let self: ServiceWorkerGlobalScope

const channel = createChannel();
channel.addEventListener('message', () => {});

self.skipWaiting()
clientsClaim()
