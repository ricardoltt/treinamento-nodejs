function transform(abilityToTransform) {
  return {
    habilidade: {
      nome: abilityToTransform.ability.name,
    },
  };
}

module.exports = transform;
