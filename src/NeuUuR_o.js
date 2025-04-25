class NeuUuR_o {
  constructor() {
    this.configuration = null;
  }

  sendConfigurationTo(ReaAaS_n, configuration) {
    this.configuration = configuration;
    ReaAaS_n.receiveConfiguration(configuration);
  }
}

module.exports = NeuUuR_o;
