import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

import { Footer } from "./footer";
import "./globals.css";

export const runtime = "edge";

const pretendard = localFont({
	src: "./Pretendard Variable.woff2",
	display: "swap",
	weight: "45 920",
	variable: "--font-pretendard",
	fallback: [
		"-apple-system",
		"BlinkMacSystemFont",
		"system-ui",
		"Roboto",
		"Helvetica Neue",
		"Segoe UI",
		"Apple SD Gothic Neo",
		"Noto Sans KR",
		"Malgun Gothic",
		"Apple Color Emoji",
		"Segoe UI Emoji",
		"Segoe UI Symbol",
		"sans-serif",
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ko" className={pretendard.variable} suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="mx-auto flex min-h-dvh flex-col justify-between p-8">
						{children}
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
				<GoogleAnalytics
					gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
				/>
			</body>
		</html>
	);
}
