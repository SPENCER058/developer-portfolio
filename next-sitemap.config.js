/** @type {import('next-sitemap').IConfig} */
const isPreview = process.env.BLOCK_ROBOTS === 'true'

module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    generateIndexSitemap: true,
    exclude: isPreview ? ['/**'] : [],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: isPreview ? '/' : '',
            },
        ],
    },
}
