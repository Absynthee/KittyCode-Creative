import type { Context } from "https://edge.netlify.com";

// Proxies the Umami beacon (/kc/api/send -> gateway.umami.is/api/send) at the
// edge so it stays a first-party request (blockers matching the umami.is
// hostname can't drop it), while fixing geolocation.
//
// A plain _redirects proxy can't do this: the request reaches Umami from
// Netlify's egress IP, and Umami Cloud (behind Cloudflare) reads `cf-connecting-ip`
// — which is Netlify, not the visitor — so every hit lands in the proxy's
// datacenter. Umami Cloud checks `x-umami-client-ip` ABOVE `cf-connecting-ip`
// in its IP precedence list, so injecting the real visitor IP there makes it
// geolocate the actual visitor. See src/lib/ip.ts in umami-software/umami.
const UMAMI_COLLECT = "https://gateway.umami.is/api/send";

export default async (request: Request, context: Context) => {
  const headers = new Headers(request.headers);

  // Drop the inbound Host so fetch targets gateway.umami.is, not our domain.
  headers.delete("host");

  const clientIp =
    context.ip || request.headers.get("x-nf-client-connection-ip") || "";
  if (clientIp) headers.set("x-umami-client-ip", clientIp);

  // Buffer the (small JSON) body rather than streaming it, to avoid the
  // half-duplex fetch requirement in the edge runtime.
  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

  return fetch(UMAMI_COLLECT, { method: request.method, headers, body });
};

export const config = { path: "/kc/api/send" };
