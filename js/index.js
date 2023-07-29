// search

document.querySelector(".header__search").addEventListener("click",

  function() {

    document.querySelector(".header__form").classList.add("header__form--active");

    this.classList.add("active");
})

document.querySelector(".header__close").addEventListener("click",
  function() {

    let form = document.querySelector(".header__form");

    form.classList.remove("header__form--active");

    form.querySelector("input").value = "";

    document.querySelector(".header__search").classList.remove("active")
});

// input

const validation = new JustValidate('#form');

validation
  .addField('#name', [

  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Не короче 2 символов',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
])

.addField('#comment', [

  {
    rule: 'required',
    errorMessage: 'Введите сообщение',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Не короче 2 символов',
  },
  {
    rule: 'maxLength',
    value: 500,
    errorMessage: 'Слишком длинное сообщение',
  },
])

.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Email не корректный',
  }
]);


validation.onSuccess(function () {
  document.getElementById('form').submit();
});



