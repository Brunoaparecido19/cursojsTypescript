import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MENSAGES = 'show-error-message';
const form = document.querySelector('#form') as HTMLFormElement;
const userName = document.querySelector('#user-name') as HTMLInputElement;
const lastName = document.querySelector('#last-name') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const repeatPassword = document.querySelector(
  '#repeat-password',
) as HTMLInputElement;

const submitEventFn = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  hideErrorMessage(target);
  checkForEmptyFields(userName, lastName, password, repeatPassword, email);
  checkEmail(email);
  checkEqualPasswords(password, repeatPassword);
  if (shouldSendForm(target)) console.log('formulario enviado');
};

form.addEventListener('submit', submitEventFn);

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) return showErrorMensage(input, 'E-mail inválido');
}
function checkEqualPasswords(
  password: HTMLInputElement,
  repeatPassword: HTMLInputElement,
): void {
  if (password.value !== repeatPassword.value) {
    showErrorMensage(password, 'Senha incompatível');
    showErrorMensage(repeatPassword, 'Senha incompatível');
  }
}
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (input.value === '') {
      showErrorMensage(input, 'Preencha este campo');
    }
  });
}
function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MENSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MENSAGES));
}
function showErrorMensage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MENSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  // eslint-disable-next-line prefer-const
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MENSAGES)
    .forEach(() => send === false);
  return send;
}
