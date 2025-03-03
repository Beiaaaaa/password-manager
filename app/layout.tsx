import { Toaster } from "react-hot-toast";
import type { Metadata, Viewport } from 'next'
import "./background.css"; // 引入 CSS
import './globals.css'
import { TooltipProvider } from "@/components/ui/tooltip";

export const viewport: Viewport = {
    themeColor: 'black',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
}

export const metadata: Metadata = {
    title: 'Password Manager | Secret Garden ',
    description: 'A Next.js 14 password manager developed by Eyes Big Head.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="background-container">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>
                        <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
                        alt="Moon"
                        className="moon"
                        />
                </div>
                <Toaster />
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </body>
        </html>
    )
}
