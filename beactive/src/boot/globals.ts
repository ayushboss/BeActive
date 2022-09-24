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
      description: 'Some climate change convention thing at the RMC wooyeah',
      contactInfoOn: true,
      contactInfo: 'as328@rice.edu',
      interested: 10,
      timeOfPosting: new Date(),
    },
    {
      id: 1,
      title: 'Tree Convention',
      startingTime: new Date(),
      endTime: new Date(),
      location: 'Lovett College',
      tags: [{id: 1, title: 'Climate Change', label: 'Climate Change'}, {id: 2, title: 'Health', label: "Health"}],
      description: 'We really do love trees, don\'t we?',
      contactInfoOn: false,
      interested: 10,
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
})
