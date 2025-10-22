import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  highlights: string[];
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Москва - Золотое кольцо",
    description: "Путешествие по древним городам России с посещением Владимира, Суздаля и Костромы",
    price: 45000,
    duration: "5 дней / 4 ночи",
    image: "https://cdn.poehali.dev/projects/afabb9ad-8582-4f3d-928d-f0bdef74acb6/files/34be9042-e679-47cf-a631-77e8564ef98e.jpg",
    highlights: ["Экскурсия по Кремлю", "Посещение Суздаля", "Обед в ресторане"]
  },
  {
    id: 2,
    title: "Байкал - Жемчужина Сибири",
    description: "Уникальное путешествие к самому глубокому озеру в мире",
    price: 75000,
    duration: "7 дней / 6 ночей",
    image: "https://cdn.poehali.dev/projects/afabb9ad-8582-4f3d-928d-f0bdef74acb6/files/e794d198-4370-413d-bea1-e6ca74f36684.jpg",
    highlights: ["Круиз по Байкалу", "Поездка на остров Ольхон", "Визит в Иркутск"]
  },
  {
    id: 3,
    title: "Золотое кольцо - Классика",
    description: "Классический маршрут по историческим городам: Владимир, Суздаль, Ярославль",
    price: 38000,
    duration: "4 дня / 3 ночи",
    image: "https://cdn.poehali.dev/projects/afabb9ad-8582-4f3d-928d-f0bdef74acb6/files/9f0705c5-b716-4447-af14-e0465f1df745.jpg",
    highlights: ["Белокаменные соборы", "Музеи деревянного зодчества", "Дегустация медовухи"]
  }
];

export default function Index() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [participants, setParticipants] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const { toast } = useToast();

  const handleBooking = () => {
    if (!selectedTour || !startDate || !name || !email || !phone) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите все необходимые данные для бронирования",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Бронирование успешно!",
      description: `Тур "${selectedTour.title}" забронирован на ${format(startDate, 'dd MMMM yyyy', { locale: ru })} для ${participants} чел.`,
    });
    
    setSelectedTour(null);
    setStartDate(undefined);
    setParticipants(1);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Compass" size={40} className="text-white" />
            <h1 className="text-5xl font-bold">Достопримечательности России</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl">
            Откройте для себя красоту родной страны с нашими тщательно подобранными турами
          </p>
        </div>
      </header>

      <nav className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Mountain" size={20} />
              <span className="font-medium">Туры</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Map" size={20} />
              <span className="font-medium">Маршруты</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Camera" size={20} />
              <span className="font-medium">Галерея</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Church" size={20} />
              <span className="font-medium">Достопримечательности</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Добро пожаловать в мир путешествий по России!</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Мы рады приветствовать вас на нашем портале туристических маршрутов. Здесь вас ждут 
              незабываемые путешествия по самым красивым уголкам нашей необъятной Родины.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              От величественных храмов Золотого кольца до кристально чистых вод Байкала — 
              каждый тур тщательно продуман, чтобы подарить вам яркие впечатления и тёплые воспоминания.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Icon name="Sparkles" size={20} />
              <span className="font-medium">Начните своё приключение прямо сейчас</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Популярные туры</h2>
          <p className="text-muted-foreground mb-8">Выберите свое следующее приключение</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tour.duration}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {tour.price.toLocaleString('ru-RU')} ₽
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => setSelectedTour(tour)}
                      >
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Бронирование тура</DialogTitle>
                        <DialogDescription>
                          {selectedTour?.title} — {selectedTour?.price.toLocaleString('ru-RU')} ₽
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя и фамилия</Label>
                          <Input
                            id="name"
                            placeholder="Иван Иванов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="ivan@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Дата начала тура</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                              >
                                <Icon name="CalendarDays" size={16} className="mr-2" />
                                {startDate ? format(startDate, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                locale={ru}
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="participants">Количество человек</Label>
                          <Input
                            id="participants"
                            type="number"
                            min="1"
                            max="10"
                            value={participants}
                            onChange={(e) => setParticipants(parseInt(e.target.value))}
                          />
                        </div>

                        {startDate && participants > 0 && (
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="flex justify-between items-center font-bold text-lg">
                              <span>Итого:</span>
                              <span className="text-primary">
                                {((selectedTour?.price || 0) * participants).toLocaleString('ru-RU')} ₽
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <Button 
                        onClick={handleBooking}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Подтвердить бронирование
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 via-purple-100 to-secondary/10 rounded-2xl p-8 text-center">
          <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-3">Откройте Россию заново</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Каждое путешествие — это новая история. Мы поможем вам создать незабываемые воспоминания
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white rounded-lg p-4 min-w-[150px]">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Туров</div>
            </div>
            <div className="bg-white rounded-lg p-4 min-w-[150px]">
              <div className="text-3xl font-bold text-secondary">5000+</div>
              <div className="text-sm text-muted-foreground">Туристов</div>
            </div>
            <div className="bg-white rounded-lg p-4 min-w-[150px]">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Городов</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white mt-16 py-8">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm opacity-90">© 2024 Достопримечательности России. Все права защищены.</p>
          <p className="text-xs opacity-75 mt-2">Создано с любовью к родной стране</p>
        </div>
      </footer>
    </div>
  );
}