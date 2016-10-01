/**
 * Helper methods for determining environment
 * @module env
 * @memberof utils
 */

const VERSION = require('root-require')('package.json');

/**
 * Expose some env helper tools
 * @type {Object}
 */

 /**
  * Detect release environment
  * @type {String}
  */
export const __RELEASE__ = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

/**
 * Detect production environment
 * @type {String}
 */
export const __PRODUCTION__ = process.env.NODE_ENV === 'production';

/**
 * Detect testing environment
 * @type {String}
 */
export const __TESTING__ = process.env.NODE_ENV === 'testing';

/**
 * Detect dev environment
 * @type {String}
 */
export const __CI__ = process.env.CI === 'true' || process.env.CI === true;

/**
 * Detect dev environment
 * @type {String}
 */
export const __DEV__ = process.env.NODE_ENV === 'development';

/**
 * Returns version
 * @type string
 */
export const __VERSION__ = VERSION;

/**
 * Get an environment variable
 * @method getEnv
 * @param  {string} env var to get
 * @return {any}     returns variable
 */
export const getEnv = (env) => process.env[env];
