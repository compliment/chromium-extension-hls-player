var playerUrl = chrome.runtime.getURL('player.htm');

chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		console.log(info);
		if (info.url.indexOf(".m3u8") != -1) {
			var url = playerUrl + "#" + info.url;
			return { redirectUrl: url }
		}
	},
	{urls: ["*://*/*.m3u8*"], types:["main_frame"]},
	["blocking"]
);

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({ 'url': playerUrl + '#' }, function(tab){ });
});