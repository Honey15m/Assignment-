import { Page } from '@g4/prova';
import { assert } from 'chai';

const bagElements = {
  bagPageTitle: '//title',
  bagPageContinue: "[data-hook='ancillaries-page_continue-popup']",
  noBagContinue: "[data-hook='ancillaries-continue-popup_button_continue']",
};

const supportBagElements = {
  lithiumBattery: "[data-hook='prohibited-items-icon-label_lithium-battery']",
};

class BagPage extends Page{

  validateBagPageIsLoaded(BagPageTitle) {
    $(supportBagElements.lithiumBattery).scrollIntoView();
    $(bagElements.bagPageContinue).waitForDisplayed({ timeout: 5000 });
    assert.equal(
      $(bagElements.bagPageTitle).getTitle(),
      BagPageTitle,
      'Bag selection page failed to load'
    );
  }

  clickBagPageContinue(){
    this.clickElement($(bagElements.bagPageContinue));
    console.log('Bag page continue button is clicked');
  }

  noClickBagContinue(){
    $(bagElements.noBagContinue).waitForDisplayed({ timeout: 5000 });
    this.clickElement($(bagElements.noBagContinue));
  }
}

export default new BagPage();
