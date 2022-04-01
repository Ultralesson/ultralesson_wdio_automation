const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
        user: process.env.BROWSERSTACK_USERNAME,
        key: process.env.BROWSERSTACK_ACCESS_KEY,
        services: ['browserstack'],

        capabilities: [
            {
                maxInstances: 5,
                browserName: 'chrome',
                browserVersion: 'latest',
                platformName: 'Windows 10',
                'goog:chromeOptions': {
                }
            }
        ]

    }
}