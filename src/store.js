import { createStore } from 'redux';

const defaultData = {
  firstName: 'Vincent',
  lastName: 'van Gogh',
  about: 'A Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. His suicide at 37 followed years of mental illness and poverty.', 
  imageUrl: 'Vincent_van_Gogh.jpg',
};

const CHANGE_INFO = 'CHANGE_INFO';
const CHANGE_PHOTO = 'CHANGE_PHOTO';

const profileStore = createStore((state, action) => {
  switch (action.type) {
    case CHANGE_INFO:
      return Object.assign({}, state, {
        firstName: action.firstName, lastName: action.lastName, about: action.about,
      });
    case CHANGE_PHOTO:
      return Object.assign({}, state, { imageUrl: action.imageUrl });
    default:
      return state;
  }
}, defaultData);

export const changeInfo = (firstName, lastName, about) => ({
  type: CHANGE_INFO, firstName, lastName, about,
});
export const changePhoto = imageUrl => ({
  type: CHANGE_PHOTO, imageUrl,
});

export default profileStore;
