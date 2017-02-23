export const fetchGiving = id => {
  return $.ajax({
    method: "GET",
    url: `api/givings/${id}`
  });
};


export const createGiving = giving => {
  return $.ajax({
    method: "POST",
    url: `api/givings`,
    data: { giving }
  });
};
