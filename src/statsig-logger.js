/**
 * Statsig Logger Module
 * 
 * Provides event logging capabilities for workflow monitoring.
 */

const Statsig = require('statsig-node');

class Logger {
  constructor() {
    this.statsig = Statsig.initialize({
      key: process.env.STATSIG_KEY,
      environment: process.env.STATSIG_ENVIRONMENT
    });
  }

  logEvent(event, data) {
    Statsig.recordEvent(event, data);
  }
}

module.exports = new Logger();
