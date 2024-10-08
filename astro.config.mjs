// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://courtbetsd.github.io/',
	base: 'CourtBet.Docs.Developers/',
	integrations: [
		starlight({
			title: 'CourtBet.Docs.Developers',
			social: {
				github: 'https://github.com/CourtBetSD/CourtBet.Docs.Developers',
			},
			sidebar: [
				{
					label: 'Developers',
					items: [
						'developers/introduction',
						'developers/developerstandard',
						'developers/branchstrategy',
						'developers/semanticversioningen',
						'developers/semanticversioninges',
						'developers/commitsconventionen',
						'developers/commitsconventiones',
						'developers/databases',
					]
				},
				{
					label: 'Installations',
					autogenerate: { directory: 'installations' },
				}, {
					label: 'Software',
					autogenerate: { directory: 'softwares' },
				}
			],
			credits: true,
			editLink: {
				baseUrl: 'https://github.com/CourtBetSD/CourtBet.Docs.Developers/edit/main/',
			},
		}),
	],
});
