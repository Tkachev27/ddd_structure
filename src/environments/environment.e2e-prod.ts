import { MockApiService } from 'src/app/shared/doors-auth/mock-api.service';
import { MockAuthService } from 'src/app/shared/doors-auth/mock-auth.service';

export const environment = {
  production: true,
  apiService: MockApiService,
  authService: MockAuthService,
};
