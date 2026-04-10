export interface PhotoAsset {
  src: string;
  alt: string;
  caption: string;
  detail: string;
  objectPosition?: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  photo: PhotoAsset;
  floatingPhotos: [PhotoAsset, PhotoAsset];
  stats: HeroStat[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export interface StoryMoment {
  label: string;
  title: string;
  text: string;
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  photo: PhotoAsset;
  moments: StoryMoment[];
}

export interface ReasonCard {
  label: string;
  title: string;
  text: string;
  accent: string;
}

export interface TimelineItem {
  label: string;
  title: string;
  text: string;
  photo: PhotoAsset;
}

export interface GalleryItem {
  title: string;
  description: string;
  size: 'feature' | 'tall' | 'wide' | 'medium';
  photo: PhotoAsset;
}

export interface FinalMessageContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  promise: string;
  signature: string;
  stackPhotos: [PhotoAsset, PhotoAsset];
}

const imageUrls = {
  cafeDate: new URL('../../image/photo_8_2026-04-10_22-51-57.jpg', import.meta.url).href,
  concertKiss: new URL('../../image/photo_3_2026-04-10_22-51-57.jpg', import.meta.url).href,
  winterRide: new URL('../../image/photo_1_2026-04-10_22-51-57.jpg', import.meta.url).href,
  sillySelfie: new URL('../../image/photo_5_2026-04-10_22-51-57.jpg', import.meta.url).href,
  elevatorKiss: new URL('../../image/photo_7_2026-04-10_22-51-57.jpg', import.meta.url).href,
  mirrorNight: new URL('../../image/photo_9_2026-04-10_22-51-57.jpg', import.meta.url).href,
  portraitRibbon: new URL('../../image/photo_11_2026-04-10_22-51-57.jpg', import.meta.url).href,
  portraitStriped: new URL('../../image/photo_10_2026-04-10_22-51-57.jpg', import.meta.url).href,
  portraitClose: new URL('../../image/photo_12_2026-04-10_22-51-57.jpg', import.meta.url).href,
  playfulPortrait: new URL('../../image/photo_2_2026-04-10_22-51-57.jpg', import.meta.url).href,
  glassesPhoto: new URL('../../image/photo_6_2026-04-10_22-51-57.jpg', import.meta.url).href
};

const createPhoto = (
  src: string,
  data: Omit<PhotoAsset, 'src'>
): PhotoAsset => ({
  src,
  ...data
});

const photos = {
  cafeDate: createPhoto(imageUrls.cafeDate, {
    alt: 'Романтичная фотография с свидания в кафе с мягким светом.',
    caption: 'Наш идеальный вечер',
    detail: 'Теплый свет, украденные поцелуи и то самое спокойствие, которое ощущается по-особенному рядом с тобой.',
    objectPosition: 'center 42%'
  }),
  concertKiss: createPhoto(imageUrls.concertKiss, {
    alt: 'Поцелуй в концертном зале в мягкой дымке.',
    caption: 'Когда весь мир исчезает',
    detail: 'Каждый раз, когда ты так близко, всё вокруг становится тише и неважнее.',
    objectPosition: 'center 32%'
  }),
  winterRide: createPhoto(imageUrls.winterRide, {
    alt: 'Уютное зимнее селфи вдвоем.',
    caption: 'Снаружи холодно, с тобой тепло',
    detail: 'Даже самая обычная поездка рядом с тобой превращается в маленькую историю любви.',
    objectPosition: 'center 36%'
  }),
  sillySelfie: createPhoto(imageUrls.sillySelfie, {
    alt: 'Веселое селфи вдвоем с широкими улыбками.',
    caption: 'Самый любимый хаос',
    detail: 'Смешно, мило, шумно и всё равно красиво, потому что это мы.',
    objectPosition: 'center 32%'
  }),
  elevatorKiss: createPhoto(imageUrls.elevatorKiss, {
    alt: 'Зеркальное фото с поцелуем в лифте.',
    caption: 'Момент только для нас',
    detail: 'Быстрое фото в зеркале, которое ощущается как наш маленький секрет.',
    objectPosition: 'center 38%'
  }),
  mirrorNight: createPhoto(imageUrls.mirrorNight, {
    alt: 'Домашняя фотография поцелуя в зеркале.',
    caption: 'Нежность после полуночи',
    detail: 'Даже тихая комната начинает светиться ярче, если в ней есть ты.',
    objectPosition: 'center 40%'
  }),
  portraitRibbon: createPhoto(imageUrls.portraitRibbon, {
    alt: 'Портрет моей девушки с лентой в волосах.',
    caption: 'Моя слабость в одном кадре',
    detail: 'Ты делаешь нежность естественной и невероятно красивой.',
    objectPosition: 'center 28%'
  }),
  portraitStriped: createPhoto(imageUrls.portraitStriped, {
    alt: 'Портрет моей девушки в полосатом свитере.',
    caption: 'Лицо, на которое я готов смотреть вечно',
    detail: 'Каждый твой крупный план ощущается как новое открытие чего-то прекрасного.',
    objectPosition: 'center 28%'
  }),
  portraitClose: createPhoto(imageUrls.portraitClose, {
    alt: 'Крупный портрет моей девушки.',
    caption: 'Ты прекрасна всегда',
    detail: 'Даже самое маленькое выражение на твоем лице становится для меня незабываемым.',
    objectPosition: 'center 26%'
  }),
  playfulPortrait: createPhoto(imageUrls.playfulPortrait, {
    alt: 'Игривый крупный портрет на подушке.',
    caption: 'Настолько милая, что время замирает',
    detail: 'То самое лицо, которое превращает обычный момент в один из самых любимых.',
    objectPosition: 'center 26%'
  }),
  glassesPhoto: createPhoto(imageUrls.glassesPhoto, {
    alt: 'Веселое совместное селфи в очках.',
    caption: 'Смешно и идеально',
    detail: 'Мне до безумия нравится, как легко рядом с тобой смеяться и быть собой.',
    objectPosition: 'center 35%'
  })
};

export const heroContent: HeroContent = {
  eyebrow: 'Маленькое цифровое признание',
  title: 'Для девушки, которая сделала мой мир мягче, светлее и бесконечно любимее.',
  subtitle:
    'Если бы я мог собрать всю свою нежность в одном месте, она выглядела бы именно так: теплый свет, наши воспоминания и каждая мелочь, из-за которой я влюбляюсь в тебя снова и снова.',
  note: 'Открой мое сердце, и ты увидишь, что в нём везде только ты.',
  photo: photos.cafeDate,
  floatingPhotos: [photos.portraitRibbon, photos.elevatorKiss],
  stats: [
    {
      label: 'Любимое место',
      value: 'рядом с тобой'
    },
    {
      label: 'Настроение любви',
      value: 'нежность, смех и твоя улыбка'
    },
    {
      label: 'План на будущее',
      value: 'ещё больше нас'
    }
  ],
  primaryAction: {
    label: 'Открыть мое сердце',
    href: '#story'
  },
  secondaryAction: {
    label: 'Наши воспоминания',
    href: '#gallery'
  }
};

export const storyContent: StoryContent = {
  eyebrow: 'Наша история',
  title: 'Наша история не громкая. Она кинематографичная, теплая и тихо незабываемая.',
  description:
    'Этот сайт не пытается быть идеальной сказкой. Он про что-то лучшее и настоящее. Про реальные моменты, которые всё равно кажутся магией, потому что они наши: маленькие поцелуи, нежные взгляды, смешной хаос и то спокойствие, с которым я понимаю, что хочу ещё больше всего этого именно с тобой.',
  quote:
    'Ты превратила обычные дни в воспоминания, которые я бы выбрал хранить вечно.',
  photo: photos.concertKiss,
  moments: [
    {
      label: '01',
      title: 'Ты сделала нежность естественной',
      text: 'Рядом с тобой близость ощущается легко и правильно. Ничего не нужно изображать, когда само твое присутствие уже ощущается как дом.'
    },
    {
      label: '02',
      title: 'Ты добавила свет даже в самые тихие моменты',
      text: 'Даже самые простые часы становятся особенными, если они проходят рядом с тобой.'
    },
    {
      label: '03',
      title: 'Ты сделала будущее красивым',
      text: 'Самое прекрасное в нас не только то, что уже было, но и то, как легко мне хочется представить ещё больше впереди.'
    }
  ]
};

export const reasonCards: ReasonCard[] = [
  {
    label: 'Причина 01',
    title: 'Ты нежная, но в этом столько силы',
    text: 'Ты можешь быть мягкой, смешной, милой и при этом одним своим появлением менять атмосферу вокруг.',
    accent: 'Нежность'
  },
  {
    label: 'Причина 02',
    title: 'С тобой любая версия жизни становится красивее',
    text: 'Свидания, случайные поездки, фото в зеркале, ленивые вечера, ночные разговоры и даже хаос рядом с тобой выглядят лучше.',
    accent: 'Сияние'
  },
  {
    label: 'Причина 03',
    title: 'Рядом с тобой моё сердце отдыхает',
    text: 'Быть близко к тебе значит чувствовать редкое спокойствие. Такое тёплое, безопасное и важное, что его хочется беречь.',
    accent: 'Дом'
  }
];

export const timelineItems: TimelineItem[] = [
  {
    label: 'Первое тепло',
    title: 'Даже крошечные моменты сразу стали важными',
    text: 'Даже самые маленькие паузы между делами начали ощущаться как что-то ценное, потому что они были твоими и моими.',
    photo: photos.winterRide
  },
  {
    label: 'Режим счастья',
    title: 'Мы научились смеяться легко и по-настоящему',
    text: 'Есть что-то особенное в любви, которая может быть милой, смешной и несерьезной, но всё равно ощущаться очень глубокой.',
    photo: photos.sillySelfie
  },
  {
    label: 'Тихий свет',
    title: 'Наши спокойные моменты звучат в памяти громче всего',
    text: 'Зеркало, поцелуй, комната, и вдруг появляется воспоминание, которое я точно буду прокручивать снова и снова.',
    photo: photos.elevatorKiss
  },
  {
    label: 'После полуночи',
    title: 'Ты сделала близость спокойной и тихой',
    text: 'Не нужны никакие громкие сцены. Только ты, я и та тишина, которая уже говорит обо всём.',
    photo: photos.mirrorNight
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Свет нашего вечера',
    description: 'Та самая фотография со свидания, которая уже ощущается как любимое воспоминание.',
    size: 'feature',
    photo: photos.cafeDate
  },
  {
    title: 'Самая красивая девочка',
    description: 'Лента, большие глаза и именно то лицо, из-за которого я каждый раз теряю самообладание.',
    size: 'tall',
    photo: photos.portraitRibbon
  },
  {
    title: 'Мой любимый крупный план',
    description: 'Каждое твое маленькое выражение лица хочется сохранить навсегда.',
    size: 'medium',
    photo: photos.portraitStriped
  },
  {
    title: 'Настолько милая, что всё замирает',
    description: 'Ты умеешь быть игривой так очаровательно, что отвести взгляд просто невозможно.',
    size: 'medium',
    photo: photos.playfulPortrait
  },
  {
    title: 'Нежность в отражении',
    description: 'Один маленький кадр, а внутри него слишком много тепла для одной фотографии.',
    size: 'wide',
    photo: photos.mirrorNight
  },
  {
    title: 'Прекрасна всегда',
    description: 'Даже самый тихий твой взгляд всё равно светится для меня ярко.',
    size: 'tall',
    photo: photos.portraitClose
  }
];

export const finalMessage: FinalMessageContent = {
  eyebrow: 'Признание в любви',
  title: 'Если бы мне пришлось выбирать снова, я всё равно снова пришёл бы к тебе.',
  paragraphs: [
    'Я люблю то, как рядом с тобой нежность ощущается чем-то драгоценным, будто весь мир становится мягче и красивее просто потому, что в нём есть ты.',
    'Я люблю, что наши воспоминания прекрасны не только из-за мест, где мы были, а из-за того, как ты умеешь наполнять каждый момент своим теплом.',
    'Но больше всего я люблю тебя просто за то, что ты это ты. И я очень хочу, чтобы этот сайт ощущался именно так, как и задумывался: как маленькое светящееся напоминание о том, что моё сердце снова и снова выбирает тебя.'
  ],
  promise:
    'Ещё больше свиданий, поцелуев, смеха и маленьких моментов, которые почему-то становятся целым миром.',
  signature: 'Навсегда твой',
  stackPhotos: [photos.glassesPhoto, photos.elevatorKiss]
};
