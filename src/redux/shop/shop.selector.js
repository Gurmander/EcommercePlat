import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }

const selectShop = state => state.shop;


export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
  );
  
// Since we have converted collections to object, we need to convert them back to arrays so we can run array fn like .find() etc on it
// Object.key- returns the keys in array of specific object passed
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.key(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  collections => collections[collectionUrlParam]
);