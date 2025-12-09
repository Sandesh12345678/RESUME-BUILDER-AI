import ImageKit from '@imagekit/nodejs';


const imagekit = new ImageKit({
  privateKey: process.env.IMAGIKIT_PRIVATE_KEY,//This is the default and can be overridden
  
});

export default imagekit;