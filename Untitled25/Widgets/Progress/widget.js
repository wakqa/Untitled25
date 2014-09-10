WAF.define('Progress', ['waf-core/widget'], function(widget) {

    var Progress = widget.create('Progress', {
        val: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        init: function() {
            this.node.innerHTML = '<div></div>';
            this.render();
            this.val.onChange(this.render);
            
            this.val.onChange(function(){
            	if (this.val() > 75 ) {
            	this.fire('overload', {value : this.val()});           	
            	}
            
            });
            
            
            var $node = $(this.node);
            $node.on('click',function(event){
            	
            	var ratio= event.offsetX / $node.width() *100
            	
            	
            	this.val(ratio);
            	}.bind(this));
        },
        render: function() {
            this.node.getElementsByTagName('div')[0].style.width = this.val() + '%';
            
        }
    });


    return Progress;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */