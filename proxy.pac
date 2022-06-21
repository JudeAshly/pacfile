globalThis.fallback = "DIRECT";

globalThis.proxies = [
	"SOCKS5 localhost:2080"
];

globalThis.rules = {
	"bing.com": 0,
	
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
