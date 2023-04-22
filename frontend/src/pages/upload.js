import { storage } from "../config/firebaseConfig";

// Upload image
export const uploadImage = async (image) => {
  try {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress
        },
        (error) => {
          // Error
          reject(error);
        },
        async () => {
          // Completed
          const downloadUrl = await storage.ref('images').child(image.name).getDownloadURL();
          resolve(downloadUrl);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Upload video
export const uploadVideo = async (video) => {
  try {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress
        },
        (error) => {
          // Error
          reject(error);
        },
        async () => {
          // Completed
          const downloadUrl = await storage.ref('videos').child(video.name).getDownloadURL();
          resolve(downloadUrl);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Upload images in parallel
export const uploadImages = async (images) => {
  try {
    const urls = await Promise.all(
      images.map(async (image) => {
        const uploadTask = storage.ref(`imagesStart/${image.name}`).put(image);
        return new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Progress
            },
            (error) => {
              // Error
              reject(error);
            },
            async () => {
              // Completed
              const downloadUrl = await storage.ref('imagesStart').child(image.name).getDownloadURL();
              resolve(downloadUrl);
            }
          );
        });
      })
    );
    return urls;
  } catch (error) {
    console.log(error);
  }
};
