module.exports = {
	siteMetadata: {
		title: `Mohammed Shahoe: Welcome!`,
		name: `Mohammed Shahoe`,
		siteUrl: `https://novela.narative.co`,
		description: `A platform to publish my thoughts and works with the world!`,
		hero: {
			heading: `Welcome to the platform through which I share my thoughts and works with the world!`,
			maxWidth: 652,
		},
		social: [
			{
				name: `facebook`,
				url: `https://fb.com/mohammedshahoe`,
			},
			{
				name: `twitter`,
				url: `https://twitter.com/MShahoe`,
			},
			{
				name: `github`,
				url: `https://github.com/muyabb`,
			},
			{
				name: `instagram`,
				url: `https://instagram.com/tdm3732`,
			},
			{
				name: `linkedin`,
				url: `https://www.linkedin.com/company/narative/`,
			},
		],
	},
	plugins: [
		{
			resolve: "@narative/gatsby-theme-novela",
			options: {
				contentPosts: "content/posts",
				contentAuthors: "content/authors",
				basePath: "/",
				authorsPage: false,
				sources: {
					local: true,
					// contentful: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Novela by Narative`,
				short_name: `Novela`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/assets/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {},
		},
	],
};
