export default function validateEmail(email) {
  return email.length >= 4 && email.length > 0;
}
