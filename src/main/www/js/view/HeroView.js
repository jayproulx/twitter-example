define ( ["jquery", "use!backbone", "model/user"],
	function ( $, Backbone, user )
	{

		return Backbone.View.extend ( {
			el: "#HeroView",

			initialize: function ()
			{
				user.bind ( "change", this.userUpdated, this );
			},

			// TODO: Really need a reset function
			render: function ()
			{
				if ( user.authenticated () )
				{
					this.$el.addClass ( "authenticated" );
				}
				else
				{
					this.$el.removeClass ( "authenticated" );
				}

				this.name ( user.get ( "name" ) );
				this.handle ( user.get ( "screen_name" ) );
				this.profile ( user.get ( "description" ) );
				this.location ( user.get ( "location" ) );
				this.url ( user.get ( "url" ) );

				this.$ ( ".user" ).removeClass ( "with-banner" );
				this.$(".user" ).css("background-image", "");

				if ( user.get ( "profile_banner_url" ) != undefined )
				{
					this.$ ( ".user" ).addClass( "with-banner" );
					this.$(".user" ).css("background-image", "url(" + user.get("profile_banner_url") + "/web)");
				}
			},

			userUpdated: function ()
			{
				this.render ();
			},

			// ACCESSORS

			name: function ( value )
			{
				if ( arguments.length )
				{
					this.$ ( ".user .name" ).text ( value );
				}

				return this.$ ( ".user .name" ).text ();
			},

			handle: function ( value )
			{
				if ( arguments.length )
				{
					if ( value.indexOf ( "@" ) != 0 )
					{
						value = "@" + value;
					}

					this.$ ( ".user .handle" ).text ( value );
				}

				return this.$ ( ".user .handle" ).text ();
			},

			profile: function ( value )
			{
				if ( arguments.length )
				{
					this.$ ( ".user .profile" ).text ( value );
				}

				return this.$ ( ".user .profile" ).text ();
			},

			location: function ( value )
			{
				if ( arguments.length )
				{
					this.$ ( ".user .location" ).text ( value );
				}

				return this.$ ( ".user .location" ).text ();
			},

			url: function ( value )
			{
				if ( arguments.length )
				{
					this.$ ( ".user .url" ).text ( value );
					this.$ ( ".user .url" ).attr ( "href", value );
				}

				return this.$ ( ".user .url" ).text ();
			}
		} );

	}
);