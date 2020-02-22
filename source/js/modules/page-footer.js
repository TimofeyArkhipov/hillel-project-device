let pageFooter = {
  render: async () => {
    let view = `
           <div class="page__wrapper">
        <div class="page-footer__top">
          <a class="logo">
            <img class="logo__image" src="img/logo-device-color.svg" width="163" height="36" alt="Интернет-магазин Device">
          </a>
          <ul class="page-footer__user-menu user-menu user-menu--contrast">
          </ul>
        </div>

        <div class="page-footer__middle">
          <p class="page-footer__contacts">г. Киев, Майдан Независимости, 1</p>
          <p class="page-footer__contacts">Тел.: +3 (803) 495-95-95</p>
        </div>

        <div class="page-footer__bottom">
          <ul class="page-footer__social social">
            <li class="social__item">
              <a class="social__link social__link--facebook" href="#" aria-label="Наш Фейсбук">
                <span class="visually-hidden">Фейсбук</span>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link social__link--instagram" href="#" aria-label="Наш Инстаграм">
                <span class="visually-hidden">Инстаграм</span>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link social__link--twitter" href="#" aria-label="Наш Твиттер">
                <span class="visually-hidden">Твиттер</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    `;
    return view
  },
  after_render: async () => { }

};

export default pageFooter;

