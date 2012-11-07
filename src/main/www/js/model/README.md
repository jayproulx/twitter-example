# Models, as in the M in MVC

Require.js provides us an interesting opportunity for creating shared models.  Since Require.js simply maps strings
to whatever is returned from the define closure, we can create singletons that can be shared across multiple classes
with no additional overhead.

Try not to destroy and re-create these objects, since other objects may be depending on events bound to them.

Models are objects, not prototypes, so they're named using lowercase.  See ../view/README.md for more information on
naming conventions.