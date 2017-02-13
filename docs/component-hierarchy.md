
## Component Hierarchy

**AuthFormContainer**
- SignUpForm
  - SignUpErrors
- LoginForm
  - LoginErrors

**NavigationContainer**
- Navigation
- Login/Logout
- SearchForm

**BrowseContainer**
- ProjectPreviewContainer

**NewProjectForm**
- GeneralInfoForm
- PledgeCategoryForm

**ProjectShowContainer**
- Header
  - UserContainer
  - Title
  - Picture
  - ProjectStatusContainer
- Body
  - Description
  - PledgeLevelContainer

  **SearchContainer**
- SearchResults
  - SearchResultsUser
  - SearchResultsProject
  - SearchResultsLocation
  - SearchResultsCategory



## Routes

|Path                                 |Component              |
|-------------------------------------|-----------------------|
|"/signup"                            |"AuthFormContainer"    |
|"/login"                             |"AuthFormContainer"    |
|"/browse"                            |"BrowseContainer"      |
|"/project/:projectID"                |"ProjectShowContainer" |
|"/project/new"                       |"NewProjectForm"       |
|"/search"                            |"SearchContainer"      |
