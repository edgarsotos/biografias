import Header from '@/components/Header';
import CharacterSection from '@/components/CharacterSection';
import characters from '@/data/characters.json';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Header />
      <div className="pt-16">
        {characters.map((character, index) => (
          <CharacterSection key={character.id} character={character} />
        ))}
      </div>
      <footer id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">Contact Me</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Feel free to reach out for collaborations or just a friendly hello! I'll do my best to get back to you.</p>
            <a href="mailto:hello@example.com" className="font-bold border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300 font-serif tracking-widest">
                GET IN TOUCH
            </a>
        </div>
      </footer>
    </main>
  );
}
