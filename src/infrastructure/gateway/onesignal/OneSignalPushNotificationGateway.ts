import { 
  NotificationMessage, 
  PushNotificationGateway 
} from '@/domain/gateways';

export class OneSignalPushNotificationGateway implements PushNotificationGateway {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async send(notification: NotificationMessage): Promise<void> {
    // TODO: this method should send notification with OneSignal
  }
}
