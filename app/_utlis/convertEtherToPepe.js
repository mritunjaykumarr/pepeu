export const calculatePepeCoinAmount = (usdAmount) => {
  const rate = 44000000; // 1 USD = 10,000 Pepe Coin
  return (usdAmount * rate).toFixed(4);
};
