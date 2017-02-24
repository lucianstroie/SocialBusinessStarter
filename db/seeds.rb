
User.destroy_all

User.create({username: "guest", password: "starwars", name: "noName"})
User.create({username: "test", password: "starwars", name: "testName"})
User.create({username: "lstroie", password: "starwars", name: "Lucian Stroie"})
User.create({username: "manunrux", password: "starwars", name: "Emanuele and Ruxandra"})
User.create({username: "istvan", password: "starwars", name: "Istvan Mar",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/users/Poza_Mar+Istvan_Asociatia+Fructu+Secuiesc_FINAL.jpg"})

Project.destroy_all

Project.create({ user_id: User.all.fourth.id, goal: 150000, title: "Babele.co", subtitle: "works", body: "I wish",
  end_date: (Date.today + 30), category: "anything", location: "here"})
Project.create({ user_id: User.all.third.id, goal: 999999, title: "Second Project with a much longer multi line name",
  subtitle: "Second Project with a much longer multi line nameSecond Project with a much longer multi line nameSecond Project with a much longer multi line name",
  body: "I wish", end_date: (Date.today + 30), category: "anything", location: "here", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/winter-home.png"})
Project.create({ user_id: User.all.third.id, goal: 888, title: "nexxt", subtitle: "works", body: "I wish",
  end_date: (Date.today + 30), category: "anything", location: "here"})
Project.create({ user_id: User.all.fifth.id, goal: 100000, title: "Szekler Fruit Association", subtitle: "Generating income for approximately 1,000 families in over 25 disadvantaged communities by using processing, packaging and distribution provided by the Company to capitalize on local crop varieties and traditional orchard fruits and forest fruits, using traditional recipes and processing techniques.",
  body: "Istvan Székely Mar Fruit Association established in 2010 to generate revenues at rural communities using traditional varieties of fruit orchards, berries and mushrooms in the forests under the supervision of the local community. Istvan gained experience as a social entrepreneur in local economic development projects in the FAO / IPGRI implemented in Nepal, Morocco and Peru. In these projects the main goal was to identify natural resources with greater value and initiate economic development in the interest and participation of local communities. Similar initiatives have been launched in other countries such as Hungary, but a very moderate success which prompted Istvan to return home, where there are rural communities consistent.",
  end_date: (Date.today + 60), category: "Rural", location: "Odorhei, Romania",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/fructul_secuiesc.jpg"})
Project.create({ user_id: User.all.fourth.id, goal: 7, title: "third", subtitle: "works", body: "I wish",
  end_date: (Date.today + 60), category: "anything", location: "here"})

Pledge.destroy_all

Pledge.create({ project_id: Project.all.first.id, level: 5, title: "pledge one", description: "here is the des"})
Pledge.create({ project_id: Project.all.first.id, level: 25, title: "pledge two with a REALLLLLLLY long tititle", description: "pledge two with a REALLLLLLLY long tititle pledge two with a REALLLLLLLY long tititlepledge two with a REALLLLLLLY long tititlepledge two with a REALLLLLLLY long tititle"})
Pledge.create({ project_id: Project.all.first.id, level: 75, title: "pledge three", description: "here is the des"})
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
