function paginationElements(parent, child, id) {
  child.className = "btn btn-primary";
  child.setAttribute("id", id.toLowerCase())
  const childText = document.createTextNode(id)
  child.append(childText);
  return parent.append(child);
}

export default paginationElements;