
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Como Escolher a Impressora Fiscal Ideal para seu Negócio",
      excerpt: "Guia completo para escolher entre impressoras térmicas e matriciais, considerando volume de impressão, tipo de estabelecimento e necessidades específicas.",
      category: "Dicas",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=250",
      featured: true,
    },
    {
      title: "Novidades Epson 2024: Lançamentos e Atualizações",
      excerpt: "Conheça as novidades da linha Epson para este ano, incluindo novos modelos de impressoras fiscais e recursos inovadores.",
      category: "Novidades",
      date: "10 de Janeiro, 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=250",
      featured: false,
    },
    {
      title: "Manutenção Preventiva: Como Prolongar a Vida Útil dos Equipamentos",
      excerpt: "Dicas essenciais de manutenção preventiva para manter suas impressoras funcionando perfeitamente por mais tempo.",
      category: "Manutenção",
      date: "5 de Janeiro, 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
      featured: false,
    },
    {
      title: "Automação Comercial: Tendências para 2024",
      excerpt: "As principais tendências em automação comercial que irão moldar o mercado este ano e como se preparar para elas.",
      category: "Tecnologia",
      date: "28 de Dezembro, 2023",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250",
      featured: false,
    },
    {
      title: "Resolução de Problemas Comuns em Impressoras Fiscais",
      excerpt: "Soluções práticas para os problemas mais comuns encontrados no dia a dia com impressoras fiscais.",
      category: "Suporte",
      date: "20 de Dezembro, 2023",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&h=250",
      featured: false,
    },
    {
      title: "Benefícios da Integração de Sistemas de Automação",
      excerpt: "Como a integração de diferentes sistemas pode otimizar processos e aumentar a eficiência do seu negócio.",
      category: "Automação",
      date: "15 de Dezembro, 2023",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=250",
      featured: false,
    },
  ];

  const categories = ["Todas", "Dicas", "Novidades", "Manutenção", "Tecnologia", "Suporte", "Automação"];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Dicas": "bg-blue-100 text-blue-800",
      "Novidades": "bg-green-100 text-green-800",
      "Manutenção": "bg-yellow-100 text-yellow-800",
      "Tecnologia": "bg-purple-100 text-purple-800",
      "Suporte": "bg-red-100 text-red-800",
      "Automação": "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Blog <span className="text-yellow-400">AutoEpson</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades em tecnologia, dicas de manutenção, 
            lançamentos Epson e tendências em automação comercial
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todas" ? "default" : "outline"}
              className={category === "Todas" ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card key={index} className="mb-12 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <Badge variant="outline">Destaque</Badge>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {post.date} • {post.readTime} de leitura
                  </div>
                  <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                    Ler Artigo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                <Button variant="outline" className="w-full">
                  Ler Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Receba nossas novidades por e-mail
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e fique por dentro das últimas novidades, 
            dicas técnicas e lançamentos Epson
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
