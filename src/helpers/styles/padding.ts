type TPaddingValue = string | number;

type TPaddingsHorizontal<T = TPaddingValue> = { paddingLeft: T; paddingRight: T };
type TPaddingsVertical<T = TPaddingValue> = { paddingTop: T; paddingBottom: T };

type TGetPadding<R, T = TPaddingValue> = (val: T) => R;

export const getPaddingHorizontal: TGetPadding<TPaddingsHorizontal> = val => ({
  paddingLeft: val,
  paddingRight: val,
});

export const getPaddingVertical: TGetPadding<TPaddingsVertical> = val => ({
  paddingTop: val,
  paddingBottom: val,
});
