module.exports = async (ability) => {
  return {
    statusCode: 200,
    id: Math.floor(Math.random() * 10 + 1),
    ability,
    message: "As habilidades desse pokemon foram enviadas com sucesso!",
  };
};
