```javascript

{

  User: {
    999: {  
      username: "sbsuser",
      user_pic: "http://some.url.here",
      location: "New York, NY",
      pledges: []
    },
    888: {  
      username: "anothersbsuser",
      user_pic: "http://some.url.here",
      location: "New York, NY",
      pledges: [2]
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
    pledged: {
      pledger_id: 888,
      pledge_category_id: 2
    }
  },
  124: {
    user_id: 888,
    title: "Tech Development",
    subtitle: "Organize tech startup events.",
    project_pic: "http://some.other.url",
    end_date: "3/15/2017",
    category: "Development",
    location: "New York, NY",
    pledged: {
    },
  },
}

pledge_level: {
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
    3: {
      project_id: 123,
      amount: $456,
      title: "White Christmas",
      description: "Longer description text here",
      delivery_date: "3/17/2017"
    },
  },

  // Giving: {
  //   user_id: 000,
  //   pledge_category_id: 3
  // }
}



```
