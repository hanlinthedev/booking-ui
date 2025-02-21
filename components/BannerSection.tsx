interface BannerSectionProps {
	banner: string;
	title: string;
	description: string;
	cta?: React.ReactNode;
	height?: string;
}

export default function BannerSection({
	banner,
	title,
	description,
	cta,
	height,
}: BannerSectionProps) {
	return (
		<section
			className={`relative w-full  flex items-center justify-center ${
				height || "h-screen"
			}`}
		>
			<div
				className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
				style={{
					backgroundImage: `url(${banner})`,
				}}
			/>
			<div className="absolute inset-0 bg-black/30" />
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-bold mb-4">{title}</h1>
				<p className="text-xl mb-8">{description}</p>
				{cta}
			</div>
		</section>
	);
}
