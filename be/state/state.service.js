const repository = require("./state.repository");

async function stateService(req) {
  const repositoryResponse = await repository.stateRepository(req);
  return repositoryResponse;
}

module.exports = {
  stateService,
};
