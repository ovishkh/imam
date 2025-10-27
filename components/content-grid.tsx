interface ContentItem {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'document' | 'website' | 'slides';
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'Biographical Explorer',
    category: 'Islamic Studies',
    type: 'website',
    icon: '👤',
  },
  {
    id: '2',
    title: 'Content Analyzer',
    category: 'Knowledge Tools',
    type: 'website',
    icon: '🧩',
  },
  {
    id: '3',
    title: 'Isnad Visualization',
    category: 'Hadith Studies',
    type: 'website',
    icon: '🔗',
  },
  {
    id: '4',
    title: 'Quran Explorer',
    category: 'Quranic Studies',
    type: 'website',
    icon: '📖',
  },
  {
    id: '5',
    title: 'Knowledge Web',
    category: 'Research',
    type: 'website',
    icon: '🌐',
  },
  {
    id: '6',
    title: 'Hadith Authenticator',
    category: 'Hadith Studies',
    type: 'website',
    icon: '✅',
  },
  {
    id: '7',
    title: 'Daily Practice Guide',
    category: 'Lifestyle',
    type: 'website',
    icon: '📅',
  },
  {
    id: '8',
    title: 'Fiqh Navigator',
    category: 'Islamic Jurisprudence',
    type: 'website',
    icon: '⚖️',
  },
];

export default function ContentGrid() {
  return (
    <section className='w-full py-12 px-4 bg-background'>
      <div className='max-w-7xl mx-auto'>
        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {[
            'All',
            'Islamic Studies',
            'Quranic Studies',
            'Hadith Studies',
            'Research',
            'Lifestyle',
          ].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                category === 'Edu'
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {contentItems.map((item) => (
            <div
              key={item.id}
              className='group p-10 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer'
            >
              <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2'>
                  {item.title}
                </h3>
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-border'>
                <span className='text-sm text-muted-foreground'>
                  {item.category}
                </span>
                <div className='text-muted-foreground group-hover:text-primary transition-colors text-xl'>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className='mt-12 text-center'>
          <button className='text-primary hover:text-primary/80 transition-colors font-medium'>
            Explore more Features →
          </button>
        </div>
      </div>
    </section>
  );
}
