

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};

export const fetchProject = id => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  });
};

export const createProject = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: formData,
    processData: false,
    contentType: false,
    dataType: 'json'

  });
};

export const updateProject = formData => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${formData.project.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  });
};
