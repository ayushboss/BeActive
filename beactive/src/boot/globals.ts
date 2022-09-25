import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  console.log("we bootin'");
  app.config.globalProperties.$ALL_EVENTS = [
    {
      id: 0,
      title: 'Climate Change Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'RMC Hall',
      tags: [{id: 1, title: 'Climate Change', label: 'Climate Change'}],
      description: '#FridaysForFuture is a youth-led and -organised movement that began in August 2018, after 15-year-old Greta Thunberg and other young activists sat in front of the Swedish parliament every schoolday for three weeks, to protest against the lack of action on the climate crisis. She posted what she was doing on Instagram and Twitter and it soon went viral.',
      contactInfoOn: true,
      contactInfo: 'as328@rice.edu',
      interested: 67,
      timeOfPosting: new Date(),
    },
    {
      id: 1,
      title: 'Equal Pay Today! Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'Lovett College',
      tags: [{id: 1, title: 'Equal Pay', label: 'Equal Pay'}, {id: 2, title: 'Health', label: "Health"}],
      description: 'For too long, part-time and seasonal workers have been excluded from the conversation about equal pay, creating an inaccurate picture of how dire the situation is, especially for women of color. That changes now. We have generally observed Equal Pay Days based on the information calculated for full-time year round workers only. This Equal Pay Day Season 2022, we are raising awareness about the wage gap for ALL workers, but including data on part-time, seasonal, and gig workers, many of whom are essential workers piecing together multiple part-time jobs to get by, in the calculation of the Equal Pay Days.      ',
      contactInfoOn: false,
      interested: 134,
      timeOfPosting: new Date(),
    },
    {
      id: 3,
      title: 'PFLAG LGBTQ+ Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'Duncan Hall',
      tags: [{id: 1, title: 'Human Rights', label: 'Human Rights'}, {id: 2, title: 'Awareness', label: "Awareness"}],
      description: 'The PFLAG Chapter Network--with over 400 chapters across the country--provides confidential peer support, education, and advocacy to LGBTQ+ people, their parents and families, and allies. PFLAG chapters are in communities in all 50 states, the District of Columbia, and Puerto Rico. With 200,000+ members and supporters crossing multiple generations of families in major urban centers, small cities, and rural areas, PFLAG has been saving lives, strengthening families, and changing hearts, minds and laws since 1972.       ',
      contactInfoOn: false,
      interested: 142,
      timeOfPosting: new Date(),
    },
    {
      id: 4,
      title: 'LIRS Ukraine Crisis Action Hub Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'The Skyspace',
      tags: [{id: 1, title: 'Human Rights', label: 'Human Rights'}, {id: 2, title: 'Immigration', label: "Immigration"}],
      description: 'The crisis in Ukraine has forced millions of refugees to flee from their homes. At LIRS, we stand ready to welcome refugee children and families to the United States. Your gift to Neighbors in Need: Ukraine will help provide essential support for newly arrived families, including emergency medical care, temporary housing, financial support for basic necessities, and more.      ',
      contactInfoOn: true,
      contactInfo: 'yu167@rice.edu',
      interested: 184,
      timeOfPosting: new Date(),
    },
    {
      id: 5,
      title: 'The Movement for Black Lives Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'Multicultural Center',
      tags: [{id: 1, title: 'Human Rights', label: 'Human Rights'}, {id: 2, title: 'Immigration', label: "Immigration"}],
      description: 'The Black Hive is at the heart of the Movement for Black Lives (M4BL) climate and environmental justice (CEJ) efforts. We are a cohort of Black CEJ experts who use our collective experience and knowledge to assess how climate change and ecological destruction impact Black communities in the U.S. and across the Global Black Diaspora. Together, we organize for cleaner, better, and safer futures for Black lives.      ',
      contactInfoOn: true,
      contactInfo: 'yu167@rice.edu',
      interested: 175,
      timeOfPosting: new Date(),
    }
  ];

  app.config.globalProperties.$TAGS = [
    {
        label: 'Climate Change',
        title: 'Climate Change',
        id: 1
    },
    {
        label: 'Health',
        title: 'Health',
        id: 2
    },
    {
        label: 'Education',
        title: 'Education',
        id: 3
    },
    {
        label: 'Environment',
        title: 'Environment',
        id: 4
    },
    {
        label: 'Human Rights',
        title: 'Human Rights',
        id: 5
    },
    {
        label: 'Economy',
        title: 'Economy',
        id: 6
    },
    {
        label: 'Politics',
        title: 'Politics',
        id: 7
    }
  ]

  app.config.globalProperties.$MY_EVENTS = [
    {
      id: 0,
      title: 'Climate Change Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'RMC Hall',
      tags: [{id: 1, title: 'Climate Change', label: 'Climate Change'}],
      description: '#FridaysForFuture is a youth-led and -organised movement that began in August 2018, after 15-year-old Greta Thunberg and other young activists sat in front of the Swedish parliament every schoolday for three weeks, to protest against the lack of action on the climate crisis. She posted what she was doing on Instagram and Twitter and it soon went viral.',
      contactInfoOn: true,
      contactInfo: 'as328@rice.edu',
      interested: 67,
      timeOfPosting: new Date(),
    },]
  
    app.config.globalProperties.$MY_INTERESTS = [
      {
        id: 4,
        title: 'LIRS Ukraine Crisis Action Hub Convention',
        startingTime: new Date(),
        endTime: new Date(),
        location: 'The Skyspace',
        tags: [{id: 1, title: 'Human Rights', label: 'Human Rights'}, {id: 2, title: 'Immigration', label: "Immigration"}],
        description: 'The crisis in Ukraine has forced millions of refugees to flee from their homes. At LIRS, we stand ready to welcome refugee children and families to the United States. Your gift to Neighbors in Need: Ukraine will help provide essential support for newly arrived families, including emergency medical care, temporary housing, financial support for basic necessities, and more.      ',
        contactInfoOn: true,
        contactInfo: 'yu167@rice.edu',
        interested: 184,
        timeOfPosting: new Date(),
      },
    ]
})
