import Museum from "../assets/images/science musiem.png"
import Coffe from "../assets/images/coffee.png"
import bg from "../assets/images/backgroundImage.png"

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

interface EventCard {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface EventHighlights {
  title: string;
  description: string;
  image: string;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  timeAgo: string;
}

export const cultureHeroSection = [
    {
        title:"Culture & Lifestyle",
        description: "Addis Ababa is where tradition meets transformation — a city alive with stories, rhythm, and creativity. Explore how the people, culture, and way of life blend heritage and modern energy into a truly unique experience.",
    }
]

export const TraditionAspiresData = [
    {
        title:"Tradition That Aspires",
        description:"With the growing recognition of the tourism sector’s potential, it was separated from the cultural division and reorganized with dedicated human resources from the former Trade and Industry office. This restructuring aimed to provide focused leadership, coordination, and development of tourism activities across the city. Today, the Bureau actively works to enhance Addis Ababa’s appeal as a destination by promoting its historical sites, urban experiences, cultural landmarks, and hospitality services. It also collaborates with stakeholders to improve tourism infrastructure, ensure quality service delivery, and create policies that support sustainable and inclusive tourism development."
    }
]

export const ModernLifeData = [
    {
        title:"Modern Life, Ethiopian Spirit",
        description:"Sed tincidunt quis amet ut. Augue et pellentesque quis sit tempus placerat vitae. Nunc potenti donec blandit quis sit. Faucibus purus odio sit massa id. Dolor quis mauris nisi mauris. Cras suspendisse mi tempus elementum proin nibh et elit. Mollis euismod cras in diam pretium etiam.",
        image: Museum
    }
]


export const CultureCoffeData = [
    {
        title:"Coffee & Culinary Culture",
        description:"The traditional coffee ceremony is the soul of Ethiopian culture — a ritual of friendship, patience, and respect. Beans are roasted fresh, ground by hand, and brewed three times in a jebena pot. Guests are invited to slow down, share stories, and savor each cup — because coffee in Ethiopia isn’t just a drink, it’s a moment of connection.”",
        image: Coffe
    }
]

export const Etiquette = [
  {
    title: "Hospitality And Invitations",
    description:"If you’re invited to someone’s home, it’s an honor. Bring a small gift like fruit, coffee, or biscuits — it’s a kind gesture. You’ll likely be offered coffee or food; it’s polite to accept, even just a little. Expect the traditional “Coffee Ceremony” — a social ritual that symbolizes friendship and respect.",
    tip:"When leaving, thank your host warmly — “Amesegenallo” — and show genuine appreciation for their time.",
    image: bg
  },
    {
    title: "Religious And Cultural Respect",
    description:"Addis Ababa is a city of faith — home to Orthodox Christians, Muslims, and other communities living side by side. When visiting churches, mosques, or holy sites, dress modestly and behave calmly. Photography inside sacred spaces is often restricted, so always ask permission first.",
    tip:"Avoid loud conversation or phone use in religious spaces — silence shows reverence.",
    image: bg
  },
    {
    title: "Dress Code And Conduct",
    description:"Addis is modern but modest. Revealing clothing is generally avoided in public or religious areas. For casual outings, dress neatly — appearance reflects respect. Drinking is acceptable, but excessive behavior or public intoxication is frowned upon.",
    tip:"A smile and calm tone go further than confrontation — Ethiopians value patience and respect.",
    image: bg
  },
    {
    title: "Social Interaction",
    description:"Ethiopians are conversational and value genuine connections. Small talk often begins with family, work, or the weather. Time moves slower here conversations aren’t rushed. Respect for elders is deeply ingrained; address them with polite language and listen more than you speak.",
    tip:"Public displays of affection are uncommon. Keep interactions polite and friendly.",
    image: bg
  }
]

  export const allEvents: EventCardProps[] = [
    {
      id: 1,
      title: "Tech Innovations 2024",
      description: "Dive into the future of technology at our annual conference! Explore groundbreaking advancements, attend expert panels, and network with industry leaders.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
      category: "Business"
    },
    {
      id: 2,
      title: "Adventure Weekend Retreat",
      description: "Escape the city and reconnect with nature! Join guided hikes, rock climbing, and campfire storytelling under the stars. Perfect for adventure seekers.",
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop",
      category: "Sports"
    },
    {
      id: 3,
      title: "City Art Gallery Opening",
      description: "Celebrate creativity at our gallery opening event! Featuring local artists, live art demonstrations, and a chance to purchase unique pieces.",
      image: "https://images.unsplash.com/photo-1572965733194-784e4b4efa45?q=80&w=2070&auto=format&fit=crop",
      category: "Cultural"
    },
    {
      id: 4,
      title: "Summer Music Fest",
      description: "Join us for a day filled with rhythm and fun! Enjoy live performances from local bands, food trucks serving delicious eats, and activities for the whole family.",
      image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop",
      category: "Music"
    },
    {
      id: 5,
      title: "Gourmet Food Fair",
      description: "Experience a culinary journey with top chefs from around the world. Taste exquisite dishes and learn new cooking techniques.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
      category: "Food"
    },
    {
      id: 6,
      title: "Mountain Biking Challenge",
      description: "Test your limits on the rugged trails of the mountain biking challenge. Open to amateurs and professionals alike.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop",
      category: "Sports"
    },
    {
      id: 7,
      title: "Modern Art Showcase",
      description: "An exclusive look at modern art pieces that challenge the status quo. Meet the artists and discuss their inspirations.",
      image: "https://images.unsplash.com/photo-1533559662493-24208a8e3196?q=80&w=2070&auto=format&fit=crop",
      category: "Cultural"
    },
    {
      id: 8,
      title: "Jazz in the Park",
      description: "Relax efficiently with smooth jazz under the open sky. Bring a blanket and enjoy the evening with friends and family.",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=2070&auto=format&fit=crop",
      category: "Music"
    }
  ];


  export const events: EventCard[] = [
    {
      id: 1,
      date: "January 12, 2025",
      title: "EXPLORE THE NATIONAL MUSEUM",
      description: "Discover the rich history of Ethiopia. A journey through time blending the charm of ancient history with the pulse of modern life.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2942&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "January 12, 2025",
      title: "EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE",
      description: "A hot air balloon ride in Addis offers a breathtaking panoramic view of Ethiopia's capital, blending the charm of ancient history with the pulse of modern life below.",
      image: "https://images.unsplash.com/photo-1568526381923-caf3fd520382?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "January 12, 2025",
      title: "TASTE THE FLAVORS OF ETHIOPIA",
      description: "Immerse yourself in a culinary journey. Experience the traditional injera and spicy wats that define the local delicious cuisine.",
      image: "https://images.unsplash.com/photo-1572888195250-3037a59d3578?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      date: "January 12, 2025",
      title: "TASTE THE FLAVORS OF ETHIOPIA",
      description: "Immerse yourself in a culinary journey. Experience the traditional injera and spicy wats that define the local delicious cuisine.",
      image: "https://images.unsplash.com/photo-1573404353091-bd68e3010d73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

export const EventHighlights: EventHighlights[] = [
    {
      title: "Tech Innovations 2024",
      description: "Dive into the future of technology at our annual conference! Explore groundbreaking advancements, attend expert panels, and network with industry leaders.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Adventure Weekend Retreat",
      description: "Escape the city and reconnect with nature! Join guided hikes, rock climbing, and campfire storytelling under the stars.",
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "City Art Gallery Opening",
      description: "Celebrate creativity at our gallery opening event! Featuring local artists, live art demonstrations, and a chance to purchase unique pieces.",
      image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "Summer Music Fest",
      description: "Join us for a day filled with rhythm and fun! Enjoy live performances from local bands, food trucks serving delicious eats, and activities for the family.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop"
    }
];

export const featuredStory: Story = {
  id: 1,
  title: "Climate Change: A Global Challenge",
  description: "Discover the impacts of climate change and what actions are being taken globally.",
  image: "https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  timeAgo: "15 Minutes Ago"
};

export const sideStories: Story[] = [
  {
    id: 2,
    title: "Climate Change: A Global Challenge",
    description: "Discover the impacts of climate change and what actions are being taken globally.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop", 
    timeAgo: "15 Minutes Ago"
  },
  {
    id: 3,
    title: "Climate Change: A Global Challenge",
    description: "Discover the impacts of climate change and what actions are being taken globally.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop", 
    timeAgo: "15 Minutes Ago"
  },
  {
    id: 4,
    title: "Climate Change: A Global Challenge",
    description: "Discover the impacts of climate change and what actions are being taken globally.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    timeAgo: "15 Minutes Ago"
  }
];


export const articles = [
  {
    id: 1,
    title: "Breaking: Major Earthquake Strikes City",
    desc: "Residents are advised to stay indoors as emergency services respond to the situation.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
    time: "1 Hour Ago"
  },
  {
    id: 2,
    title: "Tech Innovations to Watch in 2024",
    desc: "Explore the most exciting technological advancements expected to shape the future.",
    image: "https://images.unsplash.com/photo-1542665952-14513db15293?auto=format&fit=crop&q=80&w=800",
    time: "30 Minutes Ago"
  },
  {
    id: 3,
    title: "Tech Innovations to Watch in 2024",
    desc: "Explore the most exciting technological advancements expected to shape the future.",
    image: "https://plus.unsplash.com/premium_photo-1661421687248-7bb863c60723?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: "30 Minutes Ago"
  },
  {
    id: 4,
    title: "Climate Change: A Global Challenge",
    desc: "Discover the impacts of climate change and what actions are being taken globally.",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&q=80&w=800",
    time: "15 Minutes Ago"
  },
  {
    id: 5,
    title: "Update: Local Team Claims Championship",
    desc: "Celebrate the victory of our local team as they clinch the championship title!",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
    time: "10 Minutes Ago"
  },
  {
    id: 6,
    title: "Update: Local Team Wins Title",
    desc: "Celebrate the victory of our local team as they clinch the championship title!",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
    time: "10 Minutes Ago"
  }
];