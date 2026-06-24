import { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Clock, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { useUser } from '../context/UserContext';
import { toast } from 'sonner';

interface ForumPost {
  id: string;
  author: string;
  authorInitials: string;
  title: string;
  content: string;
  category: string;
  replies: number;
  likes: number;
  timeAgo: string;
  isAnswered: boolean;
}

export function ForumPage() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Général');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      author: 'Sophie M.',
      authorInitials: 'SM',
      title: 'Quel itinéraire pour aller de Châtelet à Bastille ?',
      content: 'Je cherche un trajet sécurisé pour mes premiers trajets en ville. Des conseils ?',
      category: 'Itinéraires',
      replies: 5,
      likes: 8,
      timeAgo: 'Il y a 2 heures',
      isAnswered: true,
    },
    {
      id: '2',
      author: 'Karim B.',
      authorInitials: 'KB',
      title: 'Mon antivol U est-il suffisant pour la gare ?',
      content: 'J\'ai un antivol U basique. Est-ce assez sécurisé pour laisser mon vélo à la gare toute la journée ?',
      category: 'Sécurité',
      replies: 12,
      likes: 15,
      timeAgo: 'Il y a 5 heures',
      isAnswered: true,
    },
    {
      id: '3',
      author: 'Mireille D.',
      authorInitials: 'MD',
      title: 'Comment savoir si mes freins sont bien réglés ?',
      content: 'J\'ai suivi la vidéo mais je ne suis pas sûre du résultat. Quelqu\'un peut-il me guider ?',
      category: 'Réparation',
      replies: 8,
      likes: 6,
      timeAgo: 'Il y a 1 jour',
      isAnswered: true,
    },
    {
      id: '4',
      author: 'Lucas P.',
      authorInitials: 'LP',
      title: 'Vélo électrique ou classique pour débuter ?',
      content: 'J\'hésite entre un VAE et un vélo classique. Qu\'en pensez-vous pour débuter en ville ?',
      category: 'Matériel',
      replies: 18,
      likes: 22,
      timeAgo: 'Il y a 1 jour',
      isAnswered: false,
    },
    {
      id: '5',
      author: 'Emma R.',
      authorInitials: 'ER',
      title: 'Peur de rouler sous la pluie',
      content: 'Comment vous faites quand il pleut ? J\'appréhende beaucoup.',
      category: 'Général',
      replies: 14,
      likes: 20,
      timeAgo: 'Il y a 2 jours',
      isAnswered: true,
    },
    {
      id: '6',
      author: 'Thomas L.',
      authorInitials: 'TL',
      title: 'Où trouver des cours de vélo pour adultes ?',
      content: 'Je ne sais pas du tout faire de vélo. Y a-t-il des cours pour apprendre à 30 ans ?',
      category: 'Général',
      replies: 9,
      likes: 11,
      timeAgo: 'Il y a 3 jours',
      isAnswered: true,
    },
  ]);

  const categories = [
    { key: 'all', label: 'Toutes les questions' },
    { key: 'Général', label: 'Général' },
    { key: 'Réparation', label: 'Réparation' },
    { key: 'Itinéraires', label: 'Itinéraires' },
    { key: 'Sécurité', label: 'Sécurité' },
    { key: 'Matériel', label: 'Matériel' },
  ];

  const filteredPosts = posts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleCreatePost = () => {
    if (!user) {
      toast.error('Veuillez d\'abord créer votre profil');
      return;
    }

    if (!newPostTitle.trim() || !newPostContent.trim()) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    const newPost: ForumPost = {
      id: Date.now().toString(),
      author: user.name,
      authorInitials: user.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      title: newPostTitle,
      content: newPostContent,
      category: newPostCategory,
      replies: 0,
      likes: 0,
      timeAgo: 'À l\'instant',
      isAnswered: false,
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostCategory('Général');
    setIsDialogOpen(false);
    toast.success('Votre question a été publiée !');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Forum d'entraide</h1>
            <p className="text-lg text-gray-600">
              Posez vos questions, partagez vos conseils, entraidez-vous avec la communauté
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 w-full md:w-auto">
                <Plus className="size-4" />
                Poser une question
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Poser une nouvelle question</DialogTitle>
                <DialogDescription>
                  Décrivez votre problème ou votre question. La communauté vous répondra rapidement.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="title">Titre de votre question</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Comment changer ma chambre à air ?"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Catégorie</Label>
                  <select
                    id="category"
                    value={newPostCategory}
                    onChange={(e) => setNewPostCategory(e.target.value)}
                    className="w-full mt-2 px-3 py-2 border rounded-md"
                  >
                    {categories.slice(1).map((cat) => (
                      <option key={cat.key} value={cat.key}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="content">Description détaillée</Label>
                  <Textarea
                    id="content"
                    placeholder="Expliquez votre situation en détail..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={handleCreatePost}>
                    Publier la question
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            placeholder="Rechercher une question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.key)}
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <Card className="mb-8 bg-purple-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <MessageSquare className="size-6 text-purple-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-purple-900 mb-1">Entraide bienveillante</p>
              <p className="text-sm text-purple-800">
                Ici, il n'y a pas de question bête. Que vous débutiez ou que vous ayez de l'expérience, 
                vous pouvez poser vos questions librement et aider les autres membres. Ensemble, on progresse plus vite.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forum Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="size-10">
                  <AvatarFallback className="bg-blue-600 text-white">
                    {post.authorInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1">{post.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-medium">{post.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.timeAgo}
                        </div>
                      </div>
                    </div>
                    {post.isAnswered && (
                      <Badge variant="default" className="bg-green-600 hover:bg-green-700 flex-shrink-0">
                        Répondu
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardDescription className="text-base">{post.content}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MessageCircle className="size-4" />
                  <span>{post.replies} réponses</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="size-4" />
                  <span>{post.likes} utile{post.likes > 1 ? 's' : ''}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="size-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucune question ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
}
