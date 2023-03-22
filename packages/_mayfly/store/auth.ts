import {atom, useRecoilValue} from 'recoil';

type User = {
  name: string;
};

export const CurrentUser = atom<User | null>({
  key: 'CurrentUser',
  dangerouslyAllowMutability: true,
  effects: [
    (ctx) => {
      const storageKey = 'userName';

      if (ctx.trigger === 'get') {
        const userName = localStorage?.getItem(storageKey) || 'test';
        ctx.setSelf({name: userName});
      }

      ctx.onSet((value) => {
        localStorage?.setItem(storageKey, value?.name || '');
      });
    }
  ]
});

export const useCurrentUser = () => {
  const value = useRecoilValue(CurrentUser);
  return value;
};
