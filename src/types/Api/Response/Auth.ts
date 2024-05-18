export type LoginResponse = {
  success: boolean;
  data: {
    token: string;
    refreshToken: string;
  };
  resultCode: number;
  resultMessage: string;
};
