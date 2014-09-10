WAF.define('FacebookLike', ['waf-core/widget'], function(widget) {

    var FacebookLike = widget.create('FacebookLike', {
//        show-faces: widget.property({
//            type: 'boolean',
//            defaultValue: 'true',

//        }),
//        action: widget.property({
//            type: 'string',
//            defaultValue: 'like',

//        }),
//        href: widget.property({
//            type: 'string',
//            defaultValue: "https://developers.facebook.com/docs/plugins/",

//        }),
//        share: widget.property({
//            type: 'boolean',
//            defaultValue: 'true',

//        })

        init: function() {
            this.node.innerHTML = '<fb:fan class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></fb:fan>';
//            this.render();
//            this.action.onChange(this.render);

            var $node = $(this.node);
            $node.on('click', function(event) {
                alert('You liked this link');
            }.bind(this));

        },
        
        render: function(d,s,id) {
        	(function(d, s, id) {
  			var js, fjs = d.getElementsByTagName(s)[0];
  			if (d.getElementById(id)) return;
  			js = d.createElement(s); js.id = id;
  			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
 			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
        	}

    });

    return FacebookLike;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */