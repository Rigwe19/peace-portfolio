const photos = Array(6).fill(1);
const phot = photos.map((value, i) => {
  return {
    src: `/img/videos/Video_${value + i}.mp4`,
    poster: `/img/videos/Video_${value + i}.jpg`,
    // imgAlt: "Image not found"
  };
});
export default phot;
