import { BroadcastChannel } from 'broadcast-channel'

export function createChannel() {
  return new BroadcastChannel('test');
}
