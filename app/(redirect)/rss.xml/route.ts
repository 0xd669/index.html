import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export async function GET() {
	permanentRedirect("https://0xd669.substack.com/feed");
}
