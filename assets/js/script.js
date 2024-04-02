const getAlbums = async (id) => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const res = await fetch(url);
    const data = await res.json();

    const filterData = data.filter((photo) => photo.albumId === id);
    const filterDataslice = filterData.slice(0, 19);

    return filterDataslice;
  } catch (error) {
    console.log(error);
  }
};
const sendInformation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Se envió la información");
    }, 3000);
  });
};

(async () => {
  const secondFunction = await sendInformation();
  const firstFunction = await getAlbums(2);
  console.log(firstFunction);
  console.log(secondFunction);
})();