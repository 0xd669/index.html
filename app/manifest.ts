import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "hwang.sh",
		short_name: "hwang",
		description: "황성현의 블로그",
		start_url: "/",
		display: "standalone",
		background_color: "#FFFFFF",
		theme_color: "#09090b",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
