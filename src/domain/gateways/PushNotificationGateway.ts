export type NotificationMessage = {
  id: string;
  title: string;
  content: string;
}

export interface PushNotificationGateway {
  send(notification: NotificationMessage): Promise<void>;
}
