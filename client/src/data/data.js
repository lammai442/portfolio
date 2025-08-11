import { TbBrandJavascript } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaReact } from 'react-icons/fa';
import { FaPeopleLine } from 'react-icons/fa6';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoSchoolOutline } from 'react-icons/io5';
import myMovieDatabase from '../assets/webpages/my-movie-database.png';
import bonzAi from '../assets/webpages/bonz-ai.png';
import catchingPokemons from '../assets/webpages/catching-pokemon.png';
export const mobileProjects = [
	{
		desc: `Where it's @ är en frontend-applikation byggd i React där användare kan upptäcka och köpa biljetter till lokala musikevenemang. \n\nProjektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.`,
		url: 'https://where-it-is-ticket-app.vercel.app/',
		title: `Where it's @`,
		tech: ['JavaScript', 'HTML', 'CSS', 'React', 'Figma', 'Git', 'VScode'],
		git: 'https://github.com/lammai442/where-it-is-ticket-app',
	},
	{
		desc: `Detta projekt är en mobilanpassad webbapplikation där användare kan beställa mat från foodtrucks, se uppskattad leveranstid och bläddra bland tidigare beställningar. Applikationen innehåller även en administratörsvy där det är möjligt att redigera menyn. \n\nProjektet är en del av en frontendutbildning och tillsammans med tre andra utvecklare har vi skapat appen med fokus på användarvänlighet och tydlig struktur.`,
		url: 'https://lammai442.github.io/yumyum-gimme-sum/',
		title: 'Yum Yum Gimmie Sum',
		tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'Agilt', 'VScode'],
		git: 'https://github.com/lammai442/yumyum-gimme-sum',
	},
];

export const webProjects = [
	{
		desc: `Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.`,
		webUrl: 'https://lammai442.github.io/my-movie-database/',
		title: `My Movie Database`,
		tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'VScode', 'API'],
		git: 'https://lammai442.github.io/my-movie-database/',
		webPageImg: myMovieDatabase,
	},
	{
		desc: `Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.`,
		webUrl: 'https://lammai442.github.io/catching-pokemons/',
		title: `Catching Pokemons`,
		tech: ['JavaScript', 'HTML', 'CSS', 'Git', 'VScode'],
		git: 'https://github.com/lammai442/catching-pokemons.git',
		webPageImg: catchingPokemons,
	},
	{
		desc: `Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.`,
		webUrl: 'https://lammai442.github.io/bonz-ai/',
		title: `Bonz.AI`,
		tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'VScode'],
		git: 'https://github.com/lammai442/bonz-ai.git/',
		webPageImg: bonzAi,
	},
];

export const TimeLineData = [
	{
		id: '1',
		icon: IoSchoolOutline,
		title: 'Webbutvecklare',
		subtitle: 'Folkuniversitetet Göteborg',
		content: `Utbildning till webbutvecklare. \nUtbildningens innehåll:
		Arbeta agilt , Backend med Node.js , React, TypeScript, HTML & CSS, JavaScript, LIA, Driftsättning i molnmiljö och UX/UI \n\n Studeranderepresentant för klassen och deltar i programmets ledningsgruppsmöten, där jag förmedlar klassens synpunkter och bidrar till utbildningens utveckling.`,
		date: 'Augusti 2024 - Pågående',
		iconStyle: {
			background: 'var(--primary-btn-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '2',
		icon: MdOutlineWorkOutline,
		title: 'Arbetskonsulent',
		subtitle: 'Karlstads kommun',
		content: `Projektledare för utbildningskontrakt med ansvar för totalt 75 personer där jag hjälpte unga vuxna att studera upp sina gymnasiebetyg genom stöd och handledning. \n
		Ansvarig för utskick av nyhetsbrev, digital information på Karlstad.se samt startade webbinar på Jobbcenter med veckovisa sändningar.`,
		date: '2017 - 2025/tjänstledig',
		iconStyle: {
			background: 'var(--accent-bg-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '3',
		icon: MdOutlineWorkOutline,
		title: 'Mai foto – Eget företag',
		subtitle: 'Karlstads kommun',
		content: `Egna företaget Mai foto som inriktade på foto av familjer/parporträtt och filmproduktion med bas i Karlstad.`,
		date: '2013 - 2017',
		iconStyle: {
			background: 'var(--accent-bg-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '4',
		icon: MdOutlineWorkOutline,
		title: 'e-Social – Eget företag',
		subtitle: 'Karlstads kommun',
		content: `Egna företaget e-Social där vi inriktade oss mot privat- och gruppkurser inom digitala prylar som iPad, iPhone, Win 8, Androidtelefoner osv. `,
		date: '2013 - 2017',
		iconStyle: {
			background: 'var(--accent-bg-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '5',
		icon: MdOutlineWorkOutline,
		title: 'Integrationshandledare',
		subtitle: 'Kils kommun',
		content: `Ansvar för introduktion av nyanlända ungdomar och stödja dem i deras integration i samhället. \n\nSamarbeta med myndigheter och andra samarbetspartners som kan vara aktuella. `,
		date: '2016 - 2017',
		iconStyle: {
			background: 'var(--accent-bg-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '6',
		icon: MdOutlineWorkOutline,
		title: 'Integrationshandledare',
		subtitle: 'Karlstads kommun',
		content: `Arbetade som lärarvikarie från årskurs 3 till 9 i grundskolan. Utför den ordinarie lärarens planering och rapporterar.
		\nVikarierat inom alla skolämnen, från svenska, matematik, syslöjd, till idrott. `,
		date: '2016 - 2017',
		iconStyle: {
			background: 'var(--accent-bg-color)',
			color: 'var(--white-text-color)',
		},
	},
	{
		id: '7',
		icon: IoSchoolOutline,
		title: 'Lärarexamen inom idrott & media',
		subtitle: 'GIH Örebro universitet / Uppsala universitet',
		content: `Under utbildningen utvecklade jag en stark pedagogisk grund, ämnesdidaktik och kunskap i att planera och genomföra undervisning utifrån läroplanens mål. 
		\nJag fördjupade mig särskilt i sambandet mellan fysisk aktivitet och lärande, samt hur media kan användas kreativt i undervisning.`,
		date: '2008 - 2014',
		iconStyle: {
			background: 'var(--primary-btn-color)',
			color: 'var(--white-text-color)',
		},
	},
];

export const iconMap = {
	JavaScript: TbBrandJavascript,
	HTML: FaHtml5,
	CSS: FaCss3Alt,
	Figma: FaFigma,
	Git: FaGithub,
	Agilt: FaPeopleLine,
	VScode: BiLogoVisualStudio,
	React: FaReact,
	API: TbApi,
};

export const navItems = [
	{
		text: 'Projekt',
		ref: 'project',
	},
	{
		text: 'Erfarenheter',
		ref: 'experience',
	},
	{
		text: 'Hobbyprojekt',
		ref: 'hobbieproject',
	},
	{
		text: 'Kontakt',
		ref: 'contact',
	},
];

export const hobbyProjects = [
	{
		url: [
			'https://www.youtube.com/embed/hVmWIBVKBa8?si=MomyBTDbEZPz2yMK',
			'https://www.youtube.com/embed/LIYX7OQBpII?si=SgNo3Z7tKmBOJ5T8',
			'https://www.youtube.com/embed/mSomucajWoM?si=hQzLTTUaOc7Z_ffF',
			'https://www.youtube.com/embed/UpqL-yCir9I?si=DUGbNH9yvO_ujVpb',
		],
		desc: 'Jag och min dotter älskar att hitta på skämtvideos tillsammans – ett sätt för oss att både ha kul och sprida glädje! \nMed humor, lekfullhet och lite tokigheter delar vi små stunder som får både oss och andra att skratta.',
	},
];

export const hobbyProject = [{}];
