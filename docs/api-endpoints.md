
# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### projects
- `GET /api/projects/`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PATCH /api/projects/:id`
- `DELETE /api/projects`

### pledge_levels
- `POST /api/projects/:id/pledge_levels`
- `DELETE /api/projects/:id/pledge_levels/:id`
- `PATCH /api/projects/:id/pledge_levels/:id`

### giving
- `POST /api/giving`
- `DELETE /api/giving/:id`
