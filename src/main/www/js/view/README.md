# Naming Conventions

There's no real link between CSS, HTML and JS, they all assume the others exist, but they can't prove it.  The best way
to collaborate between the three is to establish a standard naming convention across the 3 languages.  Conventions help
the developer to understand the purpose and relationship of a piece of code without the context of it.

<table>
<tr>
	<th>Naming Convention</th>
	<th>JavaScript</th>
	<th>HTML</th>
	<th>CSS</th>
</tr>
<tr>
	<td>UpperCamelCase</td>
	<td>Used for naming a JavaScript prototype</td>
	<td>
		<p>In an id="UpperCamelCase" attribute, there will be only one JavaScript View (P/VM/VC) class controlling this
		particular element.</p>
		<p>In a class="UpperCamelCase" attribute, there could be many JavaScript View (P/VM/VC) classes (i.e. each of
		the items in a list)</p>
	</td>
	<td>See HTML</td>
</tr>
<tr>
	<td>lowerCamelCase or underscored_name (preferably not, this isn't PHP, keep your standards up!)</td>
	<td>Properties or methods</td>
	<td>
		<p>Typically used in templates to distinguish properties of the model used to populate</p>
		<p>Can also be used as selectors to identify an element as mapped to a property in a JavaScript View</p>
	</td>
	<td>Used for styling properties referenced in a JavaScript view.</td>
</tr>
<tr>
	<td>hyphenated-string</td>
	<td>Used in string form to assign state to an element.</td>
	<td>CSS specific selectors, lets the developer know that its a style / skin property, and not functional</td>
	<td>Used to denote style / skin specific selectors, they can also represent state</td>
</tr>
</table>

Note: The obvious ambiguity is a single lowercase word, but with all of the other provided context, it should be easy
enough for a developer to connect the dots.

Using the above, it would be possible to decode the following and find related code:
* #UserListView .UserItemView .profilePic.with-custom-image
* <div id="UserListView"></div>
* <li class="UserItemView"></li>

# Accessors

There are pro's and con's to storing data in the view.

Some languages or technologies provide inherent or native data binding functionality, but HTML and JavaScript do not
without the use of specific frameworks that support the concept.  Without data binding, synchronization of state between
the view and the Presenter/ViewModel/ViewController is often done manually.

Using an accessor to retrieve and store data in the DOM provides synchronization implicitly, while also removing the need
to store separate values in the P/VM/VC.