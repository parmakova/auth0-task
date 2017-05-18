interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '6cGNN3EGLt2MiG6T4eP5efhJsiJjsB7J',
  CLIENT_DOMAIN: 'parmakovablaz.eu.auth0.com',
  AUDIENCE: 'users-auth-api',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};