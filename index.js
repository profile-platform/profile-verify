const yaml = require('js-yaml');

// Object.prototype.containsField is a helper function
// is assess whether an object contains a field of a
// given name and type.
Object.prototype.containsField = function(name, type) {
    return (
        this.hasOwnProperty(name) &&
        typeof this[name] == type
    )
}

// verifyProfile() takes a string representing
// the YAML data of a given profile and will
// throw an error if it encounters that the
// given YAML is not a valid profile
function verifyProfile(string) {
    try {
        let profile = yaml.safeLoad(string);
        
        if (profile) {
            if (profile.containsField('me', 'object')) {
                const me = profile.me;
                
                if (!profile.containsField('meta', 'object')) {
                    throw new Error('Profile is missing required field `meta`')
                } else if (!me.containsField('name', 'string')) {
                    throw new Error('Profile is missing required field `name`')
                    pass = false;
                } else if (!me.containsField('posts', 'object')) {
                    throw new Error('Profile is missing required field `posts`')
                    pass = false;
                }
            } else {
                throw new Error('Profile is missing required field `me`')
            }
        } else {
            throw new Error('Profile is empty');
        }
    
    } catch (e) {
        throw new Error(e);
    }

    return true;
}

verifyProfile(`
    meta:
        url: "https://winegum.netlify.com"

    me:
        name: "Jesse"
        posts:
            - content: "Hello World!"
`)

module.exports = {
    verifyProfile: verifyProfile
}