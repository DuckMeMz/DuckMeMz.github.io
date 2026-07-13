export const projectGroups = [
  {
    id: "featured-work",
    eyebrow: "Highlights",
    title: "Featured work",
    description:
      "Shipped gameplay work and an interactive Formula 1 replay tool.",
    slugs: ["samsara", "pitwall"],
  },
  {
    id: "selected-projects",
    eyebrow: "Selected projects",
    title: "Additional projects",
    description:
      "Client-facing Unreal work and a low-level 3D renderer on PS4.",
    slugs: ["heart-garden", "low-level-3d-renderer"],
  },
];

export const projects = [
  {
    slug: "samsara",
    title: "Samsara",
    subtitle: "Tiryag Charger Enemy",
    category: "Featured work",
    role: "Freelance Gameplay Programmer",
    summary:
      "I built the Tiryag Charger, a tank-style enemy for Samsara, during an Unreal Engine bootcamp. I was then hired as a freelance programmer to continue developing the feature through to release.",
    cardSummary:
      "Built a tank-style enemy for the shipped Unreal Engine title Samsara, turning a design brief into a playable combat feature. The work led to paid freelance programming on the project.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Samsara/Tiryag Fight Thumbnail.mp4",
      poster: "docs/assets/posters/samsara.jpg",
      label: "Samsara Tiryag Charger gameplay clip",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/3X2yw45nOrg?si=BXS8GoWgj7rtKcN3",
      label: "Samsara Tiryag Charger demo fight",
    },
    links: [
      {
        label: "Steam page",
        href: "https://store.steampowered.com/app/1683570/Samsara/",
      },
    ],
    cardActions: [
      {
        label: "Steam page",
        href: "https://store.steampowered.com/app/1683570/Samsara/",
      },
    ],
    facts: [
      { label: "Team", value: "6-person multidisciplinary team" },
      { label: "Project", value: "Shipped Unreal Engine title" },
      { label: "Outcome", value: "Hired for paid freelance work" },
    ],
    tools: [
      "Unreal Engine",
      "C++",
      "Blueprints",
      "Niagara",
      "Perforce"
    ],
    sections: [
      {
        title: "Overview",
        body: [
          "The Tiryag Charger was designed to take space and hold the player’s attention, creating opportunities for other enemies to flank or move into better positions.",
          "My main focus was making the enemy feel threatening without becoming difficult to read. Its attacks needed enough anticipation for the player to react, while still applying pressure and pulling the player's attention during group encounters."
        ]
      },
       {
        title: "What I Worked On",
        type: "bullets",
        items: [
          "Developed the enemy from a design brief to a playable combat feature.",
          "Built custom C++ components and connected them with Blueprint controls for designers.",
          "Developed and extended the enemy’s combat behaviour, including its bull-charge ability.",
          "Tuned its attacks, movement and behaviour through playtesting and feedback.",
          "Worked with designers, artists and directors throughout development."
        ],
      },
      {
        title: "Technical Approach",
        body: [
          "I kept the behaviour modular so individual abilities and values could be adjusted without having to rewrite the full enemy.",
          "Gameplay logic that benefited from structure and reuse was handled in C++, while values that needed frequent changing were exposed to Blueprint. This allowed designers to adjust behaviour quickly during playtests without changing the underlying code.",
          "I also had to fit the enemy into systems that were already being used by the project, rather than treating it as a standalone prototype. That meant working around existing combat logic, animations, visual effects and design expectations."
        ],
      },
      {
        title: "What I Learned",
        body: [
          "This was my first experience working inside a larger Unreal Engine production environment.",
          "I became more confident working within an existing codebase, using Perforce, sprint-based workflows, and presenting unfinished work for review. I also learned how important it is to balance system complexity with the need for designers to iterate quickly.",
          "Being hired for paid freelance work after the bootcamp gave me confidence that both the feature and the way I worked with the team were valuable."
        ],
      },
    ],
  },
  {
  slug: "pitwall",
  title: "PitWall",
  subtitle: "C# / WPF / OpenF1 API",
  category: "Work in Progress",
  role: "Solo Developer",

  summary:
    "A work-in-progress Windows desktop application that turns OpenF1 session data into an interactive Formula 1 replay.",

  cardSummary:
    "A work-in-progress Windows desktop application that turns OpenF1 data into an interactive Formula 1 replay. The core replay flow is working, including timeline playback, circuit mapping, driver tracking, timing, and telemetry.",

  cardMedia: {
    type: "video",
    src: "docs/assets/PitWall/PitWall Demo - v0.1.0.web.mp4",
    label: "PitWall Formula 1 replay demo",
  },

  detailMedia: {
    type: "youtube",
    src: "https://www.youtube.com/embed/SckFAXA8TCw",
    label: "PitWall Formula 1 replay demo",
  },

  links: [
    {
      label: "GitHub",
      href: "https://github.com/DuckMeMz/PitWall",
    },
  ],

  cardActions: [
    {
      label: "GitHub",
      href: "https://github.com/DuckMeMz/PitWall",
    },
  ],

  facts: [
    { label: "Status", value: "Work in progress" },
    { label: "Platform", value: "Windows desktop" },
    { label: "Focus", value: "Replay systems and real-world API data" },
  ],

  tools: [
    "C#",
    "WPF",
    "MVVM",
    "OpenF1 API",
    "Polly",
    "GitHub Actions",
  ],

  sections: [
    {
      title: "Overview",
      body: [
        "PitWall is a Windows desktop application that turns historical OpenF1 data into an interactive Formula 1 replay. Users can load a session, move through its timeline, follow the cars around a circuit map, and inspect timing and telemetry for each driver.",
        "I started PitWall to deepen my C# skills and learn WPF and MVVM by building around real-world API data.",
      ],
    },
    {
      title: "What I Built",
      type: "bullets",
      items: [
        "Built a replay player with loading, play, pause, stop, seeking, and adjustable playback speed.",
        "Created a time-addressable replay model that works out each driver's state at any point in a session.",
        "Generated a circuit map from recorded car-location data and accurately placed driver markers on it.",
        "Built timing and telemetry views for position, gaps, speed, gear, DRS, throttle, brake, RPM, laps, and coordinates.",
        "Set up a GitHub Actions release pipeline that builds, packages, and publishes PitWall.",
      ],
    },
    {
      title: "The Interesting Part",
      body: [
        "OpenF1 does not provide a ready-made replay feed. Location, car telemetry, positions, intervals, and laps all arrive separately, use different timestamps, and update at different rates. PitWall downloads those feeds, groups them by driver, and turns them into one replay model.",
        "At each point on the playback timeline, the app finds the most recent useful sample for each type of data. It interpolates values such as location, speed, throttle, brake, RPM, and timing gaps where it is safe to do so, while keeping discrete values like gear, DRS state, position, and lap information tied to updates.",
      ],
    },
    {
      title: "Technical Approach",
      body: [
        "The application is written in C# with WPF and MVVM. The UI, playback controls, map, timing table, and telemetry panel are kept separate from the API and replay logic, making the project easier to expand.",
        "I built the API layer to cope with imperfect real-world data: missing optional streams, values that arrive in inconsistent JSON formats, unknown enum values, duplicate timestamps, and samples that arrive out of order. A Polly resilience pipeline spaces out requests and retries rate-limit responses with exponential backoff."      ],
    },
    {
      title: "Current State",
      body: [
        "The main replay experience is implemented. At the moment, PitWall downloads and processes a full session before playback starts, so larger sessions can take time to load and stay in memory while open.",
        "My next priorities are buffered loading, SQLite caching, and a session browser so users can load races without using raw OpenF1 session keys. I also plan to add race-control messages, synchronised team radio, and further UI improvements.",
      ],
    },
    {
      title: "What I Learned",
      body: [
        "PitWall has given me experience building and shipping a complete desktop application outside a game-engine environment: asynchronous API work, data modelling, custom JSON handling, WPF binding, MVVM, playback logic, packaging, and automated releases.",
        "The biggest lesson so far was learning not to assume API data would behave consistently. Each time I handled one missing or unexpected value, another edge case appeared somewhere else. Building PitWall taught me to validate the data at every stage and explicitly decide how to handle values that are missing, duplicated or late.",
      ],
    },
  ],
},
  {
    slug: "custom-engine",
    title: "Custom C++ Component-Based Engine",
    subtitle: "raylib gameplay prototype",
    category: "Technical project",
    role: "C++ Engine Programmer",
    summary:
      "A work-in-progress C++ engine project built on raylib, focused on component architecture, rendering flow, material ownership, and swarm-style gameplay tests.",
    cardSummary:
      "A C++ engine prototype where I am testing component systems, rendering architecture, lighting, and high-count gameplay scenarios.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Game_Engine_Hook.mp4",
      label: "Custom C++ engine gameplay hook",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/xIFXy0o-wYs?si=cJac4_6EDIeOBlnV",
      label: "Custom C++ engine demo",
    },
    links: [],
    facts: [
      { label: "Status", value: "Work in progress" },
      { label: "Focus", value: "Engine architecture" },
      { label: "Prototype", value: "Swarm-style gameplay" },
    ],
    tools: ["C++", "raylib", "Shaders", "Component systems", "Rendering"],
    sections: [
      {
        title: "What I owned",
        type: "bullets",
        items: [
          "Designed a component-based entity model for gameplay objects.",
          "Built a central rendering path with material and shader ownership in mind.",
          "Used a small gameplay prototype to test systems against real behaviour instead of isolated demos.",
          "Planned performance-focused extensions including instancing, culling, and GPU compute experiments.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I started this project because I wanted to understand the systems that modern engines usually hide: component ownership, render flow, data movement, and how gameplay code talks to engine code.",
          "raylib handles the low-level windowing, input, and drawing layer, which lets me focus on the architecture decisions I care about most.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "The project is built as both an engine and a small gameplay prototype. That keeps the architecture honest: if a system only works in a clean test scene, it is not finished yet.",
          "The next technical direction is performance-focused: hardware instancing, frustum culling, deferred rendering, and eventually GPU compute for high-count enemy and projectile logic.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "This project is making me more deliberate about where complexity belongs. It has also made me better at spotting the tradeoff between clean architecture and the iteration speed needed to make a game feel good.",
        ],
      },
    ],
  },
  {
    slug: "warpbound",
    title: "Warpbound",
    subtitle: "Solo SDL2 survival game",
    category: "Technical project",
    role: "Solo Game Designer and Developer",
    summary:
      "A solo SDL2 project where I focused on scalable game architecture, a spritesheet animator, a GUI shop system, and a clean HUD hierarchy.",
    cardSummary:
      "A solo C++ survival game where I pushed architecture: animator component, polymorphic shop items, and a maintainable HUD system.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Warpbound Video.mp4",
      poster: "docs/assets/posters/warpbound.jpg",
      label: "Warpbound combat gameplay",
    },
    detailMedia: {
      type: "video",
      src: "docs/assets/WarpboundPage/WarpboundVideoNormal.mp4",
      poster: "docs/assets/posters/warpbound.jpg",
      label: "Warpbound gameplay demo",
    },
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/DuckMeMz/Warpbound",
      },
      {
        label: "Class diagram",
        href: "https://drive.google.com/file/d/1Wa8vY5ho-f2eOyLEkibAxh_GCkdgCWga/view?usp=sharing",
      },
    ],
    facts: [
      { label: "Team", value: "Solo" },
      { label: "Duration", value: "3 months" },
      { label: "Result", value: "85/100" },
    ],
    tools: ["C++", "SDL2", "Hornet Engine", "OOP", "UML"],
    sections: [
      {
        title: "What I owned",
        type: "bullets",
        items: [
          "Created a spritesheet animator component that avoids thousands of individual frame files.",
          "Built a GUI shop system using polymorphic shop items for easier extension.",
          "Designed a HUD hierarchy that separates display concerns from gameplay logic.",
          "Extended Hornet engine audio and graphics functionality where the project needed it.",
        ],
      },
      {
        title: "What I built",
        body: [
          "Warpbound is a wave-based resource survival game built as a solo project. I used it to push my object-oriented design and to make systems that could grow without turning into one-off code.",
          "The feature I am proudest of is the spritesheet animator. Hornet's default animation path expected individual image files, but the planet assets were supplied as spritesheets. Loading thousands of separate files would have been awkward and wasteful, so I built a component that works directly from the sheet.",
        ],
        media: {
          type: "video",
          src: "docs/assets/WarpboundPage/Planet Video.mp4",
          poster: "docs/assets/posters/warpbound.jpg",
          label: "Warpbound planet spritesheet animation",
        },
      },
      {
        title: "Technical decisions",
        body: [
          "The animator feeds frames back into the existing object render path instead of replacing rendering outright. That kept rendering centralised and avoided making the animator a special case.",
          "For the HUD, I used a vertical hierarchy with high cohesion and low coupling. It receives, formats, and displays data, but does not own gameplay logic.",
        ],
        media: {
          type: "image",
          src: "docs/assets/WarpboundPage/HUD Class Diagram.png",
          label: "Warpbound HUD UML class diagram",
        },
      },
      {
        title: "What I learned",
        body: [
          "Working solo taught me how much architecture matters when there is no one else to catch messy decisions. It also confirmed that I prefer team development: different perspectives usually make the final game stronger, and I enjoy the communication side of building features together.",
        ],
      },
    ],
  },
  {
  slug: "low-level-3d-renderer",
  title: "Low-Level 3D Renderer",
  subtitle: "PS4 Dev Kit / C++",
  category: "Graphics Programming",
  role: "C++ Graphics Programmer",

  summary:
    "A low-level C++ graphics project developed on PS4 development hardware, focused on building 3D rendering features without a game engine.",

  supportingNote: "PS4 source code cannot be shared due to NDA",

  cardSummary:
    "A low-level C++ rendering project developed on PS4 development hardware. I implemented Phong lighting, texture and mesh loading, while debugging rendering issues and analysing performance.",

  cardMedia: {
    type: "video",
    src: "docs/assets/3D Renderer Video.mp4",
    poster: "docs/assets/posters/renderer.png",
    label: "Public C++ lighting demonstration",
  },

  detailMedia: {
    type: "panel",
    kicker: "Graphics Programming",
    title: "Low-Level 3D Renderer",
    meta: "PS4 Dev Kit / C++",
    label: "Low-Level 3D Renderer PS4 Dev Kit C++ project",
  },

  links: [],

  facts: [
    { label: "Project", value: "University graphics project" },
    { label: "Platform", value: "PS4 Dev Kit" },
    { label: "Focus", value: "Low-level 3D rendering" },
  ],

  tools: [
    "C++",
    "PS4 Dev Kit",
    "Phong Lighting",
    "Shader Programming",
    "Performance Analysis",
  ],

  sections: [
    {
      title: "Overview",
      body: [
        "I built a small 3D renderer on PS4 development hardware, working directly with the graphics pipeline rather than through a game engine. It loaded textured meshes, supported multiple cameras, and used Phong lighting to render a 3D scene.",
      ],
    },
    {
      title: "What I Built",
      type: "bullets",
      items: [
        "Loaded mesh and texture data for rendering.",
        "Set up shaders, vertex and index buffers, and transformation data.",
        "Implemented Phong lighting.",
        "Added support for multiple camera views.",
        "Used platform debugging and performance tools to investigate rendering issues.",
      ],
    },
    {
      title: "What I Learned",
      body: [
        "Before this project, I understood meshes mostly as assets that an engine loaded for me. Working at a lower level showed me how vertex and index data make up a mesh, how that data is transferred into GPU buffers, and how shaders and draw calls turn it into a rendered frame.",
        "It also made me more methodical when debugging graphics problems, because I had to trace issues through the mesh data, buffers, shaders, and rendering state myself.",
      ],
    },
  ],
},
  {
  slug: "heart-garden",
  title: "Heart Garden",
  subtitle: "Real-Time Biometric Environment",
  category: "Client Project",
  role: "Technical Lead / Environment Programmer",

  summary:
    "Heart Garden is an Unreal Engine environment that responds to live heart-coherence data. As the values change, reactive systems such as water, foliage, lighting, and bell shift between calmer and more unsettled states.",

  cardSummary:
    "A client-facing Unreal Engine environment driven by live heart-coherence data. I led client communication and built reactive systems for the water, foliage, lighting, bell and other environmental elements.",

  cardMedia: {
    type: "video",
    src: "docs/assets/HeartGardenPage/HeartGardenDemoVideos.mp4",
    poster: "docs/assets/posters/heart-garden.jpg",
    label: "Heart Garden environment demo",
  },

  carousel: [
    {
      title: "Meadow",
      type: "youtube",
      src: "https://www.youtube.com/embed/QAuvAnSd4lE?si=22qwicf0KnZMj7mC",
      label: "Heart Garden meadow demo",
    },
    {
      title: "Water",
      type: "youtube",
      src: "https://www.youtube.com/embed/r2-3Hujk7bM?si=jrtzDA09oQGRICpl",
      label: "Heart Garden water demo",
    },
    {
      title: "Trees",
      type: "youtube",
      src: "https://www.youtube.com/embed/kHPetIQbUus?si=gTiIHv2HxrehGSRU",
      label: "Heart Garden trees demo",
    },
    {
      title: "Meadow Variation",
      type: "youtube",
      src: "https://www.youtube.com/embed/UDvrkH0EubA?si=HMsTXYE8RI2gJ0Ll",
      label: "Heart Garden meadow variation demo",
    },
    {
      title: "Bell",
      type: "youtube",
      src: "https://www.youtube.com/embed/3eUL1c3_2fw?si=nDqg1oJ-xKoNfQzO",
      label: "Heart Garden bell demo",
    },
  ],

  links: [
    {
      label: "Related research paper",
      href: "https://doi.org/10.1080/10447318.2025.2504201",
    },
  ],

  facts: [
    { label: "Team", value: "7 students" },
    { label: "Duration", value: "3 months" },
    { label: "Outcome", value: "Delivered client proof of concept" },
  ],

  tools: [
    "Unreal Engine 5",
    "Blueprints",
    "TCP",
    "Real-Time Data",
    "Dynamic Materials",
  ],

  sections: [
    {
      title: "Overview",
      body: [
        "Heart Garden was an extension and proof of concept based on an early environment created by the clients. Our goal was to expand it into a more complete experience that used live coherence values from emWave Pro (heart sensor) to change the environment in real time.",
        "Higher coherence moves the world towards a calmer state, while lower coherence makes the water, foliage, lighting, bell and other environmental elements more unsettled.",
        "I took primary responsibility for the reactive environment systems and handled client communication throughout the project. This meant turning broad ideas about relaxation and atmosphere into concrete systems that we could build, test, and refine.",
      ],
    },
    {
      title: "What I Worked On",
      type: "bullets",
      items: [
        "Led the technical environment work and client communication throughout the project.",
        "Received live emWave Pro data over TCP and mapped coherence values to environmental systems.",
        "Built reactive systems for the water, foliage, lighting, trees, bell, and other environmental elements.",
        "Worked with the client to turn broad ideas into features the team could test and demonstrate.",
      ],
    },
    {
      title: "Technical Approach",
      body: [
        "For the water, I used dynamic material instances controlled by the coherence value. Opacity, normal intensity, distortion, and panning speed changed together so the water could move smoothly between calmer and more agitated states.",
        "For the bell, I replaced an earlier animation-timeline approach with sine-wave-driven movement. This made the swing easier to tune and gave me more direct control over its speed and amplitude as the coherence value changed.",
        "The client was interested in how the environment felt rather than how the systems were implemented, so I had to explain technical choices clearly and adjust the systems based on how noticeable and appropriate they felt during demonstrations.",
      ]
    },
    {
      title: "What I Learned",
      body: [
        "This project taught me how to translate non-technical client language into specific, testable behaviour. It also made me more confident leading meetings, explaining trade-offs, and shaping the direction of the project while the initial requirements were still quite open.",
        "I also learned that the most technically impressive solution is not always the most useful one. For client-facing work, systems need to be reliable, understandable, and easy to tune as the client's desired experience becomes clearer.",
      ],
    },
  ],
},
  {
    slug: "ar-navigation-guide",
    title: "AR Navigation Guide",
    subtitle: "Mobile campus navigation",
    category: "Applied project",
    role: "AR Application Developer",
    summary:
      "A mobile AR navigation app that uses a measured 3D environment, Unity NavMesh, and QR recentering to keep guidance aligned with the real building.",
    cardSummary:
      "A Unity AR project where I owned the app implementation, to-scale building model, NavMesh navigation, and QR recentering.",
    cardMedia: {
      type: "video",
      src: "docs/assets/ARNavigationPage/Ar Navigation Demo.mp4",
      label: "AR Navigation Guide mobile demo",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/WZ6WqVDH8V8?si=fs14G9H3jmrUMoRs",
      label: "AR Navigation Guide demo video",
    },
    links: [],
    facts: [
      { label: "Team", value: "6 students" },
      { label: "Duration", value: "3 months" },
      { label: "Result", value: "84/100" },
    ],
    tools: ["Unity", "C#", "Mobile AR", "NavMesh", "ZXing.Net", "QR codes"],
    sections: [
      {
        title: "What I owned",
        type: "bullets",
        items: [
          "Owned the AR application implementation while teammates focused on supporting deliverables.",
          "Built a to-scale 3D campus environment from blueprints and in-person measurements.",
          "Implemented QR code recentering with ZXing.Net to recover from tracking drift.",
          "Connected real-world layout data to Unity navigation so the route line could update while the user moved.",
        ],
      },
      {
        title: "What I built",
        body: [
          "The app helps students and visitors navigate unfamiliar university buildings through mobile augmented reality. My main responsibility was creating the actual AR application and the environment it navigated through.",
          "I rebuilt the target building in Unity using blueprints plus in-person measurements for doors, corridors, and key spaces. That gave the NavMesh a usable, real-world scale foundation.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "The hardest problem was keeping the phone aligned with the real building. Older devices and dim lighting caused tracking drift, so I tested recovery options and chose QR codes because they were cheap, clear for users, and easy to place around the building.",
          "When a QR code is scanned, the app recenters the navigation position and orientation so the route can recover without restarting the experience.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "This project taught me a lot about the practical side of AR: the technical feature is only useful if it survives imperfect lighting, imperfect devices, and real users moving through a space.",
        ],
      },
    ],
  },
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function projectsForGroup(group) {
  return group.slugs
    .map((slug) => findProject(slug))
    .filter((project) => project);
}
