function getPageState(apiCalls) {
  let objState = {};

  const { dataPage } = apiCalls;

  dataPage.forEach(({ state, title }) => {
    objState = { ...objState, [state]: { data: [], title } };
  });

  return objState;
}

export default getPageState;
