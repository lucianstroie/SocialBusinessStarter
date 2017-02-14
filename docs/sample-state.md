```javascript

{

  User: {
    999: {  
      username: "sbsuser",
      user_pic: "http://some.url.here",
      location: "New York, NY"
    },
    888: {  
      username: "anothersbsuser",
      user_pic: "http://some.url.here",
      location: "New York, NY"
    }
  },

  errors: {
    session: {},
    project: {},
  },

projects{  
  123: {
    user_id: 999,
    title: "Farmer Coop Development",
    subtitle: "Organize farmer owned agricultural cooperatives.",
    project_pic: "http://some.other.url",
    end_date: "3/15/2017",
    category: "Agriculture",
    location: "New York, NY",
    pledge_levels: {
        1: {
          project_id: 123,
          amount: $6,
          title: "A Holly Jolly Christmas",
          description: "Longer description text here",
          delivery_date: "3/17/2017"
        },
        2: {
          project_id: 123,
          amount: $56,
          title: "Silent Night",
          description: "Longer description text here",
          delivery_date: "3/17/2017"
        },
      },
    },
  124: {
    user_id: 888,
    title: "Tech StartUp Development",
    subtitle: "Organize tech startup events.",
    project_pic: "http://some.other.url",
    end_date: "3/15/2017",
    category: "Development",
    location: "New York, NY",
    pledge_levels: {
        1: {
          project_id: 123,
          amount: $456,
          title: "White Christmas",
          description: "Longer description text here",
          delivery_date: "3/17/2017"
        },
    },
  },
}





```
