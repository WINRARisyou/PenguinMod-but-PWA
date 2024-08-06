module.exports = {
	globDirectory: 'build/',
	maximumFileSizeToCacheInBytes: 5000000000,
	globPatterns: [
		'**/*.{js,html,svg,ico,png,webmanifest,txt,mp3,ttf,otf,ogg,wav,cur}'
	],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
