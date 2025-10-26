interface ContentItem {
  id: string
  title: string
  category: string
  type: "video" | "document" | "website" | "slides"
  icon: string
}

const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "Chemistry Experiment Demonstration Video",
    category: "Science",
    type: "video",
    icon: "🎥",
  },
  {
    id: "2",
    title: "Rescue Physics Lesson",
    category: "Physics",
    type: "document",
    icon: "📄",
  },
  {
    id: "3",
    title: "Crossword Puzzle Generator Features and Options Explained",
    category: "Tools",
    type: "website",
    icon: "🌐",
  },
  {
    id: "4",
    title: "Parasympathetic Nervous System Slides from Costanzo Physiology",
    category: "Biology",
    type: "slides",
    icon: "📚",
  },
  {
    id: "5",
    title: "Visual Explanation of Quantum Entanglement",
    category: "Physics",
    type: "video",
    icon: "🎥",
  },
  {
    id: "6",
    title: "Complete Tauri Course with Rust Basics",
    category: "Programming",
    type: "document",
    icon: "📄",
  },
  {
    id: "7",
    title: "Create a FastAPI Course",
    category: "Programming",
    type: "website",
    icon: "🌐",
  },
  {
    id: "8",
    title: "Floating-Point Representation and IEEE 754 Standard Overview",
    category: "Computer Science",
    type: "document",
    icon: "📄",
  },
  {
    id: "9",
    title: "Recent Papers on Non-target Chemometrics",
    category: "Research",
    type: "slides",
    icon: "📚",
  },
]

export default function ContentGrid() {
  return (
    <section className="w-full py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Discover Content</h2>
          <p className="text-muted-foreground">Explore educational resources across various topics</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Featured", "Research", "Data", "Edu", "Productivity", "Programming"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                category === "Edu"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{item.category}</span>
                <div className="text-muted-foreground group-hover:text-primary transition-colors text-xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-12 text-center">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            Explore more use cases →
          </button>
        </div>
      </div>
    </section>
  )
}
