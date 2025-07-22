import Link from "next/link";

export function Footer() {
	return (
		<footer className="mt-6">
			<div className="flex items-center justify-center gap-3 text-center sm:gap-4">
				<Link href="https://substack.com/@0xd669" target="_blank">
					Substack
				</Link>
				<Link href="https://retro.app/@hwang.sh" target="_blank">
					Retro
				</Link>
				<Link href="https://x.com/0xd669" target="_blank">
					X
				</Link>
				<Link href="https://www.linkedin.com/in/0xd669/" target="_blank">
					LinkedIn
				</Link>
				<Link href="https://github.com/0xd669" target="_blank">
					GitHub
				</Link>
			</div>
		</footer>
	);
}
