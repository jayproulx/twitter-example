# Domain objects aren't just another Value Object

Value Object implies too much focus on data storage and serialization (like their DTO counterparts).  Domain objects
can understand their own state, and provide their own service layer (or at least maintain a connection to a separate
service) and enough intelligence to manipulate themselves and communicate their state.

We don't need VO's and DTO's in JavaScript, that's what we have JSON and AJAX for.  Encapsulate your data transformation
here.