import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const yogaStyles = [
    {
      name: "Хатха-йога",
      description: "Мягкие статические позы для начинающих",
      duration: "90 мин",
      level: "Начинающий",
    },
    {
      name: "Виньяса",
      description: "Динамические последовательности под музыку",
      duration: "75 мин",
      level: "Средний",
    },
    {
      name: "Аштанга",
      description: "Интенсивная практика для опытных",
      duration: "90 мин",
      level: "Продвинутый",
    },
    {
      name: "Инь-йога",
      description: "Медитативные длительные позы",
      duration: "60 мин",
      level: "Любой",
    },
  ];

  const teachers = [
    {
      name: "Анна Светлова",
      experience: "8 лет",
      specialization: "Хатха-йога, Медитация",
      image: "/img/135bc65d-61e1-4612-b69c-49d4cdb342d9.jpg",
    },
    {
      name: "Михаил Древов",
      experience: "12 лет",
      specialization: "Аштанга, Виньяса",
      image: "/img/135bc65d-61e1-4612-b69c-49d4cdb342d9.jpg",
    },
    {
      name: "Елена Цветкова",
      experience: "6 лет",
      specialization: "Инь-йога, Пранаяма",
      image: "/img/135bc65d-61e1-4612-b69c-49d4cdb342d9.jpg",
    },
  ];

  const prices = [
    {
      name: "Разовое занятие",
      price: "1500 ₽",
      features: ["Доступ к любому классу", "Коврик и пропсы включены"],
    },
    {
      name: "Абонемент 8 занятий",
      price: "9600 ₽",
      originalPrice: "12000 ₽",
      features: ["Действует 30 дней", "Все виды йоги", "Заморозка до 7 дней"],
    },
    {
      name: "Безлимит",
      price: "12000 ₽",
      features: [
        "Неограниченные занятия",
        "Все мастер-классы",
        "Приоритетная запись",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white border-b border-sage-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flower" className="h-8 w-8 text-sage-500" />
              <span className="text-2xl font-montserrat font-semibold text-sage-800">
                Дзен Студия
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-sage-700 hover:text-sage-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#styles"
                className="text-sage-700 hover:text-sage-500 transition-colors"
              >
                Направления
              </a>
              <a
                href="#teachers"
                className="text-sage-700 hover:text-sage-500 transition-colors"
              >
                Преподаватели
              </a>
              <a
                href="#prices"
                className="text-sage-700 hover:text-sage-500 transition-colors"
              >
                Цены
              </a>
            </div>
            <Button className="bg-sage-500 hover:bg-sage-600 text-white font-montserrat">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-sage-50 to-sage-100 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-montserrat font-semibold text-sage-800 leading-tight">
                Найди свою{" "}
                <span className="text-sage-500">внутреннюю гармонию</span>
              </h1>
              <p className="text-xl text-sage-600 leading-relaxed">
                Присоединяйся к нашему сообществу йоги. Опытные инструкторы,
                уютная атмосфера и индивидуальный подход к каждому ученику.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-sage-500 hover:bg-sage-600 text-white font-montserrat"
                >
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на занятие
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50"
                >
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/8ec8357d-07a3-4b4d-953d-77af5c13c146.jpg"
                alt="Йога студия"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="h-6 w-6 text-sage-500" />
                  <span className="text-sage-800 font-montserrat font-medium">
                    500+ учеников
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Styles */}
      <section id="styles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-semibold text-sage-800 mb-4">
              Направления йоги
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Выбери практику, которая подходит именно тебе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaStyles.map((style, index) => (
              <Card
                key={index}
                className="border-sage-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-sage-800 font-montserrat">
                      {style.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-sage-100 text-sage-700"
                    >
                      {style.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-sage-600">
                    {style.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sage-500 mb-4">
                    <Icon name="Clock" className="h-4 w-4 mr-2" />
                    <span className="text-sm">{style.duration}</span>
                  </div>
                  <Button className="w-full bg-sage-500 hover:bg-sage-600 text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-semibold text-sage-800 mb-4">
              Наши преподаватели
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Мастера своего дела с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="border-sage-200 bg-white hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-sage-800 font-montserrat">
                    {teacher.name}
                  </CardTitle>
                  <CardDescription className="text-sage-600">
                    Опыт: {teacher.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sage-600 mb-4">{teacher.specialization}</p>
                  <Button
                    variant="outline"
                    className="border-sage-300 text-sage-700 hover:bg-sage-50"
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-semibold text-sage-800 mb-4">
              Цены и абонементы
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Выбери удобный для тебя формат занятий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <Card
                key={index}
                className={`border-sage-200 ${index === 1 ? "border-sage-400 shadow-lg scale-105" : ""}`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-sage-800 font-montserrat text-2xl">
                    {price.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-montserrat font-bold text-sage-800">
                      {price.price}
                    </span>
                    {price.originalPrice && (
                      <span className="text-lg text-sage-400 line-through ml-2">
                        {price.originalPrice}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {price.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sage-600"
                      >
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-sage-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${index === 1 ? "bg-sage-500 hover:bg-sage-600" : "bg-sage-400 hover:bg-sage-500"} text-white font-montserrat`}
                  >
                    Приобрести
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-500 to-sage-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-montserrat font-semibold text-white mb-6">
              Начни свой путь к гармонии уже сегодня
            </h2>
            <p className="text-xl text-sage-100 mb-8">
              Первое занятие — бесплатно! Приходи познакомиться с нашей студией
              и преподавателями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-600 hover:bg-sage-50 font-montserrat"
              >
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Записаться на бесплатное занятие
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-600"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" className="h-6 w-6" />
                <span className="text-xl font-montserrat font-semibold">
                  Дзен Студия
                </span>
              </div>
              <p className="text-sage-300">
                Место, где тело и разум находят равновесие
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sage-300">
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  <span>ул. Мира, 15, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  <span>info@zenstudio.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-medium mb-4">Расписание</h4>
              <div className="space-y-2 text-sage-300">
                <div>Пн-Пт: 07:00 - 22:00</div>
                <div>Сб-Вс: 08:00 - 20:00</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-medium mb-4">
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-sage-300 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  className="h-5 w-5 text-sage-300 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Youtube"
                  className="h-5 w-5 text-sage-300 hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-400">
            <p>&copy; 2024 Дзен Студия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
