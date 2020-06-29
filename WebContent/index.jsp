<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>HRC Application</title>
<script type="text/javascript">
	hrc = {};
	hrc.util = {};
</script>
<script type="text/javascript" src="static/extjs/ext-all-6.0.2.js"> </script>
<script type="text/javascript" src="static/js/hrc.js"> </script>
<script type="text/javascript" src="static/js/util.js"> </script>
<link rel="stylesheet" type="text/css" href="static/extjs/theme-triton-all.css" />
<link rel="shortcut icon" href="static/extjs/images/favicon.ico" type="image/x-icon" />
</head>
<body>
<center><h1>Welcome to HRC (This is a sample page) </h1></center><h4>Please find ExtJS 6.0.2 documentation <a href="https://docs.sencha.com/extjs/6.0.2/" target="_blank">here</a></h4>
<script type="text/javascript">
Ext.onReady(function () {
	var store = hrc.util.createStore('userdata');

    Ext.create('Ext.grid.Panel', {
        title: 'HRC',
        itemId: 'hrc_grid_panel',
        height: 525,
        store: store,
        columns: [{
            text: 'Name',
            dataIndex: 'name'
        }, {
            text: 'Email',
            dataIndex: 'email'
        }, {
            text: 'Phone',
            dataIndex: 'phone'
        }],
        bbar: new Ext.PagingToolbar({
            pageSize: 20,
            store: store,
            displayInfo: true,
            style : 'padding-right : 17px;',
            displayMsg: 'Users'+' {0} - {1} of {2}',
            emptyMsg: "No Records to display",
            items: []
            }),
       tbar: new Ext.PagingToolbar({
            pageSize: 20,
            store: store,
            displayInfo: true,
            style : 'padding-right : 17px;',
            displayMsg: 'Users'+' {0} - {1} of {2}',
            emptyMsg: "No Records to display",
            items: []
            }),
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: 'Add',
                listeners: {
                    click: function () {
                    	//Implement your functionality
                    }
                }
            }]
        }],
        renderTo: Ext.getBody()
    });

});
</script>
</body>
</html>