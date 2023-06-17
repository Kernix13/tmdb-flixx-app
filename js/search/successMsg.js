function createSuccessMsg(arr, div, param1, param2) {
  const successMsg = `${arr.length} of ${param1} Movie results found for "${param2}"`;
  const successMsgText = document.createTextNode(successMsg)
  return div.append(successMsgText);
}

export default createSuccessMsg;