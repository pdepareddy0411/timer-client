const getTime = () => {
  return  moment(new Date, "American/New_York");
};

module.exports = {
  getTime,
};
