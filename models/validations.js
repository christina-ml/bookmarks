// Adding a validateURL function - not best practice to have this in here along with our routes. Move into a separate file in models folder.
const validateURL = (req, res, next) => {
    console.log(
      "This function checks the validity of the URL entered by the user"
    );
  };

module.exports = { validateURL };