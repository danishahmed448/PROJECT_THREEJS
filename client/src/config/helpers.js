export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");//Select canvas element
  const dataURL = canvas.toDataURL();//Convert to dataURL format
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";//Indicates this file is for download rather than display and passes default file name of downloaded image
  document.body.appendChild(link);//adds an <a></a> tag to the end of body (within)
  link.click();//Simulates mouseclick on an element
  document.body.removeChild(link);//Remove the link node from body
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
