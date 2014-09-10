WAF.define('Pickadate', ['waf-core/widget'], function(widget) {

    var Pickadate = widget.create('Pickadate', {
        tagName: 'input',
        value: widget.property({
            defaultValue: 0
        }),


        init: function() {
            //            /* Define a custom event */
            //            this.fire('myEvent', {
            //                message: 'Hello'
            //            });
            var that = this;
            var $node = $(this.node);
            $node.pickadate({
                weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                showMonthsShort: true,

                onOpen: function() {
                    this.fire('open');
                }.bind(this),
                onClose: function() {
                    this.fire('close');
                }.bind(this),
                onSet: function() {
	                subscriber.pause();
	                that.value(new Date($node.val()));
	                subscriber.resume();                	
                    this.fire('set');
                }.bind(this)
            });
            var picker = $node.pickadate('picker');
            //            
            var subscriber = this.value.onChange(function(value) {
            	picker.set('select', value);
            });

        }
    });



    //    /* Map the custom event above to the DOM click event */
    //    Pickadate.mapDomEvents({
    //        'click': 'action'
    //    });
    return Pickadate;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */