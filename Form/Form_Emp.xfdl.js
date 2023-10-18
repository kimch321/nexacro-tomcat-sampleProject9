(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EMP");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Tyler</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20060907</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">lightgray</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row><Row><Col id=\"DEPT_CD\">06</Col><Col id=\"DEPT_NAME\">06</Col></Row><Row><Col id=\"DEPT_CD\">07</Col><Col id=\"DEPT_NAME\">07</Col></Row><Row><Col id=\"DEPT_CD\">08</Col><Col id=\"DEPT_NAME\">08</Col></Row><Row><Col id=\"DEPT_CD\">09</Col><Col id=\"DEPT_NAME\">09</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row><Row><Col id=\"POS_CD\">05</Col><Col id=\"POS_NAME\">05</Col></Row><Row><Col id=\"POS_CD\">06</Col><Col id=\"POS_NAME\">06</Col></Row><Row><Col id=\"POS_CD\">07</Col><Col id=\"POS_NAME\">07</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","10","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","535","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Retrive");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","600","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","665","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","730","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","40","780","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","12","70","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_cd","99","11","60","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","163","11","126","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","293","11","45","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("find");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","381","11","39","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","433","14","187","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">All</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset","716","12","50","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("reset");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","95","390","495",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"DEPT_CD\"/><Cell col=\"4\" text=\"POS_CD\"/><Cell col=\"5\" text=\"HIRE_DATE\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#.###\"/><Cell col=\"7\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" displaytype=\"text\" edittype=\"textarea\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;Total: &quot; + comp.parent.ds_emp.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;SALARY&apos;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","411","95","380","495",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","20","36","18",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","8","48","47","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("Emp ID");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","8","74","67","23",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","10","146","48","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("Position");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","11","206","46","18",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","11","232","45","23",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("Married");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static06","10","264","52","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("Hire Date");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","11","296","77","16",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("Annual Salary");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","11","374","36","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Memo");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","132","20","140","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","132","48","90","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","131","80","150","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","132","109","170","90",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","130","210","146","14",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","132","235","16","17",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","131","266","150","23",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","131","296","130","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_format("#.###");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","132","329","226","155",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp.xfdl", function() {

        // Search Area Dept Popup
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);

        	var objChild = new ChildFrame("popDept", "absolute", nLeft, nTop, 300, 400);
        	objChild.set_formurl("Form::Pop_DeptSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_callback_pop");

        };

        // Dept Popup Callback
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if (sReturn == undefined)
        	{
        		sReturn = "";
        	}
        	if (sPopupId == "popDept")
        	{
        		if (sReturn.length > 0)
        		{
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_dept_cd.set_value(arrRtn[0]);
        			this.div_search.form.edt_dept_nm.set_value(arrRtn[1]);
        		}
        	}
        }
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "A")
        	{
        		this.ds_emp.filter("");
        	}
        	else
        	{
        		this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
        	}
        };

        this.div_search_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_dept_cd.set_value("");
        	this.div_search.form.edt_dept_nm.set_value("");
        	this.div_search.form.rdo_gender.set_value("A");
        	this.ds_emp.filter("");
        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	// this.alert("check");
        	var id = "svcSelect";
        	var url = "SvcURL::select_emp.jsp";// svcURL에 설정된 경로에 jsp파일 지정
        	var reqDs = "";
        	var respDs = "ds_emp=out_emp";// Form_Emp 폼에 ds_emp에 transaction으로 가져온 out_emp dataset을 입력한다.
        	var args = "";
        	var callback = "fn_callback";// 비동기 통신 결과를 받을 콜백 함수 지정

        	this.transaction(id, url, reqDs, respDs, args, callback);
        	// trace("확인");
        	// this.grd_list.createFormat();

         	id = "deptSelect";
         	url = "SvcURL::select_dept.jsp" // SvcURL에 설정된 경로에서 select_dept.jsp 파일을 지정한다.
         	respDs = "ds_dept=out_dept"// Form_Emp 폼에 de_dept에 transaction으로 가져온 out_dept dataset을 입력한다.

         	this.transaction(id, url, reqDs, respDs, args, callback);

        	id = "posSelect";
        	url = "SvcURL::select_pos.jsp"; // SvcURL에 설정된 경로에서 select_dept.jsp 파일을 지정한다.
        	respDs = "ds_pos=out_pos"; //Form_Emp 폼에 ds_pos에 transaction으로 가져온 out_pos dataset을 입력한다.

        	this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.fn_callback = function (svcID, errCD, errMSG)
        {
        	// this.alert("check2");
        	if (errCD == 0) //errCD 값이 0인 경우 transaction 성공
        	{
        		if (svcID == "empSelect")
        		{
        			var rowcount = this.ds_emp.rowcount;
        			this.alert(rowcount + " numbers of data have been found.");
        			this.alert(svcID + "Retrieve Success!!!");
        		}
        		else if (svcID == "deptSelect")
        		{
        			var rowcount = this.ds_dept.rowcount;
        			this.alert(rowcount + " numbers of data have been found.");
        			this.alert(svcID + "Retrieve Success!!!");
        		}
        		else if (svcID == "posSelect")
        		{
        			var rowcount = this.ds_pos.rowcount;
        			this.alert(rowcount + " numbers of data have been found.");
        			this.alert(svcID + "Retrieve Success!!!");
        		}
        	}
        	else // errCD 값이 0이 아닌 경우(에러가 존재한다면,) transaction 실패
        	{
        		this.alert("Error: " + errMSG + ", errCD:" + errCD + ", svcID" + svcID);
        		return;
        	}
        	if (svcID == "svcSelect")
        	{
        		this.alert("Retrieve Success!!!");
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.alert("check");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_search_btn_reset_onclick,this);
            this.div_detail.form.Static00.addEventHandler("onclick",this.div_detail_Static00_onclick,this);
            this.div_detail.form.rdo_gender.addEventHandler("onitemchanged",this.div_detail_rdo_gender_onitemchanged,this);
        };
        this.loadIncludeScript("Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
