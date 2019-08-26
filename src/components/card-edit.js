const data = {
  days: [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`],
  tags: [`repeat`, `cinema`, `entertaiment`],
  color: [`black`, `yellow`, `blue`, `green`, `pink`],
};
export const createTemplateCardEdit = () => `<article class="card card--edit card--yellow card--repeat">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >Here is a card with filled data</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="23 September 11:15 PM"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">yes</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          ${Array.from(data.days).map((it) => `
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-${it}-4"
                            name="repeat"
                            value="${it}"
                          />
                          <label class="card__repeat-day" for="repeat-${it}-4">${it}</label>`).join(``)}
                         </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${Array.from(data.tags).map((it) => `
                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="${it}"
                            class="card__hashtag-hidden-input"
                          />
                          <p class="card__hashtag-name">
                            #${it}
                          </p>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>`).join(``)}
                      </div>

                      <label>
                        <input
                          type="text"
                          class="card__hashtag-input"
                          name="hashtag-input"
                          placeholder="Type new hashtag here"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      ${Array.from(data.color).map((it) => `
                      <input
                        type="radio"
                        id="color-${it}-4"
                        class="card__color-input card__color-input--${it} visually-hidden"
                        name="color"
                        value="${it}"
                      />
                      <label
                        for="color-${it}-4"
                        class="card__color card__color--${it}"
                        >${it}</label
                      >`).join(``)}
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
