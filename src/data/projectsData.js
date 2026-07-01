export const PROJECTS_DATA = [
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    tagline: "Distributed Social Networking Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    status: "Production",
    description: "A distributed social platform supporting real-time messaging and presence tracking via WebSockets (ws), achieving sub-100ms message delivery times. Features asynchronous Kafka pipelines, Redis Pub/Sub horizontal scaling, and AI chatbot integration via LangChain.",
    techStack: ["Node.js", "React", "Redis", "Kafka", "PostgreSQL", "Docker"],
    github: "https://github.com/ayushgarg2005/Chat-Application",
    liveDemo: "https://github.com/ayushgarg2005/Chat-Application",
    features: [
      "Built a distributed social platform supporting real-time messaging and presence tracking via WebSockets (ws), achieving sub-100ms message delivery times.",
      "Designed an asynchronous message pipeline using Kafka to decouple data ingestion from PostgreSQL, preventing message loss during backend latency spikes.",
      "Implemented cross-server WebSocket routing and horizontal scaling via Redis Pub/Sub, alongside sliding-window rate limiting to protect API endpoints.",
      "Optimized database performance by caching frequently accessed data in Redis, eliminating N+1 query bottlenecks and heavily reducing PostgreSQL load.",
      "Integrated a Gemini 2.0 Flash AI chatbot via LangChain, utilizing Redis-backed memory for persistent conversation history across service restarts."
    ]
  },
  {
    id: "vingo-food-delivery",
    title: "Vingo Food Delivery Platform",
    tagline: "Multi-Tenant E-Commerce Ecosystem",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    status: "Production",
    description: "A multi-tenant marketplace supporting custom dashboards and distinct business workflows for customers, restaurant owners, and delivery personnel. Features interactive maps, real-time order tracking, and automated media pipelines.",
    techStack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Firebase", "Socket.io", "Leaflet.js", "Cloudinary", "Multer"],
    github: "https://github.com/ayushgarg2005/Vingo-Food-Delivery",
    liveDemo: "https://vingo-food-delivery-nu.vercel.app/",
    features: [
      "Developed a multi-tenant marketplace supporting custom dashboards and distinct business workflows for customers, restaurant owners, and delivery personnel.",
      "Integrated Leaflet.js for interactive mapping, enabling location-based restaurant filtering and accurate delivery tracking interfaces.",
      "Streamlined secure multi-role user onboarding by combining Firebase OAuth with custom JWT-based authorization strategies.",
      "Managed complex frontend application state, including asynchronous cart modifications and global checkouts, utilizing Redux Toolkit.",
      "Configured an automated media upload pipeline utilizing Multer and Cloudinary for optimized storage and delivery of restaurant banners and menu assets.",
      "Integrated Socket.io to enable live order tracking, pushing real-time status updates (e.g., preparing, shipped, delivered) directly to the customer dashboard."
    ]
  },
  {
    id: "course-selling-platform",
    title: "Course-Selling Platform",
    tagline: "Full-Stack E-Commerce Application",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    status: "Production",
    description: "A video course hosting platform allowing instructors to upload content and manage pricing, while providing students with a dedicated storefront for browsing and purchasing. Secured with JWT, RBAC, Zod validation, and rate limiting.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/ayushgarg2005/course-web-development",
    liveDemo: "https://github.com/ayushgarg2005/course-web-development",
    features: [
      "Built a video course hosting platform allowing instructors to upload content and manage pricing, while providing students with a dedicated storefront for browsing and purchasing.",
      "Secured the backend architecture using JWT authentication and custom middleware to enforce strict Role-Based Access Control (RBAC) across protected API routes.",
      "Strengthened backend security by validating API requests with Zod and enforcing rate limiting on authentication routes to reduce brute-force attack risks."
    ]
  }
];
