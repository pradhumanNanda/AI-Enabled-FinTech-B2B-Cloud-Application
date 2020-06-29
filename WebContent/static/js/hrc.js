var rowsSelected = 0;
Ext.application(
{
    name : 'Fiddle',

    launch : function() 
    {
	    var toolbar1 =Ext.create('Ext.toolbar.Toolbar',
	    {
	    	    setAutoFitWidth:true,
	    	    items:
	    	    	[{	    	        
	    	        	xtype:'button',
	    	            text: 'Edit',
	    	            id : 'closed_invoices_edit_button',
	    	            disabled:true,	
	    	            	listeners:
	    	            	{
	    	                    click: function ()
	    	                    {
	    	                        var selection = Ext.getCmp('grid1').getSelection();
	    	                        if(selection.length==1)
	    	                        {
	    	                            let shipto='';
	    	                            let jid='';
	    	                            let id=0;
	    	                            selection.map(item=>
	    	                            {
	    	                                jid+=item.get('jobId');
	    	                                shipto+=item.get('shipTo');
	    	                                id+=item.get('id');
	    	                            });
	
	    	                        var fpanel = Ext.create('Ext.form.Panel',
	    	                        {
		    	                    	title: '',
		    	                    	bodyPadding: 4,
		    	                    	width:400,
		    	                    	height:400,
		    	                    	closable : false,
		    	                    	closeAction: 'hide',
		    	                    	url: 'EditRow',
		    	                    	layout: 'anchor',
		    	                    	defaults:
		    	                    	{
		    	                    	      anchor: '100%'
		    	                    	},
		    	                    	  defaultType: 'textfield',
	    	                    	      items:
	    	                    	      [{
		    	                    	      fieldLabel: 'Job ID',
		    	                    	      name: 'first',
		    	                    	      value: jid,
		    	                    	      allowBlank: false
	    	                    	      },{
		    	                    	      fieldLabel: 'Ship To',
		    	                    	      name: 'last',
		    	                    	      value: shipto,
		    	                    	      allowBlank: false
	    	                    	      },{
		    	                    	      fieldLabel: 'ID',
		    	                    	      name: 'id',
		    	                    	      value: id,
		    	                    	      hidden : true,
		    	                    	      allowBlank: false
	    	                    	      }],
	
	    	                    	  // Reset and Submit buttons
	    	                    	      buttons:
	    	                    	      [{
		    	                    	      text: 'Reset',
		    	                    	      handler: function()
		    	                    	      {
		    	                    	          this.up('form').getForm().reset();
		    	                    	      }
	    	                    	       },{
		    	                    	      text: 'Submit',
		    	                    	      formBind: true, // only enabled once the form is valid
		    	                    	      disabled: true,
		    	                    	      handler: function() 
		    	                    	      {
		    	                    	          var form = this.up('form').getForm();
		    	                    	          if (form.isValid())
		    	                    	          {
		    	                    	              form.submit(
		    	                    	              {   	                    	            
		    	                    	                  success: function(form, action)
		    	                    	                  {
		    	                    	                     Ext.Msg.alert('Success', action.result.msg);
		    	                    	                  },
		    	                    	                  failure: function(form, action)
		    	                    	                  {
		    	                    	                      Ext.Msg.alert('Failed', action.result.msg);
		    	                    	                  }
		    	                    	              });
		    	                    	          }
		    	                    	      }
	    	                    	     }]
	    	                    	});
	    	                       fpanel.load(
	    	                       {
		    	                   	    params:
		    	                   	    {
		    	                   	        jobid: 0,
		    	                   	        shipTo: 20,
		    	                   	        id:0,
		    	                   	    }
	    	                   	  });
	    	                       var win = Ext.create('Ext.window.Window',
	    	                       {
	    	                             title: 'Edit',
	    	                        	 height: 200,
	    	                        	 width: 400,
	    	                        	 layout: 'fit',
	    	                        	 closable: true,
	    	                        	 items: [fpanel]
	    	                       });
			    	                      win.show();
			    	                      win.updateLayout();
	    	                        }
	    	                    }
	    	                }
	    	            	
	    	        } 	
	    	            	
	    	            	
	    	            	
	    	          ,
	    	        {
	    	        	xtype:'button',
	    	            text: 'Predict'
	    	        },
	    	        '->',
	    	        {
	    	        	xtype:'splitbutton',
	    	            text: 'Advanced Search'
	    	        },
	    	        
	    	    ]
	    	});
    var toolbar2 =Ext.create('Ext.toolbar.Toolbar',
    {
	    setAutoFitWidth:true,
	    items:
	    [
	        {
	        	xtype:'button',
	            text: 'Edit',
	           // disabled: true,
	            //id : 'closed_invoices_edit_button',
	            listeners:
	            {
	            	click: function ()
                    {	            		
                        var selection = Ext.getCmp('grid2').getSelection();
                        if(selection.length==1)
                        {  
                            let shipto='';
                            let jid='';
                            let id=0;
                            selection.map(item=>
                            {
                                jid+=item.get('jobId');
                                shipto+=item.get('shipTo');
                                id+=item.get('id');
                            });

                        var fpanel = Ext.create('Ext.form.Panel',
                        {
	                    	title: '',
	                    	bodyPadding: 4,
	                    	width:400,
	                    	height:400,
	                    	closable : false,
	                    	closeAction: 'hide',
	                    	url: 'EditRow',
	                    	layout: 'anchor',
	                    	defaults:
	                    	{
	                    	      anchor: '100%'
	                    	},
	                    	  defaultType: 'textfield',
                    	      items:
                    	      [{
	                    	      fieldLabel: 'Job ID',
	                    	      name: 'first',
	                    	      value: jid,
	                    	      allowBlank: false
                    	      },{
	                    	      fieldLabel: 'Ship To',
	                    	      name: 'last',
	                    	      value: shipto,
	                    	      allowBlank: false
                    	      },{
	                    	      fieldLabel: 'ID',
	                    	      name: 'id',
	                    	      value: id,
	                    	      hidden : true,
	                    	      allowBlank: false
                    	      }],

                    	  // Reset and Submit buttons
                    	      buttons:
                    	      [{
	                    	      text: 'Reset',
	                    	      handler: function()
	                    	      {
	                    	          this.up('form').getForm().reset();
	                    	      }
                    	       },{
	                    	      text: 'Submit',
	                    	      formBind: true, // only enabled once the form is valid
	                    	      disabled: true,
	                    	      handler: function() 
	                    	      {
	                    	          var form = this.up('form').getForm();
	                    	          if (form.isValid())
	                    	          {
	                    	              form.submit(
	                    	              {   	                    	            
	                    	                  success: function(form, action)
	                    	                  {
	                    	                     Ext.Msg.alert('Success', action.result.msg);
	                    	                  },
	                    	                  failure: function(form, action)
	                    	                  {
	                    	                      Ext.Msg.alert('Failed', action.result.msg);
	                    	                  }
	                    	              });
	                    	          }
	                    	      }
                    	     }]
                    	});
                       fpanel.load(
                       {
	                   	    params:
	                   	    {
	                   	        jobid: 0,
	                   	        shipTo: 20,
	                   	        id:0,
	                   	    }
                   	  });
                       var win = Ext.create('Ext.window.Window',
                       {
                             title: 'Edit',
                        	 height: 200,
                        	 width: 400,
                        	 layout: 'fit',
                        	 closable: true,
                        	 items: [fpanel]
                       });
		                      win.show();
		                      win.updateLayout();
                        }
                    }
                }
            	
        } 	
            	
            	
            	
          ,
        {
        	xtype:'button',
            text: 'Predict'
        },
        '->',
        {
        	xtype:'splitbutton',
            text: 'Advanced Search'
        },
        
    ]
});
    var toolbar3 =Ext.create('Ext.toolbar.Toolbar',
    {
    	setAutoFitWidth:true,
	    items:
	    	[{
	        	xtype:'button',
	            text: 'Edit',
	           //disabled: true,
	            //id : 'closed_invoices_edit_button',
	            listeners:
	            {
	            	click: function ()
                    {	            		
                        var selection = Ext.getCmp('grid3').getSelection();
                        if(selection.length==1)
                        {  
                            let shipto='';
                            let jid='';
                            let id=0;
                            selection.map(item=>
                            {
                                jid+=item.get('jobId');
                                shipto+=item.get('shipTo');
                                id+=item.get('id');
                            });

                        var fpanel = Ext.create('Ext.form.Panel',
                        {
	                    	title: '',
	                    	bodyPadding: 4,
	                    	width:400,
	                    	height:400,
	                    	closable : false,
	                    	closeAction: 'hide',
	                    	url: 'EditRow',
	                    	layout: 'anchor',
	                    	defaults:
	                    	{
	                    	      anchor: '100%'
	                    	},
	                    	  defaultType: 'textfield',
                    	      items:
                    	      [{
	                    	      fieldLabel: 'Job ID',
	                    	      name: 'first',
	                    	      value: jid,
	                    	      allowBlank: false
                    	      },{
	                    	      fieldLabel: 'Ship To',
	                    	      name: 'last',
	                    	      value: shipto,
	                    	      allowBlank: false
                    	      },{
	                    	      fieldLabel: 'ID',
	                    	      name: 'id',
	                    	      value: id,
	                    	      hidden : true,
	                    	      allowBlank: false
                    	      }],

                    	  // Reset and Submit buttons
                    	      buttons:
                    	      [{
	                    	      text: 'Reset',
	                    	      handler: function()
	                    	      {
	                    	          this.up('form').getForm().reset();
	                    	      }
                    	       },{
	                    	      text: 'Submit',
	                    	      formBind: true, // only enabled once the form is valid
	                    	      disabled: true,
	                    	      handler: function() 
	                    	      {
	                    	          var form = this.up('form').getForm();
	                    	          if (form.isValid())
	                    	          {
	                    	              form.submit(
	                    	              {   	                    	            
	                    	                  success: function(form, action)
	                    	                  {
	                    	                     Ext.Msg.alert('Success', action.result.msg);
	                    	                  },
	                    	                  failure: function(form, action)
	                    	                  {
	                    	                      Ext.Msg.alert('Failed', action.result.msg);
	                    	                  }
	                    	              });
	                    	          }
	                    	      }
                    	     }]
                    	});
                       fpanel.load(
                       {
	                   	    params:
	                   	    {
	                   	        jobid: 0,
	                   	        shipTo: 20,
	                   	        id:0,
	                   	    }
                   	  });
                       var win = Ext.create('Ext.window.Window',
                       {
                             title: 'Edit',
                        	 height: 200,
                        	 width: 400,
                        	 layout: 'fit',
                        	 closable: true,
                        	 items: [fpanel]
                       });
		                      win.show();
		                      win.updateLayout();
                        }
                    }
                }
            	
            },	        
	         '->',
	        {
	        	xtype:'splitbutton',
	            text: 'Advanced Search'
	        }]
	        
	        
	});
    	
    	var store1 =Ext.create('Ext.data.Store',
    	{
    	    storeId: 'store1',
    	    fields:[ 
    	    	'id', 
    	    	'accountId',
    	    	'documentNumberNorm',
    	    	'companyCode',
    	    	'fiscalYear',
    	    	'branch',
    	    	'customerNumberNorm',
    	    	'customerMapId',
    	    	'documentDateNorm',
    	    	'baselineDateNorm',
    	    	'dueDateNorm',
    	    	'invoiceNumberNorm',
    	    	'openAmountNorm',
    	    	'paymentTerms',
    	    	'clearingDateNorm',
    	    	'isOpen',
    	    	'orderType',
    	    	'orderDate',
    	    	'businessArea',
    	    	'shipDate',
    	    	'jobId',
    	    	'taxAmt',
    	    	'currentDisputeAmount',
    	    	'shipTo',
    	    	'documentId',
    	    	'documentDate',
    	    	'actualOpenAmount',
    	    	'dueDate',
    	    	'invoiceAge',
    	    	'isValid',
    	    	'retainageAmount',
    	    	'postingKey',
    	    	'strategyId',
    	    	'currency',
    	    	'debitCreditIndicator',
    	    	'validOpenAmount',
    	    	'customerName'],
    	    	
    	    	pageSize: 15,
   	    	    autoLoad:true,
    	    	// items per page
        	    proxy:
        	    {
        	        type: 'ajax',
        	       
        	        url: 'InvoiceData',
        	       	actionMethods :
        	       	{
        	   			read : 'POST'
        	   		},
        	        reader:
        	        {type:'json',
        	        	rootProperty : 'rows',
        				totalProperty : 'results',
        				keepRawData :true
        	        }
        	    },
     	     
        });
    	
    	
    	
    	var store2 =Ext.create('Ext.data.Store',
    	    	{
    	    	    storeId:  'store2',
    	    	    fields:[ 
    	    	    	'id', 
    	    	    	'accountId',
    	    	    	'documentNumberNorm',
    	    	    	'companyCode',
    	    	    	'fiscalYear',
    	    	    	'branch',
    	    	    	'customerNumberNorm',
    	    	    	'customerMapId',
    	    	    	'documentDateNorm',
    	    	    	'baselineDateNorm',
    	    	    	'dueDateNorm',
    	    	    	'invoiceNumberNorm',
    	    	    	'openAmountNorm',
    	    	    	'paymentTerms',
    	    	    	'clearingDateNorm',
    	    	    	'isOpen',
    	    	    	'orderType',
    	    	    	'orderDate',
    	    	    	'businessArea',
    	    	    	'shipDate',
    	    	    	'jobId',
    	    	    	'taxAmt',
    	    	    	'currentDisputeAmount',
    	    	    	'shipTo',
    	    	    	'documentId',
    	    	    	'documentDate',
    	    	    	'actualOpenAmount',
    	    	    	'dueDate',
    	    	    	'invoiceAge',
    	    	    	'isValid',
    	    	    	'retainageAmount',
    	    	    	'postingKey',
    	    	    	'strategyId',
    	    	    	'currency',
    	    	    	'debitCreditIndicator',
    	    	    	'validOpenAmount',
    	    	    	'customerName'],
    	    	    	
    	    	    	pageSize: 15,
    	   	    	    autoLoad:true,
    	    	    	// items per page
    	        	    proxy:
    	        	    {
    	        	        type: 'ajax',
    	        	        url: 'InvoiceData',
    	        	        extraParams:
    	        	        {type:'1'},
    	        	       	actionMethods :
    	        	       	{
    	        	   			read : 'POST'
    	        	   		},
    	        	        reader:
    	        	        {type:'json',
    	        	        	rootProperty : 'rows',
    	        				totalProperty : 'results',
    	        				keepRawData :true
    	        	        }
    	        	    },
    	     	     
    	        });
    	    	
    	    	
    	    	
    	    	
    	    	var store3 =Ext.create('Ext.data.Store',
    	    	    	{
    	    	    	    storeId:  'store3',
    	    	    	    fields:[ 
    	    	    	    	'id', 
    	    	    	    	'accountId',
    	    	    	    	'documentNumberNorm',
    	    	    	    	'companyCode',
    	    	    	    	'fiscalYear',
    	    	    	    	'branch',
    	    	    	    	'customerNumberNorm',
    	    	    	    	'customerMapId',
    	    	    	    	'documentDateNorm',
    	    	    	    	'baselineDateNorm',
    	    	    	    	'dueDateNorm',
    	    	    	    	'invoiceNumberNorm',
    	    	    	    	'openAmountNorm',
    	    	    	    	'paymentTerms',
    	    	    	    	'clearingDateNorm',
    	    	    	    	'isOpen',
    	    	    	    	'orderType',
    	    	    	    	'orderDate',
    	    	    	    	'businessArea',
    	    	    	    	'shipDate',
    	    	    	    	'jobId',
    	    	    	    	'taxAmt',
    	    	    	    	'currentDisputeAmount',
    	    	    	    	'shipTo',
    	    	    	    	'documentId',
    	    	    	    	'documentDate',
    	    	    	    	'actualOpenAmount',
    	    	    	    	'dueDate',
    	    	    	    	'invoiceAge',
    	    	    	    	'isValid',
    	    	    	    	'retainageAmount',
    	    	    	    	'postingKey',
    	    	    	    	'strategyId',
    	    	    	    	'currency',
    	    	    	    	'debitCreditIndicator',
    	    	    	    	'validOpenAmount',
    	    	    	    	'customerName'],
    	    	    	    	
    	    	    	    	pageSize: 15,
    	    	   	    	    autoLoad:true,
    	    	    	    	// items per page
    	    	        	    proxy:
    	    	        	    {
    	    	        	        type: 'ajax',
    	    	        	        url: 'InvoiceData',
    	    	        	        extraParams:
    	    	        	        {type:'0'},
    	    	        	       	actionMethods :
    	    	        	       	{
    	    	        	   			read : 'POST'
    	    	        	   		},
    	    	        	        reader:
    	    	        	        {type:'json',
    	    	        	        	rootProperty : 'rows',
    	    	        				totalProperty : 'results',
    	    	        				keepRawData :true
    	    	        	        }
    	    	        	    },
    	    	     	     
    	    	        });
    	    	    	
    	    	    	
    	    	    	
    	
    	var grid1 = Ext.create('Ext.grid.Panel',
    	{
    	    //title: 'All Invoices',
    	    store: Ext.data.StoreManager.lookup( 'store1'),
    	    id:'grid1',
    	    columns: [
    	    	{ text: 'id', dataIndex: 'id' },
    	        { text: 'account id', dataIndex: 'accountId' },
    	        { text: 'document number norm', dataIndex: 'documentNumberNorm' },
    	        { text: 'company code', dataIndex: 'companyCode' },
    	        { text: 'fiscal year', dataIndex: 'fiscalYear' },
    	        { text: 'branch', dataIndex: 'branch' },
    	        { text: 'customer number norm', dataIndex: 'customerNumberNorm' },
    	        { text: 'customer map id', dataIndex: 'customerMapId' },
    	        { text: 'document date norm', dataIndex: 'documentDateNorm' },
    	        { text: 'baseline date norm', dataIndex: 'baselineDateNorm' },
    	        { text: 'due date norm', dataIndex: 'dueDateNorm' },
    	        { text: 'invoice number norm', dataIndex: 'invoiceNumberNorm' },
    	        { text: 'open amount norm', dataIndex: 'openAmountNorm' },
    	        { text: 'payment terms', dataIndex: 'paymentTerms' },
    	        { text: 'clearing date norm', dataIndex: 'clearingDateNorm' },
    	        { text: 'isopen', dataIndex: 'isOpen' },
    	        { text: 'order type', dataIndex: 'orderType' },
    	        { text: 'order date', dataIndex: 'orderDate' },
    	        { text: 'business area', dataIndex:'businessArea'},
    	        { text: 'ship date', dataIndex:'shipDate'},
    	        { text: 'job id', dataIndex: 'jobId' },
    	        { text: 'tax amt', dataIndex: 'taxAmt' },
    	        { text: 'current dispute amount', dataIndex: 'currentDisputeAmount' },
    	        { text: 'ship to', dataIndex: 'shipTo' },
    	        { text: 'document id', dataIndex: 'documentId' },
    	        { text: 'document date', dataIndex: 'documentDate' },
    	        { text: 'actual open amount', dataIndex: 'actualOpenAmount' },
    	        { text: 'due date', dataIndex: 'dueDate' },
    	        { text: 'invoice age', dataIndex: 'invoiceAge' },
    	        { text: 'isvalid dispute', dataIndex: 'isValid' },
    	        { text: 'reitange amount', dataIndex: 'retainageAmount' },
    	        { text: 'posting key', dataIndex: 'postingKey' },
    	        { text: 'strategy id', dataIndex: 'strategyId' },
    	        { text: 'currency', dataIndex: 'currency' },
    	        { text: 'debit credit indicator', dataIndex: 'debitCreditIndicator' },
    	        { text: 'valid open amt', dataIndex: 'validOpenAmount' },
    	        { text: 'customer name', dataIndex: 'customerName' , flex : 1},
    	       ],
    	    selModel:
    	    {
    	    			selType : 	'checkboxmodel',
    	    			//mode = 'MULTI',
    	    			//checkOnly = true,
    	    			listeners :
    	    			{
    	    				select : function()
    	    				{
    	    					rowsSelected++;
    	    					if(rowsSelected == 1)
    	    					{
    	    						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
    	    					}
    	    					else
    	    					{
    	    						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
    	    					}
    	    				},
    	    				deselect : function()
    	    				{
    	    					rowsSelected--;
    	    					if(rowsSelected == 1)
    	    					{
    	    						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
    	    					}
    	    					else
    	    					{
    	    						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
    	    					}
    	    				}
    	    		   }
    	     },
    	    
    	  //  tbar:toolbar,
	    	    dockedItems:
	    	    [{
	    	        xtype: 'pagingtoolbar',
	    	        store: 'Invoice', // same store GridPanel is using
	    	        dock: 'top',
	    	        displayInfo: true,
	    	        handler: function()
	    	        {
	    	            if(Ext.getCmp('grid1').columns[0].isVisible())
	    	                Ext.getCmp('grid1').columns[0].setVisible(false);
	    	            else
	    	                Ext.getCmp('grid1').columns[0].setVisible(true);
	    	        }
	    	    },
	    	    {
	    	        xtype: 'pagingtoolbar',
	    	        store: 'Invoice', // same store GridPanel is using
	    	        dock: 'bottom',
	    	        displayInfo: true
	    	    }]
 	    
      });
    	
    	var grid2 = Ext.create('Ext.grid.Panel',
    	{
    	  //  title: 'Open Invoices',
    	    id : 'grid2',
    	    store: Ext.data.StoreManager.lookup('store2'),
    	    columns:
    	    [
    	    	{ text: 'id', dataIndex: 'id' },
    	        { text: 'account id', dataIndex: 'accountId' },
    	        { text: 'document number norm', dataIndex: 'documentNumberNorm' },
    	        { text: 'company code', dataIndex: 'companyCode' },
    	        { text: 'fiscal year', dataIndex: 'fiscalYear' },
    	        { text: 'branch', dataIndex: 'branch' },
    	        { text: 'customer number norm', dataIndex: 'customerNumberNorm' },
    	        { text: 'customer map id', dataIndex: 'customerMapId' },
    	        { text: 'document date norm', dataIndex: 'documentDateNorm' },
    	        { text: 'baseline date norm', dataIndex: 'baselineDateNorm' },
    	        { text: 'due date norm', dataIndex: 'dueDateNorm' },
    	        { text: 'invoice number norm', dataIndex: 'invoiceNumberNorm' },
    	        { text: 'open amount norm', dataIndex: 'openAmountNorm' },
    	        { text: 'payment terms', dataIndex: 'paymentTerms' },
    	        { text: 'clearing date norm', dataIndex: 'clearingDateNorm' },
    	        { text: 'isopen', dataIndex: 'isOpen' },
    	        { text: 'order type', dataIndex: 'orderType' },
    	        { text: 'order date', dataIndex: 'orderDate' },
    	        { text: 'business area', dataIndex:'businessArea'},
    	        { text: 'ship date', dataIndex:'shipDate'},
    	        { text: 'job id', dataIndex: 'jobId' },
    	        { text: 'tax amt', dataIndex: 'taxAmt' },
    	        { text: 'current dispute amount', dataIndex: 'currentDisputeAmount' },
    	        { text: 'ship to', dataIndex: 'shipTo' },
    	        { text: 'document id', dataIndex: 'documentId' },
    	        { text: 'document date', dataIndex: 'documentDate' },
    	        { text: 'actual open amount', dataIndex: 'actualOpenAmount' },
    	        { text: 'due date', dataIndex: 'dueDate' },
    	        { text: 'invoice age', dataIndex: 'invoiceAge' },
    	        { text: 'isvalid dispute', dataIndex: 'isValid' },
    	        { text: 'reitange amount', dataIndex: 'retainageAmount' },
    	        { text: 'posting key', dataIndex: 'postingKey' },
    	        { text: 'strategy id', dataIndex: 'strategyId' },
    	        { text: 'currency', dataIndex: 'currency' },
    	        { text: 'debit credit indicator', dataIndex: 'debitCreditIndicator' },
    	        { text: 'valid open amt', dataIndex: 'validOpenAmount' },
    	        { text: 'customer name', dataIndex: 'customerName' , flex : 1},
    	   ],
    	    selModel: 'checkboxmodel',
    	    listeners :
			{
				select : function()
				{
					rowsSelected++;
					if(rowsSelected == 1)
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
					}
					else
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
					}
				},
				deselect : function()
				{
					rowsSelected--;
					if(rowsSelected == 1)
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
					}
					else
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
					}
				}
		   },
    	    setAutoFitWidth:true,
    	    dockedItems: 
    	    [{
    	        xtype: 'pagingtoolbar',
    	        store: 'Invoice', // same store GridPanel is using
    	        dock: 'top',
    	        displayInfo: true
    	        
    	    },{
    	        xtype: 'pagingtoolbar',
    	        store: 'Invoice', // same store GridPanel is using
    	        dock: 'bottom',
    	        displayInfo: true
    	    }],
    	    
      });
    	
    	var grid3 = Ext.create('Ext.grid.Panel',
    	{
    	   // title: 'Closed Invoices',
    		id:'grid3',
    	    store: Ext.data.StoreManager.lookup('store3'),
    	    columns:
    	    [
    	    	{ text: 'id', dataIndex: 'id' },
    	        { text: 'account id', dataIndex: 'accountId' },
    	        { text: 'document number norm', dataIndex: 'documentNumberNorm' },
    	        { text: 'company code', dataIndex: 'companyCode' },
    	        { text: 'fiscal year', dataIndex: 'fiscalYear' },
    	        { text: 'branch', dataIndex: 'branch' },
    	        { text: 'customer number norm', dataIndex: 'customerNumberNorm' },
    	        { text: 'customer map id', dataIndex: 'customerMapId' },
    	        { text: 'document date norm', dataIndex: 'documentDateNorm' },
    	        { text: 'baseline date norm', dataIndex: 'baselineDateNorm' },
    	        { text: 'due date norm', dataIndex: 'dueDateNorm' },
    	        { text: 'invoice number norm', dataIndex: 'invoiceNumberNorm' },
    	        { text: 'open amount norm', dataIndex: 'openAmountNorm' },
    	        { text: 'payment terms', dataIndex: 'paymentTerms' },
    	        { text: 'clearing date norm', dataIndex: 'clearingDateNorm' },
    	        { text: 'isopen', dataIndex: 'isOpen' },
    	        { text: 'order type', dataIndex: 'orderType' },
    	        { text: 'order date', dataIndex: 'orderDate' },
    	        { text: 'business area', dataIndex:'businessArea'},
    	        { text: 'ship date', dataIndex:'shipDate'},
    	        { text: 'job id', dataIndex: 'jobId' },
    	        { text: 'tax amt', dataIndex: 'taxAmt' },
    	        { text: 'current dispute amount', dataIndex: 'currentDisputeAmount' },
    	        { text: 'ship to', dataIndex: 'shipTo' },
    	        { text: 'document id', dataIndex: 'documentId' },
    	        { text: 'document date', dataIndex: 'documentDate' },
    	        { text: 'actual open amount', dataIndex: 'actualOpenAmount' },
    	        { text: 'due date', dataIndex: 'dueDate' },
    	        { text: 'invoice age', dataIndex: 'invoiceAge' },
    	        { text: 'isvalid dispute', dataIndex: 'isValid' },
    	        { text: 'reitange amount', dataIndex: 'retainageAmount' },
    	        { text: 'posting key', dataIndex: 'postingKey' },
    	        { text: 'strategy id', dataIndex: 'strategyId' },
    	        { text: 'currency', dataIndex: 'currency' },
    	        { text: 'debit credit indicator', dataIndex: 'debitCreditIndicator' },
    	        { text: 'valid open amt', dataIndex: 'validOpenAmount' },
    	        { text: 'customer name', dataIndex: 'customerName' , flex : 1},
    	    ],
    	    selModel: 'checkboxmodel',
    	  //  setAutoFitHeight:true,
    	    listeners :
			{
				select : function()
				{
					rowsSelected++;
					if(rowsSelected == 1)
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
					}
					else
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
					}
				},
				deselect : function()
				{
					rowsSelected--;
					if(rowsSelected == 1)
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(false);
					}
					else
					{
						Ext.getCmp('closed_invoices_edit_button').setDisabled(true);
					}
				}
		   },
    	    setAutoFitWidth:true,
    	    dockedItems:
    	    [{
    	        xtype: 'pagingtoolbar',
    	        store: 'Invoice', // same store GridPanel is using
    	        dock: 'top',
    	        displayInfo: true
    	    },{
    	        xtype: 'pagingtoolbar',
    	        store: 'Invoice', // same store GridPanel is using
    	        dock: 'bottom',
    	        displayInfo: true
    	    }],
    	});
    	
   	
			  	var tab1= Ext.create('Ext.Panel',
			  	{  
			  		title:'All Invoices',
			  		id : 'all_invoices_panel',
			     	items:
			     	[
			     		{
			     		  tbar:toolbar1
			     		},
			     		{ grid1}
			        ]	    
			    });
			  	var tab2= Ext.create('Ext.Panel',
			  	{  
			  		title:'Open Invoices',
			  		id : 'open_invoices_panel',
			     	items:
			        [
			        	{
			        	  tbar:toolbar2
			        	},
			        	  {grid2}
			        ]	    
			    });
			  	var tab3= Ext.create('Ext.Panel',
			  	{  
			  		title:'Closed Invoices',
			  		id : 'closed_invoices_panel',
			     	items:
			     	[
			     	    {
			     	      tbar:toolbar3
			     	    },
			     	      {grid3}
			        ]	    
			    });
	 
    	
    	 Ext.create('Ext.tab.Panel',
    	 {
             renderTo:document.body,
             id : 'root_invoices_tabpanel',
             items:
             [{
            	 xtype:'tabpanel',
            	 title:'Invoices',
            	 items:
            	 [
            		 tab1,tab2,tab3
            	 ]
             }]
    	    
     	 });
 
    
    }
 });