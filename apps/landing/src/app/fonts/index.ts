// import localFont from 'next/font/local';
import { DM_Sans, Inter, Sen } from 'next/font/google';


// export const corsa = localFont({
//     src: [
//         {
//             path: './Corsa-Grotesk-Bold.otf',
//             weight: '700',
//             style: 'normal',
//         },
//     ],
//     variable: '--font-corsa',
// });

export const inter = Inter({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-inter',
});
export const sen = Sen({
    weight: ['400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-sen',
});
export const dmsans = DM_Sans({
    weight: ['300', '400', '700'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-dmsans',
});