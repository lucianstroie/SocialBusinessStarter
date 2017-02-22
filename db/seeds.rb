
User.destroy_all

User.create({username: "guest", password: "starwars", name: "noName"})
User.create({username: "test", password: "starwars", name: "testName"})

Project.destroy_all

Project.create({ user_id: User.all.first.id, goal: 999, title: "first", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, goal: 888, title: "nexxt", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})
Project.create({ user_id: User.all.second.id, goal: 777, title: "third", subtitle: "works", body: "I wish", end_date: Date.new, category: "anything", location: "here"})

Pledge.destroy_all

Pledge.create({ project_id: Project.all.first.id, level: 5, title: "pledge one", description: "here is the des"})
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
