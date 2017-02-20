export const createPledge = pledge => {
  return $.ajax({
    method: "POST",
    url: `api/pledges`,
    data: { pledge }
  });
};

export const updatePledge = pledge => {
  return $.ajax({
    method: "PATCH",
    url: `api/pledges/${pledge.id}`,
    data: { pledge }
  });
};

export const deletePledge = pledge => {
  return $.ajax({
    method: "DELETE",
    url: `api/pledges/${pledge.id}`
  });
};
