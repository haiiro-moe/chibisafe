import { Roboto_Flex, Roboto_Mono, Roboto_Serif } from 'next/font/google';

export const fontSans = Roboto_Flex({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
	axes: ['GRAD', 'opsz', 'wdth', 'XOPQ', 'XTRA', 'YOPQ', 'YTAS', 'YTUC', 'YTDE', 'YTFI', 'YTLC', 'YTUC', 'slnt']
});

export const fontMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
	weight: 'variable'
});

export const fontHeading = Roboto_Serif({
	subsets: ['latin'],
	variable: '--font-heading',
	display: 'swap',
	axes: ['GRAD', 'opsz', 'wdth']
});
