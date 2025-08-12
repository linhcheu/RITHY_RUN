declare module "aos" {
  export interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    debounceDelay?: number;
    throttleDelay?: number;
    disable?: boolean | ((width: number) => boolean);
  }
  const AOS: { init: (options?: AOSOptions) => void; refresh: () => void };
  export default AOS;
}
