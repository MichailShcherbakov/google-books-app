import { useRouter } from "next/router";
import React from "react";

export function useQueryParamsChange(route: string) {
  const router = useRouter();

  const urlCache = React.useRef<string | null>();

  const [isChangeStart, setIsChangeStart] = React.useState(false);
  const [isChangeComplete, setIsChangeComplete] = React.useState(false);

  React.useEffect(() => {
    function routeChangeStartHandler(url: string) {
      if (!url.startsWith(route)) return;

      urlCache.current = url;

      setIsChangeStart(true);
      setIsChangeComplete(false);
    }

    function routeChangeCompleteHandler() {
      if (!urlCache.current || !urlCache.current.startsWith(route)) {
        return;
      }

      setIsChangeStart(false);
      setIsChangeComplete(true);

      urlCache.current = null;
    }

    router.events.on("routeChangeStart", routeChangeStartHandler);
    router.events.on("routeChangeComplete", routeChangeCompleteHandler);

    return () => {
      router.events.off("routeChangeStart", routeChangeStartHandler);
      router.events.off("routeChangeComplete", routeChangeCompleteHandler);
    };
  }, [route, router.events]);

  return {
    isChangeStart,
    isChangeComplete,
  };
}
