export function isAuthenticated(user) {
  let validUser = true;
  if (!user) {
    validUser = false;
  }
  return validUser;
}

function SecurityCheck() {}
