/* Add custom attribute to HTML element
 * @param htmlElement
 * @param attributeName
 * @param attributeValue
 */
function addAttribute(htmlElement, attributeName, attributeValue) {
	//Create new attribute and set value
	var attribute = document.createAttribute(attributeName);
    attribute.value= attributeValue;
    //Set attribute
    htmlElement.setAttributeNode(attribute);
    return htmlElement;
}
/**
 * Override Ext.form.Field to add a custom attribute "autoid"
 *  to <label></label> tag
 */
Ext.override(Ext.form.Field, {
	afterRender : Ext.Function.createSequence(function() {
        if (this.itemId && this.getActionEl()) {               
		this.getActionEl().el.dom.setAttribute('autoid',this.itemId);
		this.el.dom.setAttribute('autoid',this.itemId);
        };
	},Ext.form.Field.afterRender)
});

/**
 * Override Ext.Button to add a custom attribute "autoid"
 *  to <Button> tag
 */
Ext.override(Ext.button.Button, {
	afterRender : Ext.Function.createSequence(function() {
        if (this.itemId && this.getActionEl()) {            
		this.getActionEl().el.dom.setAttribute('autoid',this.itemId);
        };
	},Ext.button.Button.afterRender)
});

/**
 * Override Ext.tab.tab to add a custom attribute "autoid"
 *  to <Button> tag
 */
Ext.override(Ext.tab.Tab, {
	afterRender : Ext.Function.createSequence(function() {
		if(this.card != undefined){
			 if (this.card.itemId && this.getActionEl()) {            
					this.getActionEl().el.dom.setAttribute('autoid',this.card.itemId);
			   };
		};
       
	},Ext.tab.Tab.afterRender)
});

/**
 * Override Ext.tab.Panel to add a custom attribute "autoid"
 *  to <Button> tag
 */

Ext.override(Ext.tab.Panel, {
	afterRender : Ext.Function.createSequence(function() {
        if (this.itemId && this.getActionEl()) {            
		this.getActionEl().el.dom.setAttribute('autoid',this.itemId);
        };
        this.callParent(arguments);
	},Ext.tab.Panel.afterRender)
});

/**
 * Override Ext.menu.Item to add a custom attribute "autoid"
 *  to <Button> tag
 */

Ext.override(Ext.menu.Item, {
	afterRender : Ext.Function.createSequence(function() {
        if (this.itemId && this.getActionEl()) {            
		this.getActionEl().el.dom.setAttribute('autoid',this.itemId);
        };
	},Ext.menu.Item.afterRender)
});

/**
 * Override Ext.grid.Panel to add a custom attribute "autoid"
 *  to <Button> tag
 */
Ext.override(Ext.grid.Panel, {
	afterRender : Ext.Function.createSequence(function() {
        if (this.itemId && this.getActionEl()) {               
	      this.getActionEl().el.dom.setAttribute('autoid',this.itemId);
        };
        this.callParent(arguments);
	},Ext.grid.Panel.afterRender)
});