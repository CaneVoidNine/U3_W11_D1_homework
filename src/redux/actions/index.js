export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const GET_JOBS = "GET_JOBS";
export const addToFavouritesAction = (jobSelected) => {
  return {
    type: ADD_COMPANY,
    payload: jobSelected,
  };
};

export const removeFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVS,
    payload: i,
  };
};

export const getJobsAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetch");
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10"
      );
      if (response.ok) {
        let fetchedJobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        });
      } else {
        console.log("Error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
