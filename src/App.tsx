import React from "react";

const App: React.FC = () => {
  return (
    <div className="page">
      {/* Заголовок и описание */}
      <section className="hero full-screen">
  <div className="hero-content">
    <div className="text-block">
      <h1>Антиэйджинг: как сохранить молодость и замедлить старение</h1>
      <p className="subtitle">Авторский видеоурок врача-гинеколога с 30-летним стажем</p>
      <p className="description">
        Хотите замедлить старение, сохранить красоту, энергию и здоровье?<br />
        В этом видеоуроке вы получите пошаговый разбор того, что действительно работает — без лишних слов, сложных терминов и пустых обещаний.
      </p>
      <button className="btn-primary">Получить доступ к уроку</button>
      <p className="price-text">Стоимость — 1 900 ₽. Доступ к уроку остаётся у вас навсегда.</p>
    </div>
    <div className="image-wrapper">
      <img src="/kwork_antiaging-lesson/photo2.webp" alt="Врач-гинеколог" className="doctor-image" />
    </div>
  </div>
</section>

      {/* Практический инструмент */}
      <section className="section-white section">
        <h2>Это не теория — это практический инструмент</h2>
        <p className="section-text">
          За 2 часа вы узнаете, как работают ключевые механизмы старения и что
          можно сделать, чтобы сохранить молодость и здоровье надолго.
          <br />
          Всё основано на доказательной медицине, простым языком, с реальными
          примерами из практики.
        </p>
        <div className="video-preview">
          <span>Видео-превью</span>
        </div>
      </section>

      {/* Что вы получите */}
      <section className="section-light section">
        <h2>Что вы получите:</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            Эффективные антиэйджинг-протоколы для замедления старения
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            Схемы препаратов и витаминов под любой бюджет
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            Рабочие советы по гормонам, коже, энергии и питанию
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            Развенчание мифов — что реально помогает, а что пустая трата денег
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            Бонус: чек-лист препаратов для продления молодости
          </div>
        </div>
      </section>

      {/* Автор урока */}
      <section className="section-author section">
        <h2>Автор урока — врач, которому доверяют</h2>
        <div className="author-content">
          <div className="author-text">
            <p>
              Евгения Владимировна Гальченко — врач-гинеколог, эндокринолог, 30
              лет опыта, более 10 000 пациенток.
              <br />
              Автор курсов и видеоуроков для женщин о здоровье, гормонах и
              молодости
            </p>
          </div>
          <div className="author-image">
            <img
              src="/kwork_antiaging-lesson/photo.webp"
              alt="Евгения Гальченко"
            />
          </div>
        </div>
      </section>

      {/* Кому подойдёт */}
      <section className="section-pink section">
        <h2>Кому подойдёт этот урок:</h2>
        <ul className="target-list">
          <li>Женщинам 28–55 лет</li>
          <li>Тем, кто хочет сохранить красоту и энергию</li>
          <li>Тем, кто боится преждевременного старения</li>
          <li>Тем, кто хочет разобраться, что реально работает</li>
        </ul>
      </section>

      {/* Купить урок */}
      <section className="section-white section">
        <h2>Получите доступ к уроку прямо сейчас</h2>
        <p className="price">Цена: 1 900 ₽</p>
        <p className="small-text">
          После оплаты вы получите ссылку и сможете смотреть урок в любое время.
        </p>
        <button className="btn-primary">Купить урок</button>
        <p className="payment-note">Оплата через Яндекс.Кассу, безопасно.</p>
      </section>

      {/* Подарок */}
      <section className="section-light section">
        <h2>Подарок для вас</h2>
        <p className="gift-text">
          Вместе с уроком вы получите чек-лист препаратов и добавок, которые
          помогают продлить молодость.
          <br />
          Мы подобрали варианты под любой бюджет — от доступных до премиум.
        </p>
      </section>

      {/* Призыв к действию */}
      <section className="section-white section">
        <h2>Молодость — это решение. Примите его сегодня!</h2>
        <button className="btn-primary">Получить доступ к видеоуроку</button>
      </section>
    </div>
  );
};

export default App;
