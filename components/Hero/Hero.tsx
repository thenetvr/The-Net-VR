export default function Hero() {
  return (
    <div className="flex flex-col py-4 px-10 gap-6 md:flex-row items-center">
      <div className="py-4 w-full md:w-1/2">
        <p className="text-center md:text-left">Welcome to the party</p>
        <div className="py-2">
          <h1 className="uppercase text-6xl font-bold text-center md:text-left md:text-8xl">
            Join the
          </h1>
          <h1 className="uppercase text-6xl font-bold text-center md:text-left md:text-8xl">
            club
          </h1>
        </div>
        <p className="py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          accusamus praesentium at nesciunt aliquam, rerum non sapiente ut eaque
          quasi et totam. Voluptatibus quo quas officia sequi. Labore, ab
          laudantium.
        </p>
        <div className="flex items-center gap-8">
          <button className="bg-red-800 rounded text-white p-5">
            Get In touch
          </button>
          <div>
            <h1 className="font-bold">FB - INST - TW</h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          className="rounded"
          src="https://assets-global.website-files.com/62f35224774781301ab36d72/62f66d0b270e0c5fb4112e28_Rectangle%2013%20(1)-p-500.jpg"
          alt="test"
        />
      </div>
    </div>
  );
}
