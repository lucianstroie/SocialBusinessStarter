
User.destroy_all

User.create({username: "guest", password: "starwars", name: "noName"})
User.create({username: "test", password: "starwars", name: "testName"})
