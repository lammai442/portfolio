import { TbBrandJavascript } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaReact } from 'react-icons/fa';
import { FaPeopleLine } from 'react-icons/fa6';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { MdOutlineWorkOutline } from 'react-icons/md';
import myMovieDatabase from '../assets/webpages/my-movie-database.png';
import bonzAi from '../assets/webpages/bonz-ai.png';
import catchingPokemons from '../assets/webpages/catching-pokemon.png';
export const mobileProjects = [
	{
		desc: `Where it's @ är en frontend-applikation byggd i React där användare kan upptäcka och köpa biljetter till lokala musikevenemang.`,
		additionalDesc:
			'Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.',
		url: 'https://where-it-is-ticket-app.vercel.app/',
		title: `Where it's @`,
		tech: ['JavaScript', 'HTML', 'CSS', 'React', 'Figma', 'Git', 'VScode'],
		git: 'https://github.com/lammai442/where-it-is-ticket-app',
	},
	{
		desc: 'Detta projekt är en mobilanpassad webbapplikation där användare kan beställa mat från foodtrucks, se uppskattad leveranstid och bläddra bland tidigare beställningar. Applikationen innehåller även en administratörsvy där det är möjligt att redigera menyn.',
		additionalDesc:
			'Projektet är en del av en frontendutbildning och tillsammans med tre andra utvecklare har vi skapat appen med fokus på användarvänlighet och tydlig struktur.',
		url: 'https://lammai442.github.io/yumyum-gimme-sum/',
		title: 'Yum Yum Gimmie Sum',
		tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'Agilt', 'VScode'],
		git: 'https://github.com/lammai442/yumyum-gimme-sum',
	},
];

export const webProjects = [
	{
		desc: `Movie database`,
		additionalDesc:
			'Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.',
		webUrl: 'https://lammai442.github.io/my-movie-database/',
		title: `My Movie Database`,
		tech: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'VScode', 'API'],
		git: 'https://lammai442.github.io/my-movie-database/',
		webPageImg: myMovieDatabase,
	},
	{
		desc: `Catching pokemon`,
		additionalDesc:
			'Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.',
		webUrl: 'https://lammai442.github.io/catching-pokemons/',
		title: `Catching Pokemons`,
		tech: ['JavaScript', 'HTML', 'CSS', 'Git', 'VScode'],
		git: 'https://github.com/lammai442/catching-pokemons.git',
		webPageImg: catchingPokemons,
	},
	{
		desc: `Bonz AI`,
		additionalDesc:
			'Projektet har utvecklats av mig från grunden. Jag har lagt fokus på att skapa en användarvänlig upplevelse med tydlig struktur och responsiv design.',
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
		icon: MdOutlineWorkOutline,
		title: 'Arbetskonsulent',
		subtitle: 'Karlstad kommun',
		content: 'sadasdasdasdasdad',
		fromDate: 'Maj 2020',
		toDate: 'Apr 2021',
		iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
	},
	{
		id: '2',
		icon: MdOutlineWorkOutline,
		title: 'Arbetskonsulent',
		subtitle: 'Karlstad kommun',
		content: 'sadasdasdasdasdad',
		fromDate: 'Maj 2020',
		toDate: 'Apr 2021',
		iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
	},
	{
		icon: MdOutlineWorkOutline,
		content: 'sadasdasdasdasdad',
		fromDate: 'Maj 2020',
		toDate: 'Apr 2021',
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
