globalThis.fallback = "DIRECT";

globalThis.proxies = [
	"PROXY 127.0.0.1:8080; SOCKS5 127.0.0.1:8080"
];

globalThis.rules = {
	"net-square.com": 0,
	
};

function FindProxyForURL(url, host) {
	let pos = 0;

	while (pos >= 0) {
		const i = rules[host];
		if (i !== undefined) {
			return proxies[i];
		}
		pos = host.indexOf(".");
		host = host.slice(pos + 1);
	}

	return globalThis.fallback;
}
