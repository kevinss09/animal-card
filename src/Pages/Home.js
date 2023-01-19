import React from "react";
import animalData from "../data/animals.json";

export default function Home() {
	const handleClick = (url) => {
		const sound = new Audio(url);
		setTimeout(() => {
			sound.play();
		}, 10);
	};
	return (
		<div className="background bg-cover bg-no-repeat">
			<div className="all z-10">
				<h1 className="text-center text-5xl pt-12 text-white">Animal Card</h1>
				{/* Grid */}
				<div className="mt-8 mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-8 z-10">
					{animalData.map((animal, index) => {
						return (
							<div
								className={`bg-${animal.bgColor}-500 shadow-xl rounded-xl flex items-center justify-center mx-4`}
								key={animal.id}
							>
								{/* left side full of image */}
								<div className="image h-full w-1/2">
									<button
										onClick={() => handleClick(animal.Sound)}
										className="h-full w-full"
									>
										<img
											src={animal.image}
											className="h-full bg-center bg-cover bg-no-repeat rounded-l-xl"
											alt=""
										/>
									</button>
								</div>
								<div className="text h-full w-1/2">
									<div className="mx-6 my-6">
										<h1 className="md:text-4xl text-xl text-center">
											{animal.headText}
										</h1>
										<h4 className="md:text-sm mt-2 text-xs text-center">
											{animal.parText}
										</h4>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
