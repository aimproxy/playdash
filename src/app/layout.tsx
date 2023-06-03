import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function RootLayout(props: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="bg-stone-50 w-full min-h-screen">
            <div className="py-6 px-4 sm:px-6 max-w-7xl mx-auto">
                {props.children}
            </div>
        </div>
        </body>
        </html>
    )
}
