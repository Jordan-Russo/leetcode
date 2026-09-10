function inviteMoreWomen(L) {
  const genderBalance = L.reduce((acc, c) => acc + c, 0);
  return genderBalance > 0;
}