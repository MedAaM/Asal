function dateFormat(date) {
    const data = new Date(date);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    return new Date(`${year}, ${month}, ${day}`);
  }
  
  module.exports = dateFormat;
  