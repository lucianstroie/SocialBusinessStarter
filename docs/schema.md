
# Schema Information

## users

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|username       |string   |not null, indexed, unique|
|email          |string   |not null, indexed, unique|
|image_url      |string   |                         |
|location       |string   |                         |
|f_name         |string   |not null, indexed        |
|l_name         |string   |not null, indexed        |
|password_digest|string   |not null                 |
|session_token  |string   |not null, indexed, unique|

## projects

|column name    |data type|details                                           |
|---------------|---------|--------------------------------------------------|
|id             |integer  |not null, primary key                             |
|user_id        |string   |not null, foreign key (references users), indexed |
|title          |string   |not null                                          |
|subtitle       |string   |not null                                          |
|body           |text     |not null                                          |
|project_pic    |string   |not null                                          |
|end_date       |date     |not null                                          |
|category       |string   |not null                                          |
|location       |string   |not null                                          |

## pledge

|column name    |data type|details                                             |
|---------------|---------|----------------------------------------------------|
|id             |integer  |not null, primary key                               |
|project_id     |date     |not null, foreign key (references project), indexed |
|level          |integer  |not null                                            |
|title          |string   |not null,                                           |
|description    |string   |not null,                                           |
|delivery_date  |date     |not null,                                           |

## giving

|column name    |data type|details                                            |
|---------------|---------|---------------------------------------------------|
|id             |integer  |not null, primary key                              |
|user_id        |integer  |not null, foreign key (references users), indexed  |
|pledge_id      |integer  |not null, foreign key (references pledge), indexed |
