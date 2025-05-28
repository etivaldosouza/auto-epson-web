export const printerCategories = [
  {
    category: "Impressoras Multifuncionais",
    products: [
      {
        name: "Epson L3250",
        description: "Impressora multifuncional com tanque de tinta, ideal para home office e pequenos escritórios.",
        features: ["Tanque de tinta", "Wi-Fi", "Cópia/Impressão/Scanner", "Baixo custo por página"],
        image: "/lovable-uploads/58cbe63b-f19d-48e2-b61f-656474d9ea14.png",
        popular: true,
      },
      {
        name: "Epson M2170",
        description: "Impressora monocromática com tanque de tinta para alto volume de impressão.",
        features: ["Tanque de tinta", "Monocromática", "Wi-Fi", "Alta capacidade"],
        image: "/lovable-uploads/5dbe099a-d816-4efa-9fc7-439a6f03a628.png",
        popular: false,
      },
      {
        name: "Epson WorkForce WF-2860",
        description: "Impressora multifuncional com cartucho individual, perfeita para escritórios.",
        features: ["Cartucho individual", "Wi-Fi Direct", "Impressão duplex", "Scanner ADF"],
        image: "/lovable-uploads/2b4dd084-b5af-44fa-93f5-e6b3298345f8.png",
        popular: true,
      },
      {
        name: "Epson XP-4101",
        description: "Impressora compacta multifuncional com conectividade wireless e design elegante.",
        features: ["Compacta", "Wi-Fi", "Impressão móvel", "Display LCD"],
        image: "/lovable-uploads/6cbb0fd5-7d03-4c11-938d-8b4622ffc006.png",
        popular: false,
      },
      {
        name: "Epson SureColor T3170",
        description: "Impressora profissional para grandes formatos, ideal para projetos gráficos.",
        features: ["Formato A1", "Qualidade fotográfica", "Rede Ethernet", "Tintas pigmentadas"],
        image: "/lovable-uploads/b853422d-c87c-4b08-bfdb-ecb2a1cb85a3.png",
        popular: false,
      },
      {
        name: "Epson Stylus",
        description: "Impressora multifuncional com design elegante e alta qualidade de impressão.",
        features: ["Multifuncional", "Design compacto", "Qualidade fotográfica", "Conectividade wireless"],
        image: "/lovable-uploads/afa7e3f0-9901-4dab-a59a-fb6883fa3195.png",
        popular: false,
      },
    ],
  },
  {
    category: "Tintas e Garrafas",
    products: [
      {
        name: "Tinta Original T504 Preta",
        description: "Garrafa de tinta preta original Epson para impressoras EcoTank série L.",
        features: ["70ml", "Original Epson", "Rendimento de 4.500 páginas", "Secagem rápida"],
        image: "/lovable-uploads/3f1fb873-1ec9-4598-8de9-11b0b05426a2.png",
        popular: true,
      },
      {
        name: "Kit Tintas Coloridas T504",
        description: "Kit completo com tintas cyan, magenta e amarela para impressoras EcoTank.",
        features: ["3 garrafas de 70ml", "Cores vibrantes", "Rendimento alto", "Resistente ao desbotamento"],
        image: "/lovable-uploads/397ec319-9c12-42ad-a380-01a4c8b3288e.png",
        popular: true,
      },
      {
        name: "Tinta Fotográfica T673",
        description: "Tinta fotográfica premium para impressão de fotos com qualidade profissional.",
        features: ["Qualidade fotográfica", "Resistente à água", "Cores duradouras", "70ml"],
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
        popular: false,
      },
      {
        name: "Tinta Pigmentada C13T00R120",
        description: "Tinta pigmentada preta para impressão de documentos com alta qualidade.",
        features: ["Pigmentada", "Texto nítido", "Resistente ao borramento", "127ml"],
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
        popular: false,
      },
    ],
  },
  {
    category: "Impressoras Matriciais",
    products: [
      {
        name: "Epson LX-350",
        description: "Impressora matricial robusta para documentos em formulário contínuo.",
        features: ["9 agulhas", "347 cps", "USB/Paralela", "Formulário contínuo"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
        popular: true,
      },
      {
        name: "Epson FX-890II",
        description: "Impressora matricial de alta velocidade para grandes volumes.",
        features: ["24 agulhas", "680 cps", "USB/Paralela/Serial", "Multi-cópia"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
        popular: false,
      },
    ],
  },
  {
    category: "Scanners",
    products: [
      {
        name: "Epson WorkForce DS-530",
        description: "Scanner de mesa com alimentador automático para documentos.",
        features: ["600x600 dpi", "35 ppm", "ADF 50 folhas", "USB 3.0"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
        popular: false,
      },
      {
        name: "Epson WorkForce ES-400",
        description: "Scanner portátil de alta qualidade para escritório.",
        features: ["600x600 dpi", "25 ppm", "Duplex", "Wi-Fi Direct"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
        popular: true,
      },
    ],
  },
];

export const supplies = [
  {
    name: "Tinta Original Epson",
    description: "Tintas originais para impressoras multifuncionais Epson",
    specifications: ["Cores vibrantes", "Longa duração", "Compatível com série L"],
  },
  {
    name: "Fita para LX-350",
    description: "Fita original para impressora matricial Epson LX-350",
    specifications: ["Preta", "Longa duração", "Excelente qualidade de impressão"],
  },
  {
    name: "Cartucho WorkForce",
    description: "Cartucho original para impressoras WorkForce",
    specifications: ["Individual por cor", "Alto rendimento", "Qualidade profissional"],
  },
];
