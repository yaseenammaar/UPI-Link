function getUPILink(vpa, name, amount, rem)
{
  var upiLink;
  upiLink = "upi://pay?pa=" + vpa + "&pn=" + name + "&am="+amount+"&tn="+rem
  return upiLink;
}
