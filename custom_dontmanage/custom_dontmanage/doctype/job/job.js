// Copyright (c) 2023, thirvusoft and contributors
// For license information, please see license.txt

// Copyright (c) 2023, thirvusoft and contributors
// For license information, please see license.txt

dontmanage.ui.form.on('Job', {
	yes: function(frm) {
		if (frm.doc.yes){
			frm.set_value("no", 0)
		}
	},
	no: function(frm) {
		if (frm.doc.no){
			frm.set_value("yes", 0)
		}
	},
	yes1: function(frm) {
		if (frm.doc.yes1){
			frm.set_value("no1", 0)
		}
	},
	no1: function(frm) {
		if (frm.doc.no1){
			frm.set_value("yes1", 0)
		}
	},
	yes2: function(frm) {
		if (frm.doc.yes2){
			frm.set_value("no2", 0)
		}
	},
	no2: function(frm) {
		if (frm.doc.no2){
			frm.set_value("yes2", 0)
		}
	},
	yes3: function(frm) {
		if (frm.doc.yes3){
			frm.set_value("no3", 0)
		}
	},
	no3: function(frm) {
		if (frm.doc.no3){
			frm.set_value("yes3", 0)
		}
	},
	yes4: function(frm) {
		if (frm.doc.yes4){
			frm.set_value("no4", 0)
		}
	},
	no4: function(frm) {
		if (frm.doc.no4){
			frm.set_value("yes4", 0)
		}
	},
	prepress_regular: function(frm) {
		if (frm.doc.prepress_regular){
			frm.set_value("prepress_direct", 0)
		}
	},
	prepress_direct: function(frm) {
		if (frm.doc.prepress_direct){
			frm.set_value("prepress_regular", 0)
		}
	}
});
