Ext.application({
	name:'Fiddle',
	title:'Invoices',
	
	
	
	launch:function(){
		
	
		var store1 =Ext.create('Ext.data.Store',{
			storeId:'datastore1',
			fields:[
				'id',
				'accountid',
				'documentNumberNorm', 
                'companyCode',
				 'fiscalYear', 
				 'branch',
				 'customerNumberNorm',
				 'fkCustomerMapId',
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
				 'currentDisputAmount', 
				'shipTo', 
			 'documentId', 
				 'documentDate', 
			'actualOpenAmount', 
				'dueDate',
				'invoiceAge', 
				'isValidDispute',
				 'postingKey',
				'strategyId', 
				'currency', 
				'debitCreditIndicator',
				'validOpenAmount', 
			 'customerName', 
			 'retainageAmount',
			 'predictionDate'
				
			],
			autoLoad:true,
			pageSize:10,
             proxy:{
				type:'ajax',
				 enablePaging: true, 
				url:'InvoiceData',
				
				actionMethods:{
					read : 'Post'
				},
                reader:{
					type:'json',
					rootProperty:'rows',
					totalProperty:'results',
					
						keepRawData:true,
						
				}
				},
				listeners:{
					load:function(store1)
						{Ext.ComponentQuery.query('#all_invoices_total_amount')[0].setHtml(" <h5> Total Amount : "+store1.getProxy().getReader().rawData.sum+"</h5>" );
						
						}
				}
		});
		var store2=Ext.create('Ext.data.Store',{
			storeId:'datastore2',
			fields:[
				'id',
				'accountid',
				'documentNumberNorm', 
                'companyCode',
				 'fiscalYear', 
				 'branch',
				 'customerNumberNorm',
				 'fkCustomerMapId',
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
				 'currentDisputAmount', 
				'shipTo', 
			 'documentId', 
				 'documentDate', 
			'actualOpenAmount', 
				'dueDate',
				'invoiceAge', 
				'isValidDispute',
				 'postingKey',
				'strategyId', 
				'currency', 
				'debitCreditIndicator',
				'validOpenAmount', 
			 'customerName', 
			 'retainageAmount',
			 'predictionDate'
				],
			autoLoad:true,
			pageSize:10,
             proxy:{
				type:'ajax',
				 enablePaging: true, 
				 extraParams:{ 
						type:'1'
					},
				url:'InvoiceData',
				actionMethods:{
					read : 'Post'
				},
                reader:{
					type:'json',
					rootProperty:'rows',
					totalProperty:'results',
						keepRawData:true
				}
				
					
				
		},
		listeners:{
			load:function(store2)
				{Ext.ComponentQuery.query('#open_invoices_total_amount')[0].setHtml(" <h5> Total Amount : "+store2.getProxy().getReader().rawData.sum+"</h5>" );
				
				}
		}
		});
		
		var store3=Ext.create('Ext.data.Store',{
			storeId:'datastore3',
			fields:[
				'id',
				'accountid',
				'documentNumberNorm', 
                'companyCode',
				 'fiscalYear', 
				 'branch',
				 'customerNumberNorm',
				 'fkCustomerMapId',
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
				 'currentDisputAmount', 
				'shipTo', 
			 'documentId', 
				 'documentDate', 
			'actualOpenAmount', 
				'dueDate',
				'invoiceAge', 
				'isValidDispute',
				 'postingKey',
				'strategyId', 
				'currency', 
				'debitCreditIndicator',
				'validOpenAmount', 
			 'customerName', 
			 'retainageAmount',
			 'predictionDate'
				
			],
			autoLoad:true,
			pageSize:10,
             proxy:{
				type:'ajax',
				 enablePaging: true, 
				 extraParams:{
						type:'0'
					},
				url:'InvoiceData',
				actionMethods:{
					read : 'Post'
				},
                reader:{
                	type:'json',
					rootProperty:'rows',
					totalProperty:'results',
						keepRawData:true
				}},
				listeners:{
					load:function(store3)
						{Ext.ComponentQuery.query('#closed_invoices_total_amount')[0].setHtml(" <h5> Total Amount : "+store3.getProxy().getReader().rawData.sum+"</h5>" );
						
						}
				}
				
					
		});
		
		
		var p1=Ext.create('Ext.panel.Panel',{
			title:'All Invoices',
			width:'100%',
			items:[{	
				xtype: 'panel',
				//bodyStyle: 'margin:20px;',

				//bodyStyle: 'margin-down:30px;',
				border:true,
				//width:"100%",
				//align:'center',
				id: 'all_invoices_advancesearch_panel',
				layout: 'column',
				hidden : true,
				items: [{
					xtype:'container',
					padding : 10,
					layout:{
						layout : 'border',
//						align : 'center'
					},
					width : Ext.getBody().getViewSize().width * 1,

					items:[{
 
						xtype:'form',

//						xtype: 'container',
						layout:{
							type:'column',
							align : 'center'
						},
						items: [{
							columnWidth: 0.50,
//							xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'datefield',
								itemId: 'all_invoices_due_date',
								id: 'all_invoices_due',
								fieldLabel: 'Due_Date'
							},{
								xtype:'numberfield',
								itemId:'all_invoices_actual_open_amount',
								id:'all_invoices_amount',
								fieldLabel: 'Actual Open Amount'
							}]
						},
						{
							columnWidth: 0.50,
							//xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'combo',
								itemId: 'all_invoices_fiscal_year',
								id: 'all_invoices_fiscal',
								fieldLabel: 'Fiscal Year',
								 store:['2016','2017','2015'],
							},{
								xtype:'textfield',
								itemId:'all_invoices_customer_name',
								id:'all_invoices_customer',	
								fieldLabel: 'Customer Name'
							}]
						}],
						buttonAlign : 'center',
						buttons:[
							{

								text:'Clear',
								//maxWidth:'100',

								//dock:'bottom',
								//align:'center',
								id:'all_invoices_clear_advanceSearch',
								listeners:{
									click:function(){
										//Ext.Msg.alert('hey');
										Ext.getCmp('all_invoices_customer').setValue("");
										Ext.getCmp('all_invoices_fiscal').setValue("");
										Ext.getCmp('all_invoices_due').setValue("");
										Ext.getCmp('all_invoices_amount').setValue("");
										var allstore=Ext.getStore('datastore1');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : null,
											amount : null,
											fiscalYear : null,
											customerName : null
										};
										allstore.load();
									}
								}
							},

							{
								//xtype: 'button',


								text:'Search',

					

								id:'all_invoices_search_button',
								listeners:{
									click:function(){
										//alert('hey');
										var allstore=Ext.getStore('datastore1');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : Ext.ComponentQuery.query('#all_invoices_due_date')[0].getValue(),
											amount : Ext.ComponentQuery.query('#all_invoices_actual_open_amount')[0].getValue(),
											fiscalYear : Ext.ComponentQuery.query('#all_invoices_fiscal_year')[0].getValue(),
											customerName : Ext.ComponentQuery.query('#all_invoices_customer_name')[0].getValue()
										};
										allstore.load();
									
									}
								}
							}]
					}]
				}]

			},
			{
				//grid1.show();
				xtype:'grid',
				id:'grid5',
				itemId:'all_invoices_panel',
				store:Ext.data.StoreManager.lookup('datastore1'),
				columns:[
					{text: 'id', dataIndex: 'id' },
					{text: 'accountId', dataIndex: 'accountId' },
					{text: 'companyCode', dataIndex: 'companyCode' },
					{text: 'documentNumberNorm', dataIndex:  'documentNumberNorm'},
					{text: 'fiscalYear', dataIndex: 'fiscalYear' },
					{text: 'branch', dataIndex:'branch' },
					{text: 'customerNumberNorm', dataIndex: 'customerNumberNorm'},
					{text: 'fkCustomerMapId', dataIndex:'fkCustomerMapId'},
					{text: 'documentDateNorm', dataIndex:'documentDateNorm' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'baselineDateNorm', dataIndex:'baselineDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'dueDateNorm', dataIndex:'dueDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceNumberNorm', dataIndex: 'invoiceNumberNorm' },
					{text: 'openAmountNorm', dataIndex: 'openAmountNorm'},
					{text: 'paymentTerms', dataIndex: 'paymentTerms' },
					{text: 'clearingDateNorm', dataIndex: 'clearingDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'isOpen', dataIndex:'isOpen'},
					{text: 'orderType', dataIndex: 'orderType'},
					{text: 'orderDate', dataIndex: 'orderDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'businessArea', dataIndex: 'businessArea' },
					{text: 'shipDate', dataIndex: 'shipDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'jobId', dataIndex:'jobId'},
					{text: 'taxAmt', dataIndex:  'taxAmt'},
					{text: 'currentDisputAmount', dataIndex: 'currentDisputAmount' },
					{text: 'shipTo', dataIndex: 'shipTo'},
					{text: 'documentId', dataIndex:'documentId' },
					{text: 'documentDate', dataIndex: 'documentDate' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text:'actualOpenAmount', dataIndex: 'actualOpenAmount' },
					{text:'dueDate', dataIndex:'dueDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceAge', dataIndex:'invoiceAge'},
					{text: 'isValidDispute', dataIndex: 'isValidDispute'},
					{text: 'postingKey', dataIndex: 'postingKey'},
					{text: 'strategyId', dataIndex: 'strategyId'},
					{text:'currency', dataIndex:'currency' },
					{text:'debitCreditIndicator', dataIndex: 'debitCreditIndicator' },
					{text:'validOpenAmount', dataIndex: 'validOpenAmount' },
					{text: 'customerName', dataIndex: 'customerName'},
					{text: 'retainageAmount', dataIndex:'retainageAmount' },
					{text: 'predictionDate', dataIndex:'predictionDate' }

					],	
					selModel:{
						selType:'checkboxmodel',
						id:'check',
						listeners: {


							select: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('grid5').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('editbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('editbutton');
								SaveBtn.setDisabled(true);

								}

							},
							deselect: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('grid5').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('editbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('editbutton');
								SaveBtn.setDisabled(true);

								}

							}
						}
					},
					tbar:new Ext.PagingToolbar({
						store : Ext.data.StoreManager.lookup('datastore1'),
						displayInfo:true,

						style : 'padding-right : 17px',
						displayMsg:'Users'+'{0}-{1} of {2}',
						emptyMsg: "No Records to display",
						items:
							[
								'->',
						{
							xtype:'panel',
							
							itemId:'all_invoices_total_amount',
							
						}]
					}),
					bbar:{
						xtype:'pagingtoolbar',	

						//plugins:'ux-orogr',
						store: 'datastore1', 
						displayInfo:true,
					}	
			}],

			dockedItems:[{ 
				items:[
					{


						xtype:'container',
						width:"100%",
						layout:{
							type:'vbox'
						},
						items:[
							{
								xtype: 'toolbar',
								width:"100%",
								
								itemId:'all_invoices_toolbar',
								items:[{
									xtype: 'button',
									text: 'Edit',
									itemId:'all_invoices_edit_button',
									id:'editbutton',
									disabled: true,
									handler:function(){
										var allSelect=Ext.getCmp('grid5').getSelection();
										var v=Ext.create('Ext.window.Window',{
											title: 'Edit',
											layout: 'fit',
											autoScroll: true,
											y: 120,
											width: 400,
											height: 200,
											modal: true,
											//  closeAction: 'hide',
											items: [
												Ext.create('Ext.form.Panel', {
													//  title: 'Simple Form',
													bodyPadding: 15,
													itemId:'all_invoices_edit_panel',
													width: 200,
													id:'form',
													height:200,    // The form will submit an AJAX request to this URL when submitted
													url: 'DataSave2',

													layout: 'anchor',
													defaults: {
														anchor: '100%'
													},

													// The fields
													defaultType: 'textfield',
													items: [{  
														fieldLabel: 'Job Id',
														id:'job_id',
														itemId:'all_invoices_job_id',
														name: 'jobid',
														value:allSelect[0].data.jobId,
														allowBlank: false
													},{
														fieldLabel: 'Ship To',
														name: 'shipto',
														value:allSelect[0].data.shipTo,
														id:'all_invoices_ship_to',
														itemId:'ship_to',
														allowBlank: false
													},
													{ 
														xtype:"hiddenfield",
														name: 'id',
														value:allSelect[0].data.id,
														//:'all_invoices_ship_to',
														allowBlank: false
													}

													],

													// Reset and Submit buttons
													buttons: [{
														text: 'cancel',
														ItemId:'all_invoices_cancel_edit',

														handler: function() {
															v.close();
														}
													}, {
														text: 'save',
														itemId:'all_invoices_save_edit',
														formBind: true, //only enabled once the form is valid
														disabled: true,


														handler: function() {

															var form = this.up('form').getForm();

															if (form.isValid()) {
																form.submit({

																	success: function(form, action) {
																		v.close();
																		store1.reload();
																		//Ext.getCmp('grid5').getView().refresh();


																		Ext.Msg.alert('Success', action.result.msg);

																	},
																	failure: function(form, action) {
																		v.close();
																		Ext.Msg.alert('Failed', action.result.msg);
																	}
																});
															}
														}  }],
														// renderTo: Ext.getBody()
												})
												]
										}).show();
									}    },
									{
										xtype: 'button',
										itemId:'all_invoices_predict_button',
										disabled:true,
										text: 'Predict',
										listeners:{
											click:function()
											{
												//Implement it
												//advsear.show();

											}
										}	},
										
										'->',
										{
											xtype: 'splitbutton',
											itemId:'all_invoices_advancesearch_button',
											text:'Advance Search',

											listeners:{
												click:function()
												{
													//Implement 
													//alert('hey');
													//var f = Ext.getCmp('all_advanced_search_panel');
													//f.setHidden(false);
													//advsearch.show();
													var seq=Ext.ComponentQuery.query('#all_invoices_advancesearch_panel')[0];
													if(!seq.isVisible())
													{
														seq.show();
													}
													else
													{
														seq.hide();
													}

												}}


										}]}]
					}]
			}]

		});
		
		
		var p3=Ext.create('Ext.panel.Panel',{
			title:'Closed Invoices',
			width:'100%',
			items:[{	
				xtype: 'panel',
				//bodyStyle: 'margin:20px;',

				//bodyStyle: 'margin-down:30px;',
				border:true,
				//width:"100%",
				//align:'center',
				id: 'closed_invoices_advancesearch_panel',
				layout: 'column',
				hidden : true,
				items: [{
					xtype:'container',
					padding : 10,
					layout:{
						layout : 'border',
//						align : 'center'
					},
					width : Ext.getBody().getViewSize().width * 1,

					items:[{
 
						xtype:'form',

//						xtype: 'container',
						layout:{
							type:'column',
							align : 'center'
						},
						items: [{
							columnWidth: 0.50,
//							xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'datefield',
								itemId: 'closed_invoices_due_date',
								id: 'closed_invoices_due',
								fieldLabel: 'Due_Date'
							},{
								xtype:'numberfield',
								itemId:'closed_invoices_actual_open_amount',
								id:'closed_invoices_amount',
								fieldLabel: 'Actual Open Amount'
							}]
						},
						{
							columnWidth: 0.50,
							//xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'combo',
								itemId: 'closed_invoices_fiscal_year',
								id: 'closed_invoices_fiscal',
								fieldLabel: 'Fiscal Year',
								 store:['2016','2017','2015'],
							},{
								xtype:'textfield',
								itemId:'closed_invoices_customer_name',
								id:'closed_invoices_customer',	
								fieldLabel: 'Customer Name'
							}]
						}],
						buttonAlign : 'center',
						buttons:[
							{

								text:'Clear',
								//maxWidth:'100',

								//dock:'bottom',
								//align:'center',
								id:'closed_invoices_clear_advanceSearch',
								listeners:{
									click:function(){
										//Ext.Msg.alert('hey');
										Ext.getCmp('closed_invoices_customer').setValue("");
										Ext.getCmp('closed_invoices_fiscal').setValue("");
										Ext.getCmp('closed_invoices_due').setValue("");
										Ext.getCmp('closed_invoices_amount').setValue("");
										var allstore=Ext.getStore('datastore3');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : null,
											amount : null,
											fiscalYear : null,
											customerName : null,
											type:'0'
										};
										allstore.load();
									}
								}
							},

							{
								//xtype: 'button',


								text:'Search',

					

								id:'closed_invoices_search_button',
								listeners:{
									click:function(){
										//alert('hey');
										var allstore=Ext.getStore('datastore3');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : Ext.ComponentQuery.query('#closed_invoices_due_date')[0].getValue(),
											amount : Ext.ComponentQuery.query('#closed_invoices_actual_open_amount')[0].getValue(),
											fiscalYear : Ext.ComponentQuery.query('#closed_invoices_fiscal_year')[0].getValue(),
											customerName : Ext.ComponentQuery.query('#closed_invoices_customer_name')[0].getValue(),
											type : '0'
										};
										allstore.load();
									}
								}
							}]
					}]
				}]

			},
			{
				//grid1.show();
				xtype:'grid',
				id:'closedgrid',
				itemId:'closed_invoices_panel',
				store:Ext.data.StoreManager.lookup('datastore3'),
				columns:[
					{text: 'id', dataIndex: 'id' },
					{text: 'accountId', dataIndex: 'accountId' },
					{text: 'companyCode', dataIndex: 'companyCode' },
					{text: 'documentNumberNorm', dataIndex:  'documentNumberNorm'},
					{text: 'fiscalYear', dataIndex: 'fiscalYear' },
					{text: 'branch', dataIndex:'branch' },
					{text: 'customerNumberNorm', dataIndex: 'customerNumberNorm'},
					{text: 'fkCustomerMapId', dataIndex:'fkCustomerMapId'},
					{text: 'documentDateNorm', dataIndex:'documentDateNorm' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'baselineDateNorm', dataIndex:'baselineDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'dueDateNorm', dataIndex:'dueDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceNumberNorm', dataIndex: 'invoiceNumberNorm' },
					{text: 'openAmountNorm', dataIndex: 'openAmountNorm'},
					{text: 'paymentTerms', dataIndex: 'paymentTerms' },
					{text: 'clearingDateNorm', dataIndex: 'clearingDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'isOpen', dataIndex:'isOpen'},
					{text: 'orderType', dataIndex: 'orderType'},
					{text: 'orderDate', dataIndex: 'orderDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'businessArea', dataIndex: 'businessArea' },
					{text: 'shipDate', dataIndex: 'shipDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'jobId', dataIndex:'jobId'},
					{text: 'taxAmt', dataIndex:  'taxAmt'},
					{text: 'currentDisputAmount', dataIndex: 'currentDisputAmount' },
					{text: 'shipTo', dataIndex: 'shipTo'},
					{text: 'documentId', dataIndex:'documentId' },
					{text: 'documentDate', dataIndex: 'documentDate' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text:'actualOpenAmount', dataIndex: 'actualOpenAmount' },
					{text:'dueDate', dataIndex:'dueDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceAge', dataIndex:'invoiceAge'},
					{text: 'isValidDispute', dataIndex: 'isValidDispute'},
					{text: 'postingKey', dataIndex: 'postingKey'},
					{text: 'strategyId', dataIndex: 'strategyId'},
					{text:'currency', dataIndex:'currency' },
					{text:'debitCreditIndicator', dataIndex: 'debitCreditIndicator' },
					{text:'validOpenAmount', dataIndex: 'validOpenAmount' },
					{text: 'customerName', dataIndex: 'customerName'},
					{text: 'retainageAmount', dataIndex:'retainageAmount' },
					{text: 'predictionDate', dataIndex:'predictionDate' }

					],	
					selModel:{
						selType:'checkboxmodel',
						id:'check',
						listeners: {


							select: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('closedgrid').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('closededitbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('closededitbutton');
								SaveBtn.setDisabled(true);

								}

							},
							deselect: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('closedgrid').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('closededitbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('closededitbutton');
								SaveBtn.setDisabled(true);

								}

							}
						}
					},
					tbar:new Ext.PagingToolbar({
						store : Ext.data.StoreManager.lookup('datastore3'),
						displayInfo:true,

						style : 'padding-right : 17px',
						displayMsg:'Users'+'{0}-{1} of {2}',
						emptyMsg: "No Records to display",
						items:
							[
								'->',
						{
							xtype:'panel',
							
							itemId:'closed_invoices_total_amount',
							
						}]
					}),
					bbar:{
						xtype:'pagingtoolbar',	

						//plugins:'ux-orogr',
						store: 'datastore3', 
						displayInfo:true,
					}	
			}],

			dockedItems:[{ 
				items:[
					{


						xtype:'container',
						width:"100%",
						layout:{
							type:'vbox'
						},
						items:[
							{
								xtype: 'toolbar',
								width:"100%",
								itemId:'closed_invoices_toolbar',
								items:[{
									xtype: 'button',
									text: 'Edit',
									itemId:'closed_invoices_edit_button',
									id:'closededitbutton',
									disabled: true,
									handler:function(){
										var allSelect=Ext.getCmp('closedgrid').getSelection();
										var v=Ext.create('Ext.window.Window',{
											title: 'Edit',
											layout: 'fit',
											autoScroll: true,
											y: 120,
											width: 400,
											height: 200,
											modal: true,
											//  closeAction: 'hide',
											items: [
												Ext.create('Ext.form.Panel', {
													//  title: 'Simple Form',
													bodyPadding: 15,
													itemId:'closed_invoices_edit_panel',
													width: 200,
													id:'form',
													height:200,    // The form will submit an AJAX request to this URL when submitted
													url: 'DataSave2',

													layout: 'anchor',
													defaults: {
														anchor: '100%'
													},

													// The fields
													defaultType: 'textfield',
													items: [{  
														fieldLabel: 'Job Id',
														id:'job_id',
														itemId:'closed_invoices_job_id',
														name: 'jobid',
														value:allSelect[0].data.jobId,
														allowBlank: false
													},{
														fieldLabel: 'Ship To',
														name: 'shipto',
														value:allSelect[0].data.shipTo,
														id:'closed_invoices_ship_to',
														itemId:'ship_to',
														allowBlank: false
													},
													{ 
														xtype:"hiddenfield",
														name: 'id',
														value:allSelect[0].data.id,
														//:'all_invoices_ship_to',
														allowBlank: false
													}

													],

													// Reset and Submit buttons
													buttons: [{
														text: 'cancel',
														ItemId:'closed_invoices_cancel_edit',

														handler: function() {
															v.close();
														}
													}, {
														text: 'save',
														itemId:'closed_invoices_save_edit',
														formBind: true, //only enabled once the form is valid
														disabled: true,


														handler: function() {

															var form = this.up('form').getForm();

															if (form.isValid()) {
																form.submit({

																	success: function(form, action) {
																		v.close();
																		store3.reload();
																		//Ext.getCmp('grid5').getView().refresh();


																		Ext.Msg.alert('Success', action.result.msg);

																	},
																	failure: function(form, action) {
																		v.close();
																		Ext.Msg.alert('Failed', action.result.msg);
																	}
																});
															}
														}  }],
														// renderTo: Ext.getBody()
												})
												]
										}).show();
									}    },
									{
										xtype: 'button',
										itemId:'closed_invoices_predict_button',
										disabled:true,
										text: 'Predict',
										listeners:{
											click:function()
											{
												//Implement it
												//advsear.show();

											}
										}	},
										'->',
										{
											xtype: 'splitbutton',
											itemId:'closed_invoices_advancesearch_button',
											text:'Advance Search',

											listeners:{
												click:function()
												{
													//Implement 
													//alert('hey');
													//var f = Ext.getCmp('all_advanced_search_panel');
													//f.setHidden(false);
													//advsearch.show();
													var seq=Ext.ComponentQuery.query('#closed_invoices_advancesearch_panel')[0];
													if(!seq.isVisible())
													{
														seq.show();
													}
													else
													{
														seq.hide();
													}

												}}


										}]}]
					}]
			}]

		});
		
		var p2=Ext.create('Ext.panel.Panel',{
			title:'Open Invoices',
			width:'100%',
			items:[{	
				xtype: 'panel',
				//bodyStyle: 'margin:20px;',

				//bodyStyle: 'margin-down:30px;',
				border:true,
				//width:"100%",
				//align:'center',
				id: 'open_invoices_advancesearch_panel',
				layout: 'column',
				hidden : true,
				items: [{
					xtype:'container',
					padding : 10,
					layout:{
						layout : 'border',
//						align : 'center'
					},
					width : Ext.getBody().getViewSize().width * 1,

					items:[{
 
						xtype:'form',

//						xtype: 'container',
						layout:{
							type:'column',
							align : 'center'
						},
						items: [{
							columnWidth: 0.50,
//							xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'datefield',
								itemId: 'open_invoices_due_date',
								id: 'open_invoices_due',
								fieldLabel: 'Due_Date'
							},{
								xtype:'numberfield',
								itemId:'open_invoices_actual_open_amount',
								id:'open_invoices_amount',
								fieldLabel: 'Actual Open Amount'
							}]
						},
						{
							columnWidth: 0.50,
							//xtype: 'container',
							layout:{
								type:'vbox',
								align : 'center'
							},
							items:[{
								xtype:'combo',
								itemId: 'open_invoices_fiscal_year',
								id: 'open_invoices_fiscal',
								fieldLabel: 'Fiscal Year',
								 store:['2016','2017','2015'],
							},{
								xtype:'textfield',
								itemId:'open_invoices_customer_name',
								id:'open_invoices_customer',	
								fieldLabel: 'Customer Name'
							}]
						}],
						buttonAlign : 'center',
						buttons:[
							{

								text:'Clear',
								//maxWidth:'100',

								//dock:'bottom',
								//align:'center',
								id:'open_invoices_clear_advanceSearch',
								listeners:{
									click:function(){
										//Ext.Msg.alert('hey');
										Ext.getCmp('open_invoices_customer').setValue("");
										Ext.getCmp('open_invoices_fiscal').setValue("");
										Ext.getCmp('open_invoices_due').setValue("");
										Ext.getCmp('open_invoices_amount').setValue("");
										var allstore=Ext.getStore('datastore2');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : null,
											amount : null,
											fiscalYear : null,
											customerName : null,
											type:'1'
										};
										allstore.load();
									}
								}
							},

							{
								//xtype: 'button',


								text:'Search',

					

								id:'open_invoices_search_button',
								listeners:{
									click:function(){
										//alert('hey');
										var allstore=Ext.getStore('datastore2');
										allstore.getProxy().url='InvoiceData';
										allstore.getProxy().extraParams = {
											dueDate : Ext.ComponentQuery.query('#open_invoices_due_date')[0].getValue(),
											amount : Ext.ComponentQuery.query('#open_invoices_actual_open_amount')[0].getValue(),
											fiscalYear : Ext.ComponentQuery.query('#open_invoices_fiscal_year')[0].getValue(),
											customerName : Ext.ComponentQuery.query('#open_invoices_customer_name')[0].getValue(),
											type:'1'
										};
										allstore.load();
									}
								}
							}]
					}]
				}]

			},
			{
				//grid1.show();
				xtype:'grid',
				id:'opengrid',
				itemId:'open_invoices_grid_panel',
				store:Ext.data.StoreManager.lookup('datastore2'),
				columns:[
					{text: 'id', dataIndex: 'id' },
					{text: 'accountId', dataIndex: 'accountId' },
					{text: 'companyCode', dataIndex: 'companyCode' },
					{text: 'documentNumberNorm', dataIndex:  'documentNumberNorm'},
					{text: 'fiscalYear', dataIndex: 'fiscalYear' },
					{text: 'branch', dataIndex:'branch' },
					{text: 'customerNumberNorm', dataIndex: 'customerNumberNorm'},
					{text: 'fkCustomerMapId', dataIndex:'fkCustomerMapId'},
					{text: 'documentDateNorm', dataIndex:'documentDateNorm' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'baselineDateNorm', dataIndex:'baselineDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'dueDateNorm', dataIndex:'dueDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceNumberNorm', dataIndex: 'invoiceNumberNorm' },
					{text: 'openAmountNorm', dataIndex: 'openAmountNorm'},
					{text: 'paymentTerms', dataIndex: 'paymentTerms' },
					{text: 'clearingDateNorm', dataIndex: 'clearingDateNorm',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'isOpen', dataIndex:'isOpen'},
					{text: 'orderType', dataIndex: 'orderType'},
					{text: 'orderDate', dataIndex: 'orderDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'businessArea', dataIndex: 'businessArea' },
					{text: 'shipDate', dataIndex: 'shipDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					}, },
					{text: 'jobId', dataIndex:'jobId'},
					{text: 'taxAmt', dataIndex:  'taxAmt'},
					{text: 'currentDisputAmount', dataIndex: 'currentDisputAmount' },
					{text: 'shipTo', dataIndex: 'shipTo'},
					{text: 'documentId', dataIndex:'documentId' },
					{text: 'documentDate', dataIndex: 'documentDate' ,renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text:'actualOpenAmount', dataIndex: 'actualOpenAmount' },
					{text:'dueDate', dataIndex:'dueDate',renderer:function(v){
						var d=new Date(v);
						return d.toLocaleDateString();
					},},
					{text: 'invoiceAge', dataIndex:'invoiceAge'},
					{text: 'isValidDispute', dataIndex: 'isValidDispute'},
					{text: 'postingKey', dataIndex: 'postingKey'},
					{text: 'strategyId', dataIndex: 'strategyId'},
					{text:'currency', dataIndex:'currency' },
					{text:'debitCreditIndicator', dataIndex: 'debitCreditIndicator' },
					{text:'validOpenAmount', dataIndex: 'validOpenAmount' },
					{text: 'customerName', dataIndex: 'customerName'},
					{text: 'retainageAmount', dataIndex:'retainageAmount' },
					{text: 'predictionDate', dataIndex:'predictionDate' }

					],	
					selModel:{
						selType:'checkboxmodel',
						id:'check',
						listeners: {


							select: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('opengrid').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('openeditbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('openeditbutton');
								SaveBtn.setDisabled(true);

								}

							},
							deselect: function (model, record, index, eOpts) {
								var allSelect=Ext.getCmp('opengrid').getSelection();
								if(allSelect.length==1)
								{

									var SaveBtn = Ext.getCmp('openeditbutton');
									SaveBtn.setDisabled(false);
									//Ext.Msg.alert('hey');
								}
								else
								{var SaveBtn = Ext.getCmp('openeditbutton');
								SaveBtn.setDisabled(true);

								}

							}
						}
					},
					tbar:new Ext.PagingToolbar({
						store : Ext.data.StoreManager.lookup('datastore2'),
						displayInfo:true,

						style : 'padding-right : 17px',
						displayMsg:'Users'+'{0}-{1} of {2}',
						emptyMsg: "No Records to display",
						items:
							[
								'->',
						{
							xtype:'panel',
							
							itemId:'open_invoices_total_amount',
							
						}]
					}),
					bbar:{
						xtype:'pagingtoolbar',	

						//plugins:'ux-orogr',
						store: 'datastore2', 
						displayInfo:true,
					}	
			}],

			dockedItems:[{ 
				items:[
					{


						xtype:'container',
						width:"100%",
						layout:{
							type:'vbox'
						},
						items:[
							{
								xtype: 'toolbar',
								width:"100%",
								itemId:'open_invoices_toolbar',
								items:[{
									xtype: 'button',
									text: 'Edit',
									itemId:'open_invoices_edit_button',
									id:'openeditbutton',
									disabled: true,
									handler:function(){
										var allSelect=Ext.getCmp('opengrid').getSelection();
										var v=Ext.create('Ext.window.Window',{
											title: 'Edit',
											layout: 'fit',
											autoScroll: true,
											y: 120,
											width: 400,
											height: 200,
											modal: true,
											//  closeAction: 'hide',
											items: [
												Ext.create('Ext.form.Panel', {
													//  title: 'Simple Form',
													bodyPadding: 15,
													itemId:'open_invoices_edit_panel',
													width: 200,
													id:'form',
													height:200,    // The form will submit an AJAX request to this URL when submitted
													url: 'DataSave2',

													layout: 'anchor',
													defaults: {
														anchor: '100%'
													},

													// The fields
													defaultType: 'textfield',
													items: [{  
														fieldLabel: 'Job Id',
														id:'job_id',
														itemId:'open_invoices_job_id',
														name: 'jobid',
														value:allSelect[0].data.jobId,
														allowBlank: false
													},{
														fieldLabel: 'Ship To',
														name: 'shipto',
														value:allSelect[0].data.shipTo,
														id:'open_invoices_ship_to',
														itemId:'ship_to',
														allowBlank: false
													},
													{ 
														xtype:"hiddenfield",
														name: 'id',
														value:allSelect[0].data.id,
														//:'all_invoices_ship_to',
														allowBlank: false
													}

													],

													// Reset and Submit buttons
													buttons: [{
														text: 'cancel',
														ItemId:'open_invoices_cancel_edit',

														handler: function() {
															v.close();
														}
													}, {
														text: 'save',
														itemId:'open_invoices_save_edit',
														formBind: true, //only enabled once the form is valid
														disabled: true,


														handler: function() {

															var form = this.up('form').getForm();

															if (form.isValid()) {
																form.submit({

																	success: function(form, action) {
																		v.close();
																		store2.reload();
																		//Ext.getCmp('grid5').getView().refresh();


																		Ext.Msg.alert('Success', action.result.msg);

																	},
																	failure: function(form, action) {
																		v.close();
																		Ext.Msg.alert('Failed', action.result.msg);
																	}
																});
															}
														}  }],
														// renderTo: Ext.getBody()
												})
												]
										}).show();
									}    },
									{
										xtype: 'button',
										itemId:'open_invoices_predict_button',
										text: 'Predict',
										listeners: {
					     	            	click: function (button){
					     	        		   var mlRequestJSON ={};
					     	        		   mlRequestJSON.id = '1605241';
					     	        		   var gridPanel=Ext.ComponentQuery.query('#open_invoices_grid_panel')[0];
					     	        		   mlRequestJSON.data= getJsonData(gridPanel);
					     	        		   Ext.Ajax.request({
					     	        			   url: 'http://127.0.0.1:5000/predict',// url will be provided by machine learning team
					     	        			   method:'POST',
					     	        			   headers: {
					     	        				   'Content-Type':'application/text',
					     	        				   'Access-Control-Allow-Origin':'*'
					     	        			   },
					     	        			   params: {
					     	        				   data: JSON.stringify(mlRequestJSON),
					     	        			   },
					     	        			   success: function (result, request) {
					     	        				  console.log(JSON.parse(result.responseText))
					     	        		
					     	        			   },
					     	        			   failure: function (result, request) {
					     	        				   Ext.Msg.alert('Warning', 'Error');
					     	        			   }
					     	        		   });
					     	        	   }
										}
									},
										'->',
										{
											xtype: 'splitbutton',
											itemId:'open_invoices_advancesearch_button',
											text:'Advance Search',

											listeners:{
												click:function()
												{
													
													var seq=Ext.ComponentQuery.query('#open_invoices_advancesearch_panel')[0];
													if(!seq.isVisible())
													{
														seq.show();
													}
													else
													{
														seq.hide();
													}

												}}


										}]}]
					}]
			}]

		});
		
	
		
		
	// dfjndkd
		
		
		Ext.create('Ext.panel.Panel',{
		
			width:'100%',
			items:[{	
				html:'<table><tr><td><img src="hrc.png" height="50" ></td><td><img src="img.png"  align="middle" style="margin-left:400px;"> </td><td><p style="margin-left:400px;"> Welcome &nbsp;<b>Sumit Kumar Soni</b></p></td></tr></table>'
					
			}
			,{
				xtype:'tabpanel',
				width:'100%',
				id:'root_invoices_tabpanel',
				title:'invoices',
				
				//height:800,
				items:[
					
					p1,p2,p3],
				
			},
			{
				html:'<a style="margin-left:550px;color:blue;" href="https://www.highradius.com/privacy-policy/"  >Privacy Policy. </a>| &copy; 2019 HighRadius Corporation. All rights reserved.'
			}
			],
		renderTo :Ext.getBody()
			});
	}
});


function getJsonData(gridPanel){
	var storeData = gridPanel.getSelectionModel().getSelected();
	var invoices = [];
	
	for (var i = 0; i< storeData.length; i++){
		invoices.push(storeData.items[i].data);
	}
	
	return invoices;
}
