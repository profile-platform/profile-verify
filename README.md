# Profile Verify

The module exposes the function `verifyProfile` which takes a single argument, a string representing the YAML file, and will throw an Error if the profile is not valid.

```
    const verify = require('profile-verify')
    verify.verifyProfile('...')
```