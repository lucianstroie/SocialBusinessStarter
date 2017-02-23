
User.destroy_all

User.create({username: "guest", password: "starwars", name: "noName"})
User.create({username: "test", password: "starwars", name: "testName"})
User.create({username: "user3", password: "starwars", name: "Short"})
User.create({username: "user4", password: "starwars", name: "REALLLLLLLY LONNGGGG NAMMME"})

Project.destroy_all

Project.create({ user_id: User.all.first.id, goal: 999999, title: "first", subtitle: "works", body: "I wish", end_date: (Date.today + 30), category: "anything", location: "here"})
Project.create({ user_id: User.all.first.id, goal: 999999, title: "Second Project with a much longer multi line name", subtitle: "Second Project with a much longer multi line nameSecond Project with a much longer multi line nameSecond Project with a much longer multi line name", body: "I wish", end_date: (Date.today + 30), category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, goal: 888, title: "nexxt", subtitle: "works", body: "I wish", end_date: (Date.today + 30), category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, goal: 7, title: "third", subtitle: "works", body: "I wish", end_date: (Date.today + 60), category: "anything", location: "here"})
Project.create({ user_id: User.all.fourth.id, goal: 7, title: "third", subtitle: "works", body: "I wish", end_date: (Date.today + 60), category: "anything", location: "here"})

Pledge.destroy_all

Pledge.create({ project_id: Project.all.first.id, level: 5, title: "pledge one", description: "here is the des"})
Pledge.create({ project_id: Project.all.first.id, level: 5, title: "pledge two with a REALLLLLLLY long tititle", description: "pledge two with a REALLLLLLLY long tititle pledge two with a REALLLLLLLY long tititlepledge two with a REALLLLLLLY long tititlepledge two with a REALLLLLLLY long tititle"})
Pledge.create({ project_id: Project.all.first.id, level: 5, title: "pledge three", description: "here is the des"})
Pledge.create({ project_id: Project.all.second.id, level: 99, title: "pledge two", description: "here is the des"})
Pledge.create({ project_id: Project.all.second.id, level: 9, title: "pledge twotwo", description: "here is the des"})

Giving.destroy_all

Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.first.id, pledge_id: Pledge.first.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.second.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.second.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.second.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
Giving.create({ user_id: User.second.id, pledge_id: Pledge.third.id})
