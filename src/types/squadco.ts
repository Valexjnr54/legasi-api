// types/squadco.ts
export interface SquadPaymentInitiateRequest {
  amount: number;
  email: string;
  currency: string;
  initiate_type: string;
  transaction_ref: string;
  customer_name: string;
  meta_data: {
    donationId: string;
    donationType: string;
  };
  pass_charge: boolean;
  callback_url: string;
}

export interface SquadPaymentResponse {
  status: boolean;
  message: string;
  data: {
    transaction_ref: string;
    merchant_ref: string;
    payment_url: string;
  };
}

export interface SquadPaymentVerificationResponse {
  status: boolean;
  message: string;
  data: {
    transaction_ref: string;
    merchant_ref: string;
    amount: number;
    fee: number;
    currency: string;
    status: string;
    payment_status: string;
    customer: {
      name: string;
      email: string;
    };
    meta_data: Record<string, any>;
  };
}

export interface SquadWebhookData {
  event: string;
  data: {
    transaction_ref: string;
    merchant_ref: string;
    amount: number;
    fee: number;
    currency: string;
    status: string;
    payment_status: string;
    customer: {
      name: string;
      email: string;
    };
  };
}