/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_RECAPTCHA_SITE_KEY: string;
    REACT_APP_API_URL: string;
  }
}