
User.destroy_all

User.create({username: "guest", password: "starwars", name: "Bill Drayton",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/users/bear.png"})
User.create({username: "test", password: "starwars", name: "testName"})
User.create({username: "lstroie", password: "starwars", name: "Lucian Stroie",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/users/owl.png"})
User.create({username: "manunrux", password: "starwars", name: "Emanuele and Ruxandra"})
User.create({username: "istvan", password: "starwars", name: "Istvan Mar",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/users/Poza_Mar+Istvan_Asociatia+Fructu+Secuiesc_FINAL.jpg"})

Project.destroy_all

p1 = Project.create({ user_id: User.all.third.id, goal: 2500, title: "EcoTourism",
  body: "One of the first surprising things about Romania is the sharp division between two realities that, while coexisting, each belongs to a completely different worlds. Slightly over half of the country’s population lives in rural settlements, where over two thirds of the household consumption is based on self-made goods, school dropout rate is constantly increasing and incomes are about 40 % lower than in the urbanized part of the country",
  subtitle: "The Green Entrepreneurship Program has drawn up a development model focused on creation of local business opportunities. It started  from the idea that Romania’s extremely rich natural and cultural heritage of Romania, proven
by its many Natura 2000 sites and national
parks, its well-preserved customs and traditions,
its traditional lifestyle and its diverse wildlife.",
  end_date: (Date.today + 30), category: "EcoTourism", location: "Romania", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/EcoTourism.png"})
p2 = Project.create({ user_id: User.all.third.id, goal: 8080, title: "Rural Entrepreneurship", subtitle: "Many rural areas are still poor, underdeveloped and lacking opportunities, despite the many national programs currently aimed at addressing these shortfalls.",
   body: "Compared to the potential, the underdevelopment of this field can be accounted for by a sum of factors:
poor communication among farmers in the same community, lack of information on functioning initiatives
of this kind, the feeble involvement of local authorities, lack of knowledge of European and state
agricultural development programs, particularly in regions where there are no Local Action Groups. These
shortcomings are often complemented by apathy, lack of involvement and lack of confidence in the idea
of association, often caused by the failure of past initiatives.
It is also possible to establish a clear correlation between the level of social capital of communities
involved in the project and the exisdtance of Local Action Groups in the area. Knowledge of European
legislation in agriculture (NRDP measures) and previous experience of running community projects
through Local Action Groups prove to have a direct impact on the social capital of the community -
aspects which are many times critical to the success of agricultural associations initiatives.",
  end_date: (Date.today + 30), category: "Agriculture", location: "Romania", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/winter-home.png"})
p3 = Project.create({ user_id: User.all.third.id, goal: 1000000, title: "Romanian Innovation Commercialization Assistance Program",
  subtitle: "RICAP helps Romanian technology entrepreneurs and innovators to develop their businesses and take their products to international markets.",
  body: "We identified innovative companies in Romania that have remarkable products with potential for the global market, in technology areas that range from ICT to (renewable) energy, clean-tech, agritech, nanomaterials and health care.

RICAP participants work with a dedicated team of accomplished US-based commercialization advisors and Romania-based local mentors to further develop their knowledge and commercialization tools, as well as to connect to a global network of potential partners and investors.

The first edition of the program saw 30 innovators addressing specific commercialization needs, working on go-to-market strategies and establishing over 60 international strategic introductions.",
  end_date: (Date.today + 60), category: "Entrepreneurship", location: "Romania",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/axosuits-2.png"})
p4 = Project.create({ user_id: User.all.fifth.id, goal: 1000, title: "Szekler Fruit Association", subtitle: "Generating income for approximately 1,000 families in over 25 disadvantaged communities by using processing, packaging and distribution provided by the Company to capitalize on local crop varieties and traditional orchard fruits and forest fruits, using traditional recipes and processing techniques.",
  body: "Istvan Székely Mar Fruit Association established in 2010 to generate revenues at rural communities using traditional varieties of fruit orchards, berries and mushrooms in the forests under the supervision of the local community. Istvan gained experience as a social entrepreneur in local economic development projects in the FAO / IPGRI implemented in Nepal, Morocco and Peru. In these projects the main goal was to identify natural resources with greater value and initiate economic development in the interest and participation of local communities. Similar initiatives have been launched in other countries such as Hungary, but a very moderate success which prompted Istvan to return home, where there are rural communities consistent.",
  end_date: (Date.today + 60), category: "Rural", location: "Odorhei, Romania",
  image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/fructul_secuiesc.jpg"})
p5 = Project.create({ user_id: User.all.third.id, goal: 50000, title: "Ikedoo", subtitle: "IKEDOO is a research institute which innovates in the field of educational programs for children. We truly believe that abstract concepts can be easily accumulated and assimilated if the user is exposed to a relevant experience. We offer children an educational solution based on experimentation.",
  body: "Kids aged 3 to 6 need to develop their cognitive and motor skills. Kids aged 6 to 12 are constantly challenged to perform in school and develop the skills needed to adapt to real life: critical thinking, collaboration, social skills, etc. Underprivileged children are lacking options to pursue their dreams and aspirations and are drown away from education and/ or vocational education because they think it doesn't pay off",
  end_date: (Date.today + 60), category: "Education", location: "Bucuresti", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Ikedoo.jpg"})
p6 = Project.create({ user_id: User.all.third.id, goal: 250000, title: "Innovation Labs", subtitle: "A 3-month program for young Romanian teams to make your ideas into vibrant IT products!.",
  body: "Take a journey off the beaten path:
Choose your track from one of the Smart Teritories categories: Agriculture, Cyber-security, Energy, Health & Lifestyle, Smart Cities or Retail;
Experience the Hackathon: develop and pitch a first prototype of your idea in front of a jury including top-level people from diverse industries in Romania;
Get selected and join a 3-month training period in which you learn to develop, grow, fine-tune, finance and expand your startup into a viable business;
It’s Demo Day: Pitch your final prototype in an electrifying event!
Top mentors, industry leaders and angel investors are eager to hear your idea and to guide your steps pedal-to-the-metal towards success!",
  end_date: (Date.today + 60), category: "Entrepreneurship", location: "Romania", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/innovation_labs.jpg"})
p7 = Project.create({ user_id: User.all.third.id, goal: 3000, title: "MEZIAD CAVE", subtitle: "The cave houses the
longest cave route in Romania for mass tourism, the second largest bat colony in Romania and
fascinating archaeological relics.",
  body: "The number of tourists visiting Meziad has tripled,
thanks partly to cave decoration and partly to a
strong promotional campaign conducted in various
media and with various partners, ranging from
articles in the local press, cultural events organized
inside the cave, partnering with hotels in the area,
participation in local fairs, to promotion via social
media and joint events with travel agencies. In
other words, CAPDD did not miss any opportunity
to “sell” the cave to visitors from all around the
country, from Hungary and other countries.
Meziad is the only cave in the area where organized
groups of tourists and schools are offered
cave visit tickets at a discount.",
  end_date: (Date.today + 60), category: "EcoTourism", location: "Bihor, Romania", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Pestera-Meziad.jpg"})
p8 = Project.create({ user_id: User.all.fourth.id, goal: 5000, title: "Babele.co",
  subtitle: "Babele enables society to collaborate and solve the most urgent challenges of our time. It is an open innovation center that helps impact entrepreneurs in refining their strategies through crowd- mentoring and peer-learning.",
  body: "Entrepreneurs & Innovators develop their business model and involve their key stakeholder (team, advisors, partners, customers, etc.) in order to validate their assumptions and tackle their business challenges. They capitalize on the ideas and feedback of their mentors and of external experts, that want to play an active role in supporting the social enterprise achieving its mission.
  Citizens, Mentors and other entrepreneurs are matched to the businesses according to their interests and competences. They can contribute by submitting ideas, sharing documents and giving feedback to the entrepreneurs. They can earn reputation
  Universities, incubators, and CSR driven companies can create communities inside the platform to engage their networks (entrepreneurs, experts, investors, alumni, etc.) and leverage on the collective wisdom and resources of all the members to create fully validated social innovation initiatives. They can stimulate peer-learning among their own projects, engage with their mentors, but also exchange with other organizations accelerating social innovation.",
  end_date: (Date.today + 30), category: "Entrepreneurship", location: "Global", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Babele.png"})
p9 = Project.create({ user_id: User.all.third.id, goal: 30000, title: "SLOW TRAVEL:
A NEW WAY TO DISCOVER
THE DANUBE DELTA",
  subtitle: "The Danube Delta, one of the dream destinations for any wildlife fan, remains still underestimated
by those who visit it.",
  body: "Tourists visiting the Danube Delta do that at a much too quick a pace: stays is
very short, speedy motorboats are the most popular transport means and the amount of money
gained by the local community from this kind of tourist visits is small.",
  end_date: (Date.today + 30), category: "Entrepreneurship", location: "Danube Delta", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/delta.png"})
p10 = Project.create({ user_id: User.all.third.id, goal: 3000, title: "Butterfly Development",
  subtitle: "What is community gardening and how can it help to fight for Roma inclusion?",
  body: "Butterfly Development launched their highly successful programme called Pro Ratatouille in 2012 in Borsod County. Eva Ekler, Katalin Réthy and Melinda Kassai (photo above) focuse on disadvantaged rural communities where there are no or very scarcely available working opportunities. This initiative proves also to be successful in tackling rural unemployment, poverty and isolation. It has become so successful that the programme is not only present in a couple of settlements (Hejőszalonta, Hejőkeresztúr, Bükkaranyos) but has elevated into a micro-regional programme, the Hejő-Sajó village network.",
  end_date: (Date.today + 30), category: "Agriculture", location: "Borsod, Hungary", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Butterfly+Development.jpg"})
p11 = Project.create({ user_id: User.all.third.id, goal: 30000, title: "Romani Design",
  subtitle: "In addition to designing a unique brand of clothing and accessories, Erika and Romani Design Studio is also dedicated to providing local education by hosting creative classes for disadvantaged children and editing and publishing Glinda, a Roma youth magazine.",
  body: "The unique handmade purses, bags and accessories complementing the Romani Design dresses are designed and crafted by Helena Varga. Drawing her inspiration from the years of educational and social field work carried out along with her sister in disadvantaged Roma communities and schools, Helena creates accessories reflecting authentic styles and forms of Roma traditions.

After immersing herself for a while in the art of crafting jewelry, her attention was drawn to working with different fabrics, textures and colors to design embroidered picturesque art bags. She loves to combine leather, textile, cashmere and silk with embroideries of intertwined boughs of red roses and other vivid flowers.

All of her bags and purses are handmade, unique, one-of-a-kind items.",
  end_date: (Date.today + 30), category: "Entrepreneurship", location: "Vienna, Austria", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Romani+Design.jpg"})
p12 = Project.create({ user_id: User.all.third.id, goal: 300, title: "Meşteshukar ButiQ",
  subtitle: "Meşteshukar ButiQ ( MBQ ) is a network of social economy enterprises and an active supporter of Roma traditional crafts. Meşteshukar ButiQ managed to bring a fresh vision on Roma crafts and revive traditional products and objects with contemporary design.",
  body: "Intended to meet contemporary needs of life reconnection and protecting of the natural environment, products and services offered by Meşteshukar ButiQ involve a clean raw material, knowledge of the craft passed through a long trial time, skilful hands and an immediate utility.",
  end_date: (Date.today + 30), category: "Entrepreneurship", location: "Bucuresti, Romania", image: "https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/mest-boutique.jpg"})

Pledge.destroy_all
projects = Project.all.to_a
Pledge.create!({ project_id: p1.id, level: 5, title: "Wildlife Photo", description: "The program director is also an award winning wildlife photographer!"})
Pledge.create!({ project_id: p1.id, level: 25, title: "Day trip to one of these sites", description: "Receive and tour of one of these locations guided by a local specialist in conservation."})
Pledge.create!({ project_id: p1.id, level: 75, title: "Full Tour!", description: "Adventure through the Carpatian ark visiting each of the 10 EcoTourism destinations that highlight the best of Romania's natural beauty."})
Pledge.create!({ project_id: p2.id, level: 5, title: "Thank You Letter", description: "One of the farmers from the program will send you a hand written letter to thank you for your support."})
Pledge.create!({ project_id: p2.id, level: 10, title: "Box of Seasonal Vegetables", description: "By purchasing directly from a farmer, your able buy enough vegetables to feed a family of 4 for a week for less than 10 dollars!"})
Pledge.create!({ project_id: p2.id, level: 100, title: "A week in the countryside", description: "Spend a week living with traditional farmers is the closest you will ever get to traveling back in time to agrarian Europe."})
Pledge.create!({ project_id: p3.id, level: 100, title: "Consultation with Tech Transfer Expert", description: "If you have a product or applied research that you need to comercialize, consult with one of our experts!"})
Pledge.create!({ project_id: p3.id, level: 3000, title: "Unit Cost for Axosuit's Exoskeleton", description: "Spend a week living with traditional farmers is the closest you will ever get to traveling back in time to agrarian Europe."})
Pledge.create!({ project_id: p3.id, level: 100000, title: "Price of Next Least Expensive Alternative", description: "Out of the price rage of most who need it!"})
Pledge.create!({ project_id: p4.id, level: 2, title: "Jams and Preserves", description: "Support this community based agricultural program by trying one of their many food items."})
Pledge.create!({ project_id: p4.id, level: 3, title: "Frozen Forest Fruits", description: "Collected by hand from the forest surrounding their villages!"})
Pledge.create!({ project_id: p4.id, level: 10, title: "Cold Pressed Apple Juice", description: "A local specialty since this project managed to preserve hundreds of local apple varieties through their non-profit seed bank."})
Pledge.create!({ project_id: p5.id, level: 20, title: "Single Session", description: "Build a house with bick powered electricity plumbing and thermal insulation for kids ages 5 to 13."})
Pledge.create!({ project_id: p5.id, level: 300, title: "Experiential Learning", description: "Bring a full workshop to a school near you."})
Pledge.create!({ project_id: p5.id, level: 1000, title: "Mini Engineer", description: "The perfect combination of fun with guided hands on learning to inspire a young Engineer!"})
Pledge.create!({ project_id: p6.id, level: 20, title: "Practice Your Pitch", description: "To sell is human, and if you can't sell your startup, no one will!"})
Pledge.create!({ project_id: p6.id, level: 100, title: "Mentoring", description: "Work with some of the most successful people in the Romanian tech industry."})
Pledge.create!({ project_id: p6.id, level: 5000, title: "Present in Front of Investors", description: "Build a product people will want and the checkbooks will come out!"})
Pledge.create!({ project_id: p7.id, level: 3, title: "Entrance to the Cave", description: "Bring a full workshop to a school near you."})
Pledge.create!({ project_id: p7.id, level: 10, title: "Guided Tour", description: "The perfect combination of fun with guided hands on learning to inspire a young Engineer!"})
Pledge.create!({ project_id: p7.id, level: 100, title: "Camping Retreat", description: "The perfect combination of fun with guided hands on learning to inspire a young Engineer!"})
Pledge.create!({ project_id: p8.id, level: 30, title: "Online Mentoring", description: "Bring a full workshop to a hub near you."})
Pledge.create!({ project_id: p8.id, level: 100, title: "Workshop", description: "Get inspired to build a business that helps you be the change you wish to see in this world!"})
Pledge.create!({ project_id: p8.id, level: 500, title: "Crowdsourcing Session", description: "Access the global network of social entrepreneurs to make the biggest impact possible possible."})
Pledge.create!({ project_id: p9.id, level: 3, title: "Wildlife Photo", description: "The program director is also an award winning wildlife photographer!"})
Pledge.create!({ project_id: p9.id, level: 100, title: "Conservation Workshop", description: "Get inspired to build a business that helps improve the natural world arround you!"})
Pledge.create!({ project_id: p9.id, level: 200, title: "Week Long Retreat", description: "Visit the second largest protected area in Europe that is home to one of the largest concentrations of birds in the world."})
Pledge.create!({ project_id: p10.id, level: 3, title: "Jams and Preserves", description: "Support this community based agricultural program by trying one of their many food items."})
Pledge.create!({ project_id: p10.id, level: 10, title: "Box of Seasonal Vegetables", description: "By purchasing directly from a farmer, your able buy enough vegetables to feed a family of 4 for a week for less than 10 dollars!"})
Pledge.create!({ project_id: p10.id, level: 100, title: "A week in the countryside", description: "Spend a week living with traditional farmers is the closest you will ever get to traveling back in time to agrarian Europe."})
Pledge.create!({ project_id: p11.id, level: 30, title: "Scarf", description: "Support this a roma community of craftsmen and women through this unique designer scarf."})
Pledge.create!({ project_id: p11.id, level: 100, title: "Purses and Bags", description: "Artisanal hand made bags that help fund integration and education programs."})
Pledge.create!({ project_id: p11.id, level: 1000, title: "Couture Dresses", description: "Wear a dress that has been worn in either Paris and Milan Fashion week that makes a statement."})
Pledge.create!({ project_id: p12.id, level: 30, title: "Earings", description: "It takes over 1000 individual hamer strikes to make these custom copper earings."})
Pledge.create!({ project_id: p12.id, level: 100, title: "Coffee Pot", description: "A hand made coffee pot where the individual hamer strikes are still visible represents the resiliance of a marginalized people."})
Pledge.create!({ project_id: p12.id, level: 300, title: "Unique Art", description: "Multi-generational craftsmen that have been honing their skills for their entire lives don't produce disposable products."})


Giving.destroy_all
pledges = Pledge.all.to_a
20.times{ Giving.create( user_id: User.first.id, pledge_id: pledges[1].id) }
35.times{ Giving.create({ user_id: User.first.id, pledge_id: pledges[2].id}) }
21.times{ Giving.create({ user_id: User.first.id, pledge_id: pledges[3].id}) }
25.times{ Giving.create({ user_id: User.second.id, pledge_id: pledges[4].id}) }
29.times{ Giving.create({ user_id: User.second.id, pledge_id: pledges[5].id}) }
10.times{ Giving.create({ user_id: User.second.id, pledge_id: pledges[6].id}) }
50.times{ Giving.create({ user_id: User.third.id, pledge_id: pledges[7].id}) }
20.times{ Giving.create({ user_id: User.third.id, pledge_id: pledges[8].id}) }
15.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[10].id}) }
15.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[11].id}) }
1.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[12].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[13].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[14].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[15].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[16].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[17].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[18].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[19].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[20].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[21].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[22].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[23].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[24].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[25].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[26].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[27].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[28].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[29].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[30].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[31].id}) }
20.times{ Giving.create({ user_id: User.fourth.id, pledge_id: pledges[32].id}) }


# Giving.create!({ user_id: User.first.id, pledge_id: pledges[1].id})
# Giving.create!({ user_id: User.first.id, pledge_id: pledges[2].id})
# Giving.create!({ user_id: User.first.id, pledge_id: pledges[3].id})
# Giving.create!({ user_id: User.first.id, pledge_id: pledges[1].id})
# Giving.create!({ user_id: User.first.id, pledge_id: pledges[2].id})
# Giving.create!({ user_id: User.first.id, pledge_id: pledges[3].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[1].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[2].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[3].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[1].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[2].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[3].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[1].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[2].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[3].id})
# Giving.create!({ user_id: User.second.id, pledge_id: pledges[4].id})
