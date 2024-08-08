import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#F3F3FB' }}>
      <nav className="w-full flex h-9 flex-row justify-between items-center py-8 px-28 bg-transparent hover:bg-white hover:shadow-md transition-all duration-300">
        <a href="#about" className="text-xl text-black font-sans font-bold hover:text-violet-600">TK</a>
        <div className="flex space-x-4">
          <a href="#about" className="text-lg font-sans text-black hover:text-violet-600 ">Project</a>
          <a href="#about" className="text-lg font-sans text-black hover:text-violet-600 ">About</a>
          <a href="#contact" className="text-lg font-sans text-black hover:text-violet-600">Contact</a>
        </div>
      </nav>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl text-black font-blacker font-light">Hello, this is Thoriq</h1>
      </div>
    </main>
  );
}