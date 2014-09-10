WAF.define('WaGage', ['waf-core/widget'], function(widget) {

    var WaGage = widget.create('WaGage', {
    	
    	
        init: function() {
            this.node.innerHTML = '';
            var waGage = new JustGage({
                id: this.node.id,
                value: this.value(),
                min: this.min(),
                max: this.max(),
                title: this.title(),
                showMinMax: this.showMinMax(),
                levelColorsGradient: true
            });

            this.value.onChange(function() {
                waGage.refresh(this.value());
            });
            
            var $node = $(this.node);
            if (!window.Designer) {
                $node.on('click', function(event) {
                    	var ratio = (event.offsetX) / $node.width() * 100;
                    	//waGage.refresh(parseInt(ratio));
                    	this.value(Math.round(ratio));
                }.bind(this));
			}
        },



        //        /* Create a property */
        value: widget.property({
            type: 'number',
            defaultValue: 20
        }),
        min: widget.property({
            type: 'number',
            defaultValue: 0
            //bindable: false
        }),
        max: widget.property({
            type: 'number',
            defaultValue: 100
            //bindable: false
        }),
        showMinMax: widget.property({
            type: 'boolean',
            defaultValue: true
            //        bindable: false
        }),
        title: widget.property({
            type: 'string',
            defaultValue: "myTitle",
            bindable: false
        })
    });
    return WaGage;

});


