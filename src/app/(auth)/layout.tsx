
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import {
    ClerkProvider,

} from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] });

import '../globals.css'



export const metadata: Metadata = {
    title: 'Trek Travel - E-Commerce',
    description: 'E-commerce',
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (

        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>

                    {children}
                </body>
            </html>
        </ClerkProvider>

    )
}