import { notFound, permanentRedirect } from "next/navigation";

const prevBlogSlugs = [
	"always-startup",
	"an-essential-experience",
	"grounded",
	"motivation-behind-the-startup",
	"startup-vs-giants",
	"the-mindset-for-early-stage-founders",
	"when-either-a-or-b-fails",
	"working-remote-is-hard",
];

const additionalRedirectMap: Record<string, string> = {
	"%EA%B2%B0%EA%B5%AD+%EB%8B%A4+%EC%97%AD%EB%9F%89%EC%9D%98+%EB%AC%B8%EC%A0%9C":
		"when-either-a-or-b-fails",
};

export default async function BlogPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const targetSlug =
		additionalRedirectMap[slug] ?? (prevBlogSlugs.includes(slug) ? slug : null);

	if (targetSlug) {
		permanentRedirect(`https://0xd669.substack.com/p/${targetSlug}`);
	}

	notFound();
}
