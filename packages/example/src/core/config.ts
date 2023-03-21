import {atom} from 'recoil';

export type EnvName = 'prod' | 'test' | 'local';

export const config = {
  APP_NAME: 'React App',
  APP_HOSTNAME: 'localhost',
  APP_ORIGIN: 'http://localhost:5173',
  API_ORIGIN: 'http://localhost:5173/api'
};

/**
 * App config.
 */
export const AppConfigAtom = atom<any>({
  key: 'config',
  effects: [
    (ctx) => {
      const storageKey = 'config';

      if (ctx.trigger === 'get') {
        ctx.setSelf(config);
      }

      ctx.onSet((value) => {
        localStorage?.setItem(storageKey, value);
      });
    }
  ]
});

/**
 * App config.
 */
export const AppAuthAtom = atom<any>({
  key: 'auth',
  effects: [
    (ctx) => {
      const storageKey = 'auth';

      if (ctx.trigger === 'get') {
        ctx.setSelf('12312312312323');
      }

      ctx.onSet((value) => {
        localStorage?.setItem(storageKey, value);
      });
    }
  ]
});
