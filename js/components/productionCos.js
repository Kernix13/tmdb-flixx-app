// Production companies
function prodCompanies(div, type) {
  const allCos = [];
  type.production_companies.forEach(co => {
    allCos.push(co.name);
  })
  // Had to add the production companies into their own paragraph for spacing
  const pCompanies = document.createElement('p');
  pCompanies.className = "companies";
  const pCompaniesText = document.createTextNode(allCos.join(", "));
  pCompanies.append(pCompaniesText);
  div.append(pCompanies);

  return div;
}

export default prodCompanies;