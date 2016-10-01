/**
 * Helper methods for determining environment
 * @module env
 * @memberof utils
 */

let VERSION;


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
export const __GET__ = (env) => process.env[env];

/**
 * Set up the global project path
 * @method __SET_PROJECT_VERSION__
 * @param  {string}             version string path
 */
export const __SET_PROJECT_VERSION__ = (version) => VERSION = version;
