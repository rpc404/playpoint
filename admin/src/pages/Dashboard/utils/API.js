import axios from "axios";

export const renderImage = async (filename) => {
  let localImageURI = await axios.get(
    import.meta.env.VITE_SERVER_URI + "/" + filename
  );

  const imgURI = await URL.createObjectURL(
    new Blob([localImageURI], { type: "image/png" })
  );

  console.log(typeof imgURI);
};

export const getCSRFToken = async () => {
  const csrfToken = await axios
    .get(import.meta.env.VITE_SERVER_URI)

    return csrfToken?.data?.csrfToken
};
