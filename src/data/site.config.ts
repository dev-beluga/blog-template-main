interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Israel Fitsum', // Site author
	title: 'Izzy\'s Blog', // Site title.
	description: 'Personal blog about data engineering , ML, web-dev and all interesting projects! ', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 5 // Number of posts per page
}
