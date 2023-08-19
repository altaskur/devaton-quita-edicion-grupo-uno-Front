import { Service } from './Service';

export interface Contract {
  id: number;
  status_id: number;
  started_at: number;
  service_id: number;
  provider_user_id: number;
  customer_user_id: number;

  service: Service;
  isInProgress: boolean;
  isCanceled: boolean;
  isFinished: boolean;
}
