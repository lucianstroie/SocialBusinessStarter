
User.destroy_all

User.create({username: "guest", password: "starwars", name: "noName"})
User.create({username: "test", password: "starwars", name: "testName"})

Project.destroy_all

Project.create({ user_id: User.all.first.id, title: "first", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, title: "nexxt", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, title: "third", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})
