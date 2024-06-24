const graphics = Array(2)
  .fill(1)
  .map((value, i) => ({
    src: `/img/graphics/Video_${value + i}.mp4`,
    poster: `/img/graphics/video_${value + i}.jpg`,
  }));

export default graphics;
