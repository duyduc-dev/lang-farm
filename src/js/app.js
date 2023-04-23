import {menuBuffet, salientFeatures} from './rawData/rawDataBuffetPage';
import {findOutMore} from './rawData/rawDataCompanyPage';
import {addressCompany, contact} from './rawData/rawDataContactPage';
import {buffetAddress, storeAddress} from './rawData/rawDataStoreAddress';
import {cards, cards2} from './rawData/rawDataStorePage';
import rawHeader from './rawData/rawHeader';

const app = () => {
  const setState = (key, value) => {
    if (typeof key !== 'string') return;
    Alpine.store(key, value);
  };

  return {
    globalState: () => {
      setState('rawHeader', rawHeader);
      setState('router', {
        pathname: location.pathname,
      });
    },

    header: () => {
      const header = document.querySelector('.header-page');
      if (header) {
        const elementRect = header.getBoundingClientRect();

        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const elementTop = elementRect.top + scrollY;
          setState('positionHeader', Math.floor(elementTop));
        });
      }
    },

    homePage: () => {
      const arrImg = Array.from(Array(16).keys()).map(
        (i) => `./dist/assets/images/home5/${i + 1}.jpg`
      );
      setState('pathArrayImage', arrImg);
      const arrImg2 = Array.from(Array(12).keys()).map(
        (i) => `./dist/assets/images/home6/${i + 1}.jpg`
      );
      setState('pathArrayImage2', arrImg2);
    },

    storePage: () => {
      setState('cards', cards);
      setState('cards2', cards2);
    },

    buffetPage: () => {
      setState('salientFeatures', salientFeatures);
      setState('menuBuffet', menuBuffet);
    },

    companyPage: () => {
      setState('findOutMore', findOutMore);
    },

    addressPage: () => {
      setState('storeAddress', storeAddress);
      setState('buffetAddress', buffetAddress);
    },

    contactPage: () => {
      setState('contact', contact);
      setState('addressCompany', addressCompany);
    },

    init() {
      this.globalState();
      this.header();
      this.homePage();
      this.storePage();
      this.buffetPage();
      this.companyPage();
      this.addressPage();
      this.contactPage();
    },
  };
};

export default app;
