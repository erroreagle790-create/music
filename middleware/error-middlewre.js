const middleerror = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "ERROR from BACKEND"; // Corrected typo here
    
    return res.status(status).json({ message, extraDetails });
  };
  
  module.exports = {middleerror};
  