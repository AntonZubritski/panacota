declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.webm' {
  const src: string;
  export default src;
}

type VoidFn = () => void;
type VoidParamFn<T = undefined> = (params: T) => void;
