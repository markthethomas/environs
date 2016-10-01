<a name="utils.module_env"></a>

## env
Helper methods for determining environment.

* [env](#utils.module_env)
    * _static_
        * [.__RELEASE__](#utils.module_env.__RELEASE__) : <code>String</code>
        * [.__PRODUCTION__](#utils.module_env.__PRODUCTION__) : <code>String</code>
        * [.__TESTING__](#utils.module_env.__TESTING__) : <code>String</code>
        * [.__CI__](#utils.module_env.__CI__) : <code>String</code>
        * [.__DEV__](#utils.module_env.__DEV__) : <code>String</code>
        * [.__VERSION__](#utils.module_env.__VERSION__) : <code>string</code>
    * _inner_
        * [~getEnv(env)](#utils.module_env..getEnv) ⇒ <code>any</code>
        * [~__SET_PROJECT_VERSION__(version)](#utils.module_env..__SET_PROJECT_VERSION__)

<a name="utils.module_env.__RELEASE__"></a>

### env.__RELEASE__ : <code>String</code>
Detect release environment

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env.__PRODUCTION__"></a>

### env.__PRODUCTION__ : <code>String</code>
Detect production environment

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env.__TESTING__"></a>

### env.__TESTING__ : <code>String</code>
Detect testing environment

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env.__CI__"></a>

### env.__CI__ : <code>String</code>
Detect dev environment

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env.__DEV__"></a>

### env.__DEV__ : <code>String</code>
Detect dev environment

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env.__VERSION__"></a>

### env.__VERSION__ : <code>string</code>
Returns version

**Kind**: static constant of <code>[env](#utils.module_env)</code>  
<a name="utils.module_env..getEnv"></a>

### env~getEnv(env) ⇒ <code>any</code>
Get an environment variable

**Kind**: inner method of <code>[env](#utils.module_env)</code>  
**Returns**: <code>any</code> - returns variable  

| Param | Type | Description |
| --- | --- | --- |
| env | <code>string</code> | var to get |

<a name="utils.module_env..__SET_PROJECT_VERSION__"></a>

### env~__SET_PROJECT_VERSION__(version)
Set up the global project path

**Kind**: inner method of <code>[env](#utils.module_env)</code>  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | string path |
