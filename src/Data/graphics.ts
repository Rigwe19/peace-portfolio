const graphics = Array(8)
  .fill(1)
  .map((value, i) => ({
    original: `img/graphics/photo (${value + i}).jpg`,
    thumbnail: `img/graphics/photo (${value + i}).jpg`,
    // src: `/img/graphics/Video_${value + i}.mp4`,
    // poster: `/img/graphics/video_${value + i}.jpg`,
  }));

export default graphics;
