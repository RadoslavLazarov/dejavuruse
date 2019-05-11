const setLocale = (locale) => {
  let lang;

  if (locale) {
    lang = locale;
  } else {
    lang = 'bg';
  }

  return lang;
};

module.exports = {
  setLocale,
};
