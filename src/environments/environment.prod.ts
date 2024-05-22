import { ApiService } from 'src/app/shared/ory-auth/api.service';
import { RealOryAuthService } from 'src/app/shared/ory-auth/real-auth.service';

export const environment = {
  production: true,
  apiService: ApiService,
  authService: RealOryAuthService,
};
