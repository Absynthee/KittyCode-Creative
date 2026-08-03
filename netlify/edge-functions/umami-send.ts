import type { Context } from "https://edge.netlify.com";

// Proxies the Umami beacon (/kc/api/send -> gateway.umami.is/api/send) so it
// stays a first-party request that hostname-matching blockers can't drop.
//
// A plain _redirects proxy won't work: Umami Cloud reads `cf-connecting-ip`,
// which would be Netlify's egress IP, putting every hit in the proxy's
// datacenter. It checks `x-umami-client-ip` above that, so injecting the real
// visitor IP there fixes geolocation. See src/lib/ip.ts in umami-software/umami.
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
