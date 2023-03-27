function getBrandState(apiCalls) {
  let objState = {};

  const { dataBrand } = apiCalls;

  dataBrand.forEach(({ state, title }) => {
    objState = { ...objState, [state]: { data: [], title } };
  });

  return objState;
}

export default getBrandState;
