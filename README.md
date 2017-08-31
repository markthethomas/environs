<a name="utils.module_environs"></a>

## environs
Helper methods for determining environment


* [environs](#utils.module_environs)
    * _static_
        * [.__RELEASE__](#utils.module_environs.__RELEASE__) : <code>String</code>
        * [.__PRODUCTION__](#utils.module_environs.__PRODUCTION__) : <code>String</code>
        * [.__TESTING__](#utils.module_environs.__TESTING__) : <code>String</code>
        * [.__CI__](#utils.module_environs.__CI__) : <code>String</code>
        * [.__DEV__](#utils.module_environs.__DEV__) : <code>String</code>
        * [.__VERSION__](#utils.module_environs.__VERSION__) : <code>string</code>
    * _inner_
        * [~getEnv(env)](#utils.module_environs..getEnv) ⇒ <code>any</code>
        * [~__SET_PROJECT_VERSION__(version)](#utils.module_environs..__SET_PROJECT_VERSION__)

<a name="utils.module_environs.__RELEASE__"></a>

### environs.__RELEASE__ : <code>String</code>
Detect release environment

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs.__PRODUCTION__"></a>

### environs.__PRODUCTION__ : <code>String</code>
Detect production environment

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs.__TESTING__"></a>

### environs.__TESTING__ : <code>String</code>
Detect testing environment

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs.__CI__"></a>

### environs.__CI__ : <code>String</code>
Detect dev environment

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs.__DEV__"></a>

### environs.__DEV__ : <code>String</code>
Detect dev environment

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs.__VERSION__"></a>

### environs.__VERSION__ : <code>string</code>
Returns version

**Kind**: static constant of [<code>environs</code>](#utils.module_environs)  
<a name="utils.module_environs..getEnv"></a>

### environs~getEnv(env) ⇒ <code>any</code>
Get an environment variable

**Kind**: inner method of [<code>environs</code>](#utils.module_environs)  
**Returns**: <code>any</code> - returns variable  

| Param | Type | Description |
| --- | --- | --- |
| env | <code>string</code> | var to get |

<a name="utils.module_environs..__SET_PROJECT_VERSION__"></a>

### environs~__SET_PROJECT_VERSION__(version)
Set up the global project path

**Kind**: inner method of [<code>environs</code>](#utils.module_environs)  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | string path |

