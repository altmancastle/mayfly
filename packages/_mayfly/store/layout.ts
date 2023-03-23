import {atom, useRecoilCallback, useRecoilValue} from 'recoil';

type Layout = {
  openSider: boolean;
};

export const LayoutConfig = atom<Layout | null>({
  key: 'LayoutConfig',
  default: {
    openSider: false
  }
});

/**
 * Switches between "light" and "dark" themes.
 */
export function useToggleSider(open?: false) {
  return useRecoilCallback(
    (ctx) => () => {
      ctx.set(LayoutConfig, (prev) =>
        prev?.openSider ? {openSider: false} : {openSider: true}
      );
    },
    []
  );
}

export const useLayoutConfig = () => {
  const value = useRecoilValue(LayoutConfig);
  return value;
};
