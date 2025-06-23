import React from 'react';

interface InfoSection {
  title: string;
  content: string;
}

interface Character {
  id: string;
  name: string;
  title: string;
  bio: string;
  videoUrl: string;
  backgroundColor: string;
  personalInfo: InfoSection;
  challenges: InfoSection;
  successes: InfoSection;
  mistakes: InfoSection;
  application: InfoSection;
}

interface CharacterSectionProps {
  character: Character;
}

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
    {children}
  </div>
);

const DetailSection: React.FC<{ section: InfoSection }> = ({ section }) => (
  <div className="mb-6">
    <h4 className="text-lg font-bold font-serif mb-2">{section.title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
  </div>
);

const CharacterSection: React.FC<CharacterSectionProps> = ({ character }) => {
  return (
    <section 
      id={character.id} 
      className="py-20 overflow-hidden" 
      style={{ backgroundColor: character.backgroundColor }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="w-full">
            <video
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              src={character.videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-100 absolute -top-24 left-0 -z-10 font-serif select-none">{character.name}</h1>
            <h2 className="text-5xl font-bold mb-2 font-serif">{character.name}</h2>
            <h3 className="text-xl font-semibold text-gray-500 mb-6 font-serif">{character.title}</h3>
            
            <DetailSection section={character.personalInfo} />
            <DetailSection section={character.challenges} />
            <DetailSection section={character.successes} />
            <DetailSection section={character.mistakes} />
          </div>
        </div>
        <div className="pt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">{character.application.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{character.application.content}</p>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection; 