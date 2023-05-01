import { 
  NotificationMessage, 
  PushNotificationGateway 
} from '@/domain/gateways';

export class OneSignalPushNotificationGateway implements PushNotificationGateway {
  async send(notification: NotificationMessage): Promise<void> {
    // TODO: this method should send notification with OneSignal
    console.log(notification);
  }
}
